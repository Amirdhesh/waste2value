from flask import Flask,jsonify,request,render_template,Response
import mysql.connector
#from flask_mysqldb import MySQL
import os
import json
import mysql.connector
import base64
import datetime
import random
import time
import cv2
import numpy as np
from ultralytics import YOLO
'''app=Flask(__name__)
import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="tiger",
  database="wtv"
)'''
from flask import Flask, request, jsonify
import mysql.connector 
mydb=mysql.connector.connect(
    host= "localhost",
    user= "root",
    password= "tiger",
    database="wtv"
)
'''
from flask import Flask, request, jsonify
import mysql.connector 
mydb=mysql.connector.connect(
    host= "192.168.0.155",
    user= "root",
    password= "tiger",
    database="wtv"
)'''
app = Flask(__name__)
mycursor = mydb.cursor()
cur=mydb.cursor()
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
         
        mydb.commit()
        return jsonify("Sucess")
    else:
        return jsonify("Account already exists")
    
@app.route('/customer',methods=["POST"])
def add():
    return jsonify("hai")




#for user details
@app.route('/userdetails/<int:id>',methods=["POST"])
def userdetails(id):
    qury="select username from login where id="+str(id)
    cur.execute(qury)
    result=cur.fetchall()
    if result[0][0]==None: 
        username=request.json['username']
        ph_no=request.json['ph_no']
        address=request.json['address']
        pin=request.json['pin']
        district=request.json['district']
        state=request.json['state']
        #update_query = "UPDATE login SET username = %s WHERE id = %d"
        #%s
        #cur.execute(update_query,[username,id])
        sql="UPDATE login SET username = %s ,address = %s,phonenumber = %s,pincode= %s,district = %s,state = %s where id=%s"
        val=(username,address,ph_no,pin,district,state,id)
        cur.execute(sql,val)
        mydb.commit()
        return jsonify("Updated the details")
    else:
        return jsonify("details allredy exist")
    
@app.route('/display_image/<int:image_id>')
def display_image(image_id):
    cursor = mydb.cursor()
    cursor.execute("SELECT image FROM login WHERE id=39")
    image_data = cursor.fetchone()[0]
    cursor.close()
    encoded_image = base64.b64encode(image_data).decode('utf-8')
    return render_template('image.html', encoded_image=encoded_image)
#for login
'''@app.route('/login', methods=['POST'])
def login():
    #data = request.get_json()
    email = request.json['email']
    password = request.json['password']
    sql = "SELECT * FROM login WHERE email = %s AND password = %s"
    val = (email, password)
    cur.execute(sql, val)
    user = cur.fetchone()
    
    if user:
        sql = "SELECT id FROM login WHERE email = %s"
        val = (email,)
        cur.execute(sql, val)
        userid = cur.fetchone()
        userid=userid[0]
        return jsonify({"message":"Login Successful","customer_id":userid})
    else:
        return jsonify("Incorrect email or password"), 401'''
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
        typesql="select type from login where email = %s"
        cur.execute(typesql,[email,])
        type=cur.fetchone()
        sql = "SELECT id FROM login WHERE email = %s"
        val = (email,)
        cur.execute(sql, val)
        userid = cur.fetchone()
        userid=userid[0]
        print(type[0])
        if type[0]=='admin':
            return jsonify({"message":"admin","customer_id":userid})
        elif type[0]=='company':
            return jsonify({"message":"company","customer_id":userid})
        elif type[0]=='user':
            return jsonify({"message":"Login Successful","customer_id":userid})
    else:
        return jsonify("Incorrect email or password")
# for signup

@app.route('/checkdetails/<int:customer_id>',methods=['GET','POST'])
def checkdetails(customer_id):
    check_name='select username from login where id=%s'
    cur.execute(check_name, [customer_id,]) 
    username = cur.fetchone()
    print(customer_id)
    print(username)
    if  username[0]!=None:
        return jsonify({"message":"Payment","customer_id":customer_id})
    else:
        return jsonify({"message":"Details","customer_id":customer_id})
    
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



