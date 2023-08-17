from flask import Flask,jsonify,request
from flask_mysqldb import MySQL

app=Flask(__name__)
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="user",
  database="sampledb"
)
mycursor = mydb.cursor()
cur=mydb.cursor()
@app.route('/login',methods=['POST'])
def index():
    user = request.json['user']
    password= request.json['password']
    sql="insert into  login (username,password,type)values (%s,%s,%s)"
    
    val=(user,password,'user')
    cur.execute(sql,val)
    mydb.commit()
    return jsonify("Success")
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
    
@app.route('/customer',methods=["POST"])
def add():
    return jsonify("hai")


@app.route('/')

#for user details
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

#for login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    sql = "SELECT * FROM login WHERE email = %s AND password = %s"
    val = (email, password)
    cur.execute(sql, val)
    user = cur.fetchone()

    if user:
        return jsonify("Login Successful")
    else:
        return jsonify("Incorrect email or password"), 401
    
# for signup

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    check_email_sql = "SELECT * FROM login WHERE email = %s"
    cur.execute(check_email_sql, [email])  

    user = cur.fetchone()

    if user:
        return jsonify("Email already exists")
    else:
        sql = "INSERT INTO login (type, email, password) VALUES (%s, %s, %s)"
        val = ['user', email, password]  
        cur.execute(sql, val)
        mydb.commit()

        return jsonify("Signup Successful")

@app.route('/company', methods=['POST'])
def company():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    #need password field in frontend
    check_email_sql = "SELECT * FROM login WHERE email = %s"
    cur.execute(check_email_sql, [email])  

    user = cur.fetchone()

    if user:
        return jsonify("Email already exists")
    else:
        sql = "INSERT INTO login (type, email, password) VALUES (%s, %s, %s)"
        val = ['company', email, password]  
        cur.execute(sql, val)
        mydb.commit()
        return jsonify("Signup Successful")
    

@app.route('/api/products', methods=['GET'])
def get_productslist():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT id, pname FROM products")  # Adjust the query as needed
        products = cursor.fetchall()
        cursor.close()
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)})



if __name__=="__main__":
    app.run(host='192.168.56.1',port='3000',debug=True)
'''

from flask import Flask, request, jsonify
import mysql.connector 
db=mysql.connector.connect(
    host= "localhost",
    user= "Madumitha",
    password= "madumitha",
    database="WASTETOVALUE"
)
app = Flask(__name__)

products = []
@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/add_product', methods=['POST'])
def add_product():
    data = {
        "productName":request.json['productName'],
        "description":request.json['description'],
        'price':request.json['price']
    }
    image=request.files['image']
    image_path=os.path.join('')
    cursor=db.cursor()
    query = "INSERT INTO productdetails (Product_name,product_description,product_price) VALUES (%s, %s, %s)"
    values=(data['productName'],data['description'],data['price'])
    products.append(data)
    print(products)
    try:
        cursor.execute(query,values)
        db.commit()
        cursor.close()
        return jsonify({'message':'Product added to database successfully'})
    except Exception as e:
        db.rollback()
        cursor.close()
        return jsonify({'error':str(e)})

@app.route('/api/productslist', methods=['GET'])
def get_productslist():
    try:
        cursor = db.cursor(dictionary=True)
        query = "SELECT * FROM productdetails"
        cursor.execute(query)
        products = cursor.fetchall()
        cursor.close()
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='192.168.56.1',port='3000',debug=True)'''