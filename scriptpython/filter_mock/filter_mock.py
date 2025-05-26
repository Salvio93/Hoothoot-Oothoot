f = open("file_w_mock.txt", "r")
#cut_ele =["(",")"]
cut_ele = ["(",",",".","{"," ","/",")",';']
char = []
count = 0
count_fct=0
tmp =""
def spliter(cut,txt):
    if (cut in txt):
        return True
    return False
for line in f:

    if ("def " in line and "typedef " not in line):
        count_fct+=1
    location = line.split(":")[0]
    data = line.split(":")[1]

    if tmp != location:
        pass
        print(location.split("addons")[1])
        count+=1
    try:
        to_add="mock"+data.split('mock')[1]
        for e in cut_ele:
            if (spliter(e,to_add)):
                to_add = to_add.split(e)[0]


        char.append(to_add)
    except IndexError:
        try:

            to_add="Mock"+data.split('Mock')[1]
            for e in cut_ele:

                if (spliter(e,to_add)):
                    to_add = to_add.split(e)[0]


            char.append(to_add)
        except IndexError:
            pass
    tmp = location
print(list(set(char)))
print(count)
print(count_fct)


f.close()