#UPLOAD_FOLDER = 'uploads'
#app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
@app.route('/uplodeimage/<int:id>',methods=['POST','GET'])
def addimage(id):
    data=request.form
    image=request.files['images']

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
@app.route('/company', methods=['POST'])
def company():
    cur=mydb.cursor()
    data = request.form
    name=data.get('name')
    email = data.get('email')
    ph_no=data.get('ph_no')
    address=data.get('address')
    pin=data.get('pin')
    password=data.get('password')
    image = request.files['image']
    print(name,ph_no,address,pin,email,image)
    
    """if 'images' in request.files:
        return {'statsu':True}
    else:
        return False
    print(name)"""
    
    if image.filename == '':
        return jsonify({'message': 'No selected image'})
    
    query1="select * from login where email=%s"
    cur.execute(query1,(email,))
    user=cur.fetchone()
    print(user)
    
    if not user:
        return jsonify({"message":"Register as user"})
    else:
        if user[3]=='pending' or user[3]=='company':
            return jsonify({"message":"Already registered"})
        if user[2]!=password:
            return jsonify({"message":"Incorrect password"})
        else:
            #if image and allowed_file(image.filename):
            bdimage = base64.b64encode(image.read()) 
            query="update login set company_name=%s, phonenumber=%s, address=%s, pincode=%s ,type='pending',image1=%s where email=%s"
            cur.execute(query,(name,ph_no,address,pin,bdimage,email))
            mydb.commit()
            return jsonify({'message': 'Your account will be approved soon'})
        #else:
         #   return jsonify({'message': 'Invalid image format'})
def allowed_file(filename):
    return '.' in filename and filename.split('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']
@app.route("/viewimage",methods=["POST","GET"])
def viewimage():
    query="select image1 from login where id=34"
    cur.execute(query)
    image=cur.fetchone()
    if image:
        print(image)
        base64_cncoded=base64.decodebytes(image[0])
        print(base64_cncoded)
        return Response(base64_cncoded, mimetype="image/jpg")
    else:
        return jsonify({"message":"Image not found"})

'''
@app.route('/api/products', methods=['GET'])
def get_productslist():
    try:
        connection = mysql.connector.connect(db_config)
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT id, pname FROM products") 
        products = cursor.fetchall()
        cursor.close()
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)})


'''

@app.route('/api/add_product/<company_id>', methods=['POST'])
def add_product(company_id):
    print("Entered",company_id)
    data = request.form
    print(data)
    product_name = data.get('productName')
    product_description = data.get('product_description')
    product_price = data.get('product_price')
    image=request.files['image']
    print(product_name,product_description,product_price)
    cursor = mydb.cursor()
    bdimage = base64.b64encode(image.read()) 
    query = "INSERT INTO productdetails (product_name, product_description, product_price,company_id,image) VALUES (%s, %s, %s,%s,%s)"
    values = (product_name, product_description, product_price,company_id,bdimage)
    cursor.execute(query, values)
    mydb.commit()
    cursor.close()
    return jsonify({'message': 'Product added to database successfully'})
#search product 
@app.route('/api/searchproduct/<search>',methods=['POST','GET'])
def searchproduct(search):
    try:
        cursor = mydb.cursor(dictionary=True)
        query = "SELECT product_id,product_name,product_description,product_price,company_id FROM productdetails where product_name like '"+search+"%'"
        cursor.execute(query)
        products = cursor.fetchall()
        print(search,products)
        cursor.close()
        print(products)
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/api/searchproduct/',methods=['GET'])
def get_productslist():
    try:
        cursor = mydb.cursor(dictionary=True)
        query = "SELECT product_id,product_name,product_description,product_price,company_id FROM productdetails"
        cursor.execute(query)
        products = cursor.fetchall()
        cursor.close()
        print(products)
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/api/companyproducts/<int:company_id>',methods=['GET',"POST"])
def get_companylist(company_id):
    try:
        
        cursor = mydb.cursor(dictionary=True)
        query = "SELECT product_id,product_name,product_description,product_price,company_id FROM productdetails where company_id=%s"
        cursor.execute(query,(company_id,))
        products = cursor.fetchall()
        cursor.close()
        print(products)
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/api/selectedproduct/<int:product_id>', methods=['GET'])
def get_product_details(product_id):
    cursor = mydb.cursor(dictionary=True)
    query = "SELECT product_id,product_name,product_description,product_price,company_id FROM productdetails WHERE product_id = %s"
    cursor.execute(query, (product_id,))
    product_details = cursor.fetchone()
    return jsonify(product_details)

@app.route('/api/add_to_cart', methods=['POST'])
def add_to_cart():
    try:
        data = request.get_json()
        customer_id = data.get('customer_id')
        product_id = data.get('product_id')

        cursor = mydb.cursor()
        query = "INSERT INTO addtocart (customer_id, product_id) VALUES (%s, %s)"
        values = (customer_id, product_id)

        cursor.execute(query, values)
        mydb.commit()
        cursor.close()

        return jsonify({'message': 'Product added to cart successfully'})
    except Exception as e:
        mydb.rollback()
        cursor.close()
        return jsonify({'error': 'Product already in cart'})
    
