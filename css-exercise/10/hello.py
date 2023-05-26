import cgi

# 获取表单数据
form = cgi.FieldStorage()

# 获取表单参数
name = form.getvalue("name")

# 返回 HTML 页面
print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Hello World - First CGI Program</title>")
print("</head>")
print("<body>")
print("<h2>Hello %s</h2>" % name)
print("</body>")
print("</html>")