from flask import *
import pymysql
from random import randint

app = Flask(__name__)
app.secret_key = "secretkey123"

words = []
fp = open("words.txt", "r")
words = fp.read().split()

def check (word, guess):
    verdict = ""
    correct = 0
    misplaced = 0
    if len(guess) != 4 or len(set(guess)) != 4:
        return "Invalid Guess. Try again!"
    common = len(set(word).intersection(set(guess)))
    for x in range(4):
        if word[x] == guess[x]:
            correct += 1
    misplaced = common - correct
    if correct == 4:
        return "Well Played!"
    verdict = "{0} correct, {1} misplaced charactes!".format(correct, misplaced)
    return verdict
        

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/start", methods = ["POST"])
def start():
    gameid = str(randint(100000, 200000))
    while gameid in session:
        gameid = str(randint(10000, 200000))
    word_num = randint(0, len(words))
    session[gameid] = words[word_num]
    return redirect(url_for('game', id=gameid), code=307)

@app.route("/play/<string:id>", methods = ["POST"])
def game(id):
    return render_template("playgame.html", id=id)

@app.route("/validate/<string:id>", methods=["POST"])
def validate(id):
    word = session[id]
    guess = request.form.get("guess")
    print(word, guess)
    result = check(word, guess)
    return result

