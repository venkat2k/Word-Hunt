from flask import *
import pymysql
from random import randint
import pymysql

app = Flask(__name__)
app.secret_key = "secretkey123"

connection = pymysql.connect(host="localhost", user="root", passwd="", database="wordhunt")
cursor = connection.cursor()

words = []
fp = open("words.txt", "r")
words = fp.read().split()

def check (word, guess):
    verdict = ""
    correct = 0
    misplaced = 0
    if len(guess) != 4 or len(set(guess)) != 4:
        return "Invalid Guess. The guess should have 4 unique letters!"
    guess = guess.lower()
    for x in guess:
        if x not in "qwertyuioplkjhgfdsazxcvbnm":
            return "Invalid symbols. Try again!"
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
    session[gameid] = {"word" : words[word_num], "score" : 100}
    return redirect(url_for('game', id=gameid), code=307)

@app.route("/play/<string:id>", methods = ["POST"])
def game(id):
    return render_template("playgame.html", id=id)

@app.route("/validate/<string:id>", methods=["POST"])
def validate(id):
    word = session[id]["word"]
    score = session[id]["score"]
    score -= 2
    session[id]["score"] = score
    session.modified = True
    guess = request.form.get("guess")
    print(word, guess, score, session[id])
    result = check(word, guess)
    if result == "Well Played!":
        return {"result" : result, "score" : str(score), "over" : 1, "guess" : guess}
    return {"result" : result, "score" : str(score), "over" : 0, "guess" : guess}

@app.route("/endgame/<string:id>", methods=["POST"])
def endgame(id):
    print(session[id]["score"])
    session.pop(id)
    return redirect(url_for('index'))