@app.route('/api/delete_to_cart', methods=['POST'])
def delete_to_cart():
    try:
        data = request.get_json()
        customer_id = data.get('customer_id')
        product_id = data.get('product_id')
        cursor = mydb.cursor()
        query='delete from addtocart where customer_id=%s and product_id=%s'
        values = (customer_id, product_id)
        cursor.execute(query, values)
        mydb.commit()
        return jsonify({'message': 'Product deleted to cart successfully'})
    except Exception as e:
        mydb.rollback()
        return jsonify({'error': 'Product already in cart'})
    
@app.route('/api/delete_product', methods=['POST'])
def delete_product():
    try:
        data = request.get_json()
        product_id = data.get('product_id')
        cursor = mydb.cursor()
        query='delete from productdetails where product_id=%s'
        values = ( product_id,)
        cursor.execute(query, values)
        mydb.commit()
        query='delete from addtocart where product_id=%s'
        values = ( product_id,)
        cursor.execute(query, values)
        mydb.commit()
        cursor.close()
        return jsonify({'message': 'Product deleted'})
    except Exception as e:
        mydb.rollback()
        cursor.close()
        return jsonify({'error': 'Product already in cart'})

@app.route('/api/cartdetails/<int:customer_id>', methods=['GET'])
def cartdetails(customer_id):
    cursor=mydb.cursor(dictionary=True)
    query="Select * from addtocart left join productdetails on addtocart.product_id=productdetails.product_id where customer_id= %s"
    value=(customer_id,)
    cursor.execute(query,value)
    cartdata=cursor.fetchall()
    return jsonify(cartdata)

@app.route('/api/contributions/<customer_id>',methods=['GET'])
def fetchcontributiondata(customer_id):
    cursor = mydb.cursor(dictionary=True)
    query="Select customer_id, contribution_id,date_info,status,coins from contributions where customer_id=%s"
    cursor.execute(query,(customer_id,))
    data=cursor.fetchall()
    print(data)
    return jsonify(data)

@app.route('/api/fetchcustomercoins/<customer_id>',methods=['GET'])
def fetchcustomercoins(customer_id):
    cursor=mydb.cursor(dictionary=True)
    query="Select wallet_amount from wallet where customer_id=%s"
    cursor.execute(query,(customer_id,))
    data=cursor.fetchone()
    print("data",data)
    return jsonify(data)

@app.route('/api/addcoins',methods=['POST'])
def addcoins():
    try:
        data=request.get_json()
        customer_id=data.get('customer_id')
        coins=data.get('coins')
        cursor=mydb.cursor()
        query=f"select * from wallet where customer_id={customer_id}"
        cursor.execute(query)
        user=cursor.fetchone()
        if user:
            query=f"update wallet set wallet_amount=wallet_amount+{coins} where customer_id={customer_id}"
        else:
            query=f"insert into wallet values({customer_id},{coins})"
        cursor.execute(query)
        mydb.commit()
        cursor.close()
        return jsonify({"message":"Coins added successfully"})
    except:
        mydb.rollback()
        cursor.close()
        return jsonify({"message":"Process failed"})

@app.route('/api/ViewAllContributions',methods=['GET'])
def AllContributions():
    cursor=mydb.cursor()
    query="select contributions.contribution_id ,contributions.date_info, login.district from contributions inner join login on contributions.customer_id=login.id where status='pending' order by date_info"
    cursor.execute(query)
    data=cursor.fetchall()
    print(data)
    return jsonify(data)

@app.route('/api/getcontributiondetails/<contribution_id>',methods=['GET'])
def getcontributiondetails(contribution_id):
    cursor=mydb.cursor()
    query=f"select contributions.contribution_id,contributions.customer_id,login.username,login.address,login.district,login.landmark,login.pincode from contributions inner join login on contributions.customer_id=login.id where contribution_id={contribution_id}"
    cursor.execute(query)
    data=cursor.fetchone()
    print(data)
    return jsonify(data)

