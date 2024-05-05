from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.secret_key='very_secret'
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/helloworld", methods=["GET"])
def index():
    return jsonify("helloworld")