from flask import Flask, redirect, render_template, url_for, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
from PIL import Image
import os
from markdown import markdown

load_dotenv('.env')
genai.configure(api_key=os.getenv('API_KEY'))

model = genai.GenerativeModel('gemini-pro')
chat_model = model.start_chat(history=[])   # chat based on history

img_model = genai.GenerativeModel('gemini-pro-vision')

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

# Text to text


@app.route("/chat", methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        query = request.json['query']
        if (len(query.strip()) == 0):
            return jsonify("Please enter something!")
        try:
            gemini_response = chat_model.send_message(
                query).text   # Send message based on the chat history
        except:
            return jsonify("Something went wrong!")

        return jsonify(markdown(gemini_response))
    else:
        return render_template("chats.html")

# Image to text


@app.route("/image_chat", methods=['POST', 'GET'])
def image_chat():
    if request.method == 'POST':
        img = request.files['image']   # Loads the file
        q = request.form['query']   # Loads the query

        image = Image.open(img)   # Read the image in PIL format
        try:
            response = img_model.generate_content(
                [q, image])   # Generate content for the image
        except:
            return jsonify("Something went wrong!")
        return jsonify(markdown(response.text))
    else:
        return render_template("image_upload.html")


if __name__ == "__main__":
    app.run(port=8080, debug=True)
