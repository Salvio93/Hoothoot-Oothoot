# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import re
from contextlib import suppress

import odoo.tests
from odoo.tools.misc import file_open

RE_FORBIDDEN_STATEMENTS = re.compile(r'test.*\.(only|debug)\(')
RE_ONLY = re.compile(r'QUnit\.(only|debug)\(')


def unit_test_error_checker(message):
    return '[HOOT]' not in message


def qunit_error_checker(message):
    # ! DEPRECATED
    # We don't want to stop qunit if a qunit is breaking.

    # '%s/%s test failed.' case: end message when all tests are finished
    if  'tests failed.' in message:
        return True

    # "QUnit test failed" case: one qunit failed. don't stop in this case
    if "QUnit test failed:" in message:
        return False

    return True  # in other cases, always stop (missing dependency, ...)

import logging
import json
import time
from xmlrpc.client import Fault
from passlib.totp import TOTP
from odoo.tests import tagged, get_db_name, new_test_user, HttpCase
from odoo.tools import mute_logger
from odoo.http import request
from ..controllers.home import Home

_logger = logging.getLogger(__name__)

#@tagged('post_install', '-at_install')
class TestMAGICMixin:
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        
        """cls.user_test = new_test_user(
            cls.env, 'test_user', password='test_user', tz='UTC',
        )"""
        
    def install_magichook(self):
        self.env.cr.savepoint().rollback()  #usefull?
        global_savepoint = self.env.cr.savepoint()

        def magic_hook(self):
            global_savepoint.rollback()    #rollback after each fetch
            #print(request.httprequest.get_data())
            partners = {}
            
            #self.env['res.partner'].sudo().search([]).unlink()
            """partners_to_archive = self.env['res.partner'].sudo().search([
                ('id', 'not in', self.env['res.users'].sudo().search([]).mapped('partner_id.id'))
            ])
        
            partners_to_archive.write({'active': False}) """
            

            for key in request.params:

                data = request.params[key]
                
                if data == None:
                    raise Exception

                for model, values in data.items():
                    partner = self.env[model].create(values)
                partners[key]= {'id': partner.id, 'name': partner.name}
            response = partners
            return response



        magic_hook.routing_type = 'json'
        self.env.registry.clear_cache('routing')

        # patch Home to add test endpoint
        Home.magic_hook = http.route('/magic', type='jsonrpc', auth='public')(magic_hook)
        # remove endpoint and destroy routing map



        
        @self.addCleanup
        def _cleanup():
            del Home.magic_hook
            self.env.registry.clear_cache('routing')
            #global_savepoint.rollback() #don't know when cleanup is called but seems right to rollback (except if it prevent del Home.magic_hook)

from odoo.tests.common import *
from odoo import http

@odoo.tests.tagged('post_install', '-at_install')
class WebSuite(TestMAGICMixin,odoo.tests.HttpCase):

    def setUp(self):
        super().setUp()
        self.install_magichook()
    
    @odoo.tests.no_retry
    def test_unit_desktop(self):
        # Unit tests suite (desktop)
        self.env.cr.savepoint()
        self.browser_js('/web/tests?headless&loglevel=2&preset=desktop&timeout=15000', "", "", login='admin',debug=False, timeout=1800, success_signal="[HOOT] test suite succeeded", error_checker=unit_test_error_checker)

    @odoo.tests.no_retry
    def test_hoot(self):
        # HOOT tests suite
        self.env.cr.savepoint()
        self.browser_js("http://localhost:8069/web/tests?debug=assets&test=11b0219e&test=ba5db6d8", "", "", login='admin',debug=False, timeout=1800, success_signal="teztzeyzeyeyyyyyyyyyyyyyyyyyyy", error_checker=unit_test_error_checker)
        #self.browser_js('/web/static/lib/hoot/tests/index.html?headless&loglevel=2', "", "", login='admin',cpu_throttling=1,debug=False, timeout=1800, success_signal="[HOOT] test suite succeeded", error_checker=unit_test_error_checker)
    


        
    
    
    """
    @odoo.tests.no_retry
    def test_qunit_desktop(self):
        # ! DEPRECATED
        self.browser_js('/web/tests/legacy?mod=web', "", "", login='admin', timeout=1800, success_signal="QUnit test suite done.", error_checker=qunit_error_checker)
    """
    def test_check_suite(self):
        self._check_forbidden_statements('web.assets_unit_tests')
        # Checks that no test is using `only` or `debug` as it prevents other tests to be run
        self._check_only_call('web.qunit_suite_tests')

    def _check_forbidden_statements(self, bundle):
        # As we currently are not in a request context, we cannot render `web.layout`.
        # We then re-define it as a minimal proxy template.
        self.env.ref('web.layout').write({'arch_db': '<t t-name="web.layout"><head><meta charset="utf-8"/><t t-esc="head"/></head></t>'})

        assets = self.env['ir.qweb']._get_asset_content(bundle)[0]
        if len(assets) == 0:
            self.fail("No assets found in the given test bundle")

        for asset in assets:
            filename = asset['filename']
            if not filename.endswith('.test.js'):
                continue
            with suppress(FileNotFoundError):
                with file_open(filename, 'rb', filter_ext=('.js',)) as fp:
                    if RE_FORBIDDEN_STATEMENTS.search(fp.read().decode('utf-8')):
                        self.fail("`only()` or `debug()` used in file %r" % asset['url'])

    def _check_only_call(self, suite):
        # ! DEPRECATED
        # As we currently aren't in a request context, we can't render `web.layout`.
        # redefinied it as a minimal proxy template.
        self.env.ref('web.layout').write({'arch_db': '<t t-name="web.layout"><head><meta charset="utf-8"/><t t-esc="head"/></head></t>'})

        assets = self.env['ir.qweb']._get_asset_content(suite)[0]
        if len(assets) == 0:
            self.fail("No assets found in the given test suite")

        for asset in assets:
            filename = asset['filename']
            if not filename.endswith('.js'):
                continue
            with suppress(FileNotFoundError):
                with file_open(filename, 'rb', filter_ext=('.js',)) as fp:
                    if RE_ONLY.search(fp.read().decode('utf-8')):
                        self.fail("`QUnit.only()` or `QUnit.debug()` used in file %r" % asset['url'])

"""
@odoo.tests.tagged('post_install', '-at_install')
class MobileWebSuite(odoo.tests.HttpCase):
    browser_size = '375x667'
    touch_enabled = True

    @odoo.tests.no_retry
    def test_unit_mobile(self):
        # Unit tests suite (mobile)
        self.browser_js('/web/tests?headless&loglevel=2&preset=mobile&tag=-headless&timeout=15000', "", "", login='admin', timeout=1800, success_signal="[HOOT] test suite succeeded", error_checker=unit_test_error_checker)
"""