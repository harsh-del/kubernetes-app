#!/usr/bin/python3

import cgi
import subprocess
import time

print("content-type:  text/html")
print("Access-Control-Allow-origin: *")
print()



f = cgi.FieldStorage()
cmd = f.getvalue("x")
time.sleep(5)
otp = subprocess.getoutput("sudo wget  -O  /var/www/cgi-bin/file.yml https://javascript-yml-buc.s3.ap-south-1.amazonaws.com/test/{}".format(cmd))
output= subprocess.getoutput("sudo kubectl --kubeconfig /kubernetes/admin.conf apply -f file.yml ")
o = subprocess.getoutput("sudo rm -rf file.yml")
print(output)
