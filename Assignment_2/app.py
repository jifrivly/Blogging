from flask import Flask,render_template

my_app = Flask(__name__)

@my_app.route("/")
def home():
    return render_template("home.html")

if (__name__ == "__main__"):
    my_app.run(debug=True)