@app.route('/api/acceptcontribution/',methods=['POST'])
def acceptcontribution():
    try:
        data=request.get_json()
        print("data",data)
        contribution_id=data.get('contribution_id')
        company_id=data.get('company_id')
        cursor=mydb.cursor()
        query=f"update contributions set company_id={company_id}, status='accepted' where contribution_id={contribution_id}"
        cursor.execute(query)
        mydb.commit()
        cursor.close()
        return jsonify({"message":"Contribution Accepted"})
    except:
        mydb.rollback()
        cursor.close()
        return jsonify({"message":"task failed"})
    
@app.route('/api/ViewAcceptedContributions/<company_id>',methods=['GET'])
def ViewAcceptedContributions(company_id):
    cursor=mydb.cursor()
    query=f"select contributions.contribution_id ,contributions.date_info, login.district from contributions inner join login on contributions.customer_id=login.id where contributions.company_id={company_id} and status='accepted'"
    cursor.execute(query)
    data=cursor.fetchall()
    print(data)
    return jsonify(data)

@app.route('/api/sendcoins/',methods=['POST'])
def ProvideCoins():
    print(request.get_data())
    try:
        cursor=mydb.cursor(dictionary=True)
        data=request.get_json()
        print(data)
        contribution_id=data.get('contribution_id')
        company_id=data.get('company_id')
        coins=data.get('coins')
        print(contribution_id,company_id,coins)
        query=f"select wallet_amount from wallet where customer_id={company_id}"
        cursor.execute(query)
        amount=cursor.fetchone()
        print(amount)
        if amount=='null' or amount['wallet_amount']<coins:
            return jsonify({"message":"Insufficient coins"})
        query=f"update wallet set wallet_amount=wallet_amount-{coins} where customer_id={company_id}"
        cursor.execute(query)
        mydb.commit()
        cursor=mydb.cursor()
        query=f"update wallet set wallet_amount=wallet_amount+{coins} where customer_id=(select customer_id from contributions where contribution_id={contribution_id})"
        cursor.execute(query)
        mydb.commit()
        query=f"update contributions set status='Collected' where contribution_id={contribution_id}"
        cursor.execute(query)
        mydb.commit()
        return jsonify({"message":"Provided coins successfully"})
    except Exception as e:
        print(e)    
        mydb.rollback()
        cursor.close()
        return jsonify({"message":"Task failed"})

#admin

@app.route('/admin/companyrequest',methods=['GET'])
def CompanyRequest():
    cursor=mydb.cursor(dictionary=True)
    query="select * from login where type='pending'"
    cursor.execute(query)
    data=cursor.fetchall()
    print(data)
    return jsonify(data)

@app.route('/admin/companydetailsdisplay/<email>',methods=['GET'])
def companydetailsdisplay(email):
    cursor=mydb.cursor(dictionary=True)
    query="select * from login where email like '%"+email+"%'"
    cursor.execute(query)
    data=cursor.fetchone()
    print(data)
    return jsonify(data)

@app.route('/admin/declineRequest/<email>',methods=['POST'])
def DeclineRequest(email):
    try:
        cursor=mydb.cursor()
        query="update login set type='user' where email=%s"
        cursor.execute(query,(email,))
        mydb.commit()
        cursor.close()
        return jsonify({"message":"Offer declined Type updated to user"})
    except:
        mydb.rollback()
        cursor.close()
        return jsonify({"message":"Error occured while declining"})

@app.route('/admin/acceptRequest/<email>',methods=['POST'])
def AcceptRequest(email):
    try:
        cursor=mydb.cursor()
        query="update login set type='company' where email=%s"
        cursor.execute(query,(email,))
        mydb.commit()
        print("Down")
        return jsonify({"message":"Offer Accepted Type updated to company"})
    except:
        mydb.rollback()
        return jsonify({"message":"Error occured while accepting"})
    
#compnay details
@app.route("/admin/companydetails/<int:id>",methods=["POST","GET"])
def companydetails(id):
    cursor=mydb.cursor(dictionary=True)
    query="select type from login where id=%s"
    cursor.execute(query,(id,))
    data=cursor.fetchone()
    print(data)
    if data['type']=='admin':
        cursor=mydb.cursor(dictionary=True)
        query="select * from login where type='company'"
        cursor.execute(query)
        data=cursor.fetchone()
        return jsonify(data)
    
@app.route('/admin/admincompanyrequest',methods=['GET'])
def AllCompanyRequest():
    cursor=mydb.cursor(dictionary=True)
    query="select * from login where type='company'"
    cursor.execute(query)
    data=cursor.fetchall()
    print(data)
    return jsonify(data)

