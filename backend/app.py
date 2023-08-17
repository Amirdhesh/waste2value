from flask import Flask,jsonify,request
from flask_mysqldb import MySQL

app=Flask(__name__)
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="tiger",
  database="wtv"
)
mycursor = mydb.cursor()
cur=mydb.cursor()
'''@app.route('/login',methods=['POST'])
def index():
    user = request.json['user']
    password= request.json['password']
    sql="insert into  login (username,password,type)values (%s,%s,%s)"
    
    val=(user,password,'user')
    cur.execute(sql,val)
    mydb.commit()
    return jsonify("Success")'''
@app.route('/user',methods=['GET'])
def user():
    cur.execute("select * from login")
    result = cur.fetchall()
    return jsonify(result)
@app.route('/createuseraccount',methods=["POST"])
def createuseraccount():
    email=request.json['email']
    password=request.json['password']
    cur.execute("select email from login")
    result = cur.fetchall()
    exist=False
    for i in result :
        if i[0]== email:
            exist=True
            break
    if exist==False:
        sql="insert into  login (password,type,email)values (%s,%s,%s)"
        val=(password,'user',email)
        cur.execute(sql,val)
        mydb.commit()
        return jsonify("Sucess")
    else:
        return jsonify("Account already exists")
    
@app.route('/custemer',methods=["POST"])
def add():
    return jsonify("hai")


@app.route('/')
@app.route('/userdetails',methods=["POST"])
def userdetails():
    id=request.json['id']
    qury="select username from login where id="+id
    cur.execute(qury)
    result=cur.fetchall()
    if result[0][0]==None:
        username=request.json['username']
        sql="update login set username=%s where id="+id
        val=(username,)
        cur.execute(sql,val)
        mydb.commit()
        return jsonify("Updated the details")
    else:
        return jsonify("details allredy exist")



if __name__=="__main__":
    app.run(host='192.168.56.1',port='3000',debug=True)
