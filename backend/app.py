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
@app.route('/login',methods=['POST'])
def index():
    user = request.json['user']
    password= request.json['password']
    sql="insert into  login (username,password,type)values (%s,%s,%s)"
    
    val=(user,password,'admin')
    cur.execute(sql,val)
    mydb.commit()
    return jsonify("Success")
@app.route('/user',methods=['GET'])
def user():
    cur.execute("select * from login")
    result = cur.fetchall()
    return jsonify(result)
@app.route("/mridul",method=["GET"])
def mridul():
    return jsonify("Mridul")


if __name__=="__main__":
    app.run(host='192.168.56.1',port='3000',debug=True)