@app.route('/admin/adminuserrequest',methods=['GET'])
def AllUserRequest():
    cursor=mydb.cursor(dictionary=True)
    query="select * from login where type='user'"
    cursor.execute(query)
    data=cursor.fetchall()
    print(data)
    return jsonify(data)

#order
@app.route('/companyorderdetails/<int:company_id>',methods=["GET","POST"])
def companyorderdetails(company_id):
    try:
        cursor = mydb.cursor(dictionary=True)
        query = "SELECT product_id FROM productdetails where company_id=%s"
        cursor.execute(query,(company_id,))
        products = cursor.fetchall()
        cursor=mydb.cursor()
        if products:
            for i in products:
                query='select customer_id from order_details where product_id=%s'
                cursor.execute(query,(i["product_id"],))
                data=cursor.fetchall()
        if data:
            rtu=[]
            for i in data:
                try:
                    cursor = mydb.cursor(dictionary=True)
                    query = "SELECT * FROM login where id=%s"
                    cursor.execute(query,(i[0],))
                    pt = cursor.fetchall()
                    cursor.close()
                    rtu.append(pt[0])
                except Exception as e:
                    pass
            print(rtu)
            return jsonify(rtu)
    except Exception as e:
        return jsonify({'error': str(e)})
    

@app.route('/plaseorder/<int:id>',methods=["GET","POST"])
def plaseorder(id):
    cursor=mydb.cursor()
    query='select * from addtocart where customer_id=%s'
    cursor.execute(query,(id,))
    data=cursor.fetchall()
    if data:
        for i in data:
            query='insert into order_details(customer_id,product_id) values(%s,%s)'
            cursor.execute(query,(i[0],i[1]))
            mydb.commit()
            query='delete from addtocart where customer_id=%s'
            cursor.execute(query,(id,))
            print("product ordered success")
            return jsonify("product ordered success")

@app.route('/userorderdetails/<int:id>',methods=["GET","POST"])
def userorderdetails(id):    
    cursor=mydb.cursor()
    try:
        query='select product_id from order_details where customer_id=%s'
        cursor.execute(query,(id,))
        data=cursor.fetchall()
        print(data)
        if data:
            rtu=[]
            for i in data:
                try:
                    cursor = mydb.cursor(dictionary=True)
                    query = "select product_name,product_description as product_code,product_price as product_price from productdetails where product_id=%s"
                    cursor.execute(query,(i[0],))
                    pt = cursor.fetchall()
                    cursor.close()
                    rtu.append(pt[0])
                except Exception as e:
                    pass
            print(rtu)
            return jsonify(rtu)
    except Exception as e:
        return jsonify({'error': str(e)})
    
#contrubite
@app.route('/contribute', methods=['POST'])
def contribute():
    cur=mydb.cursor()
    data = request.form
    customer_id=data.get('customer_id')
    status = data.get('status')
    image = request.files['image']
    if image.filename == '':
        return jsonify({'message': 'No selected image'})
    bdimage = base64.b64encode(image.read()) 
    if checkimage(image):
        query1="insert into contributions(customer_id,status,image) values(%s,%s,%s)"
        cur.execute(query1,(customer_id,status ,bdimage))
        mydb.commit()
        return jsonify("Susses")
    else:
        print("NO")
        return jsonify("not added")

def checkimage(image):
    my_file = open("coco.txt", "r")
    # reading the file
    data = my_file.read()
    # replacing end splitting the text | when newline ('\n') is seen.
    class_list = data.split("\n")
    my_file.close()

    # print(class_list)

    # Generate random colors for class list
    detection_colors = []
    for i in range(len(class_list)):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        detection_colors.append((b, g, r))

    model = YOLO("best.pt", "v8")

    frame_wid = 640
    frame_hyt = 480

    cap = image.read()
    #cap = cv2.VideoCapture("test-video.m4v")
        # Capture frame-by-frame
    # ret, frame = cap.read()
    # if not ret:
    #     print("Can't receive frame (stream end?). Exiting ...")
    print("H")
    detect_params = model.predict(source=[cap], conf=0.55, save=False)
    print("H")

    # Convert tensor array to numpy
    DP = detect_params[0].numpy()
    
    return True
        
        # Terminate run when "Q" pressed
        

    # When everything done, release the capture


    
if __name__=="__main__":

    app.run(host='192.168.219.17',port='3000',debug=True)




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


@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)



if __name__ == '__main__':
    app.run(host='192.168.56.1',port='3000',debug=True)'''