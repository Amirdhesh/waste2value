from flask import Flask, render_template
import base64
import mysql.connector
mydb=mysql.connector.connect(
    host= "localhost",
    user= "root",
    password= "tiger",
    database="wtv"
)
test = Flask(__name__)

@test.route('/display_image/<int:image_id>')
def display_image(image_id):
    cursor = mydb.cursor()
    cursor.execute("SELECT image FROM login WHERE id=11")
    image_data = cursor.fetchone()[0]
    cursor.close()
    encoded_image = base64.b64encode(image_data).decode('utf-8')
    return render_template('image.html', encoded_image=encoded_image)

if __name__ == '_main_':
    test.run(host='192.168.0.155',port='3000',debug=True)