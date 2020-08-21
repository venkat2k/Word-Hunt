from flask import *
import pymysql
from random import randint

app = Flask(__name__)
app.secret_key = "secretkey123"

connection = pymysql.connect(host="localhost", user="root", passwd="", database="wordhunt")
cursor = connection.cursor()

# list of possible words
words = []
fp = open("words.txt", "r")
words = fp.read().split()
fp.close()

def check (word, guess):
    # returns correct, misplaced, validity 
    verdict = ""
    correct = 0
    misplaced = 0
    if len(guess) != 4 or len(set(guess)) != 4:
        return "-", "-", "Invalid"
    guess = guess.lower()
    for x in guess:
        if x not in "qwertyuioplkjhgfdsazxcvbnm":
            return "-", "-", "Invalid"  
    common = len(set(word).intersection(set(guess)))
    for x in range(4):
        if word[x] == guess[x]:
            correct += 1
    misplaced = common - correct
    return str(correct), str(misplaced), "Valid"
        


@app.route("/", methods = ["GET", "POST"])
def index():
    # handles homepage
    sql = "SELECT name, score FROM scores ORDER BY score desc LIMIT 10"
    cursor.execute(sql)
    lboard_items = cursor.fetchall()
    return render_template("index.html", lboard_items = lboard_items)

@app.route("/start", methods = ["POST"])
def start():
    # initiates a game
    gameid = str(randint(100000, 200000))
    while gameid in session:
        gameid = str(randint(10000, 200000))
    player_name = request.form.get("playername");
    player_name = player_name.capitalize()
    word_num = randint(0, len(words))
    session[gameid] = {"word" : words[word_num], "score" : 100, "playername" : player_name}
    return redirect(url_for('game', id=gameid), code=307)

@app.route("/play/<string:id>", methods = ["POST"])
def game(id):
    # handles the gamepage
    return render_template("playgame.html", id=id)

@app.route("/validate/<string:id>", methods=["POST"])
def validate(id):
    # handles ajax requests for user entries and returns them a json
    word = session[id]["word"]
    score = session[id]["score"]
    score -= 2
    score = max(0, score)
    session[id]["score"] = score
    session.modified = True
    guess = request.form.get("guess")
    correct, misplaced, validity = check(word, guess)
    guess = guess.capitalize()
    if len(guess) > 10:
        guess = guess[:5] + "..."
    if correct == "4":
        return {"correct" : correct, "misplaced" : misplaced, "validity" : validity, "score" : str(score), "over" : 1, "guess" : guess}
    return {"correct" : correct, "misplaced" : misplaced, "validity" : validity, "score" : str(score), "over" : 0, "guess" : guess}
    

@app.route("/endgame/<string:id>", methods=["POST"])
def endgame(id):
    # ends a game and makes a score entry
    score = max(0, session[id]["score"])
    sql = """INSERT INTO scores(name, score) VALUES ("{0}", {1})""".format(session[id]["playername"], score)
    cursor.execute(sql)
    connection.commit()
    session.pop(id)
    return redirect(url_for('index'))

@app.route("/playagain/<string:id>", methods=["POST"])
def playagain(id):
    # ends a game, makes a score entry and starts a new game
    score = max(0, session[id]["score"])
    player_name = session[id]["playername"]
    sql = """INSERT INTO scores(name, score) VALUES ("{0}", {1})""".format(player_name, score)
    cursor.execute(sql)
    connection.commit()
    session.pop(id)
    gameid = str(randint(100000, 200000))
    while gameid in session:
        gameid = str(randint(10000, 200000))
    word_num = randint(0, len(words))
    session[gameid] = {"word" : words[word_num], "score" : 100, "playername" : player_name}
    return redirect(url_for('game', id=gameid), code=307)

@app.route("/gohome/<string:id>", methods=["POST"])
def gohome(id):
    # stops a game and returns to home
    session.pop(id)
    return redirect(url_for('index'))

@app.route("/restart/<string:id>", methods=["POST"])
def restart(id):
    # stops a game and starts a new one
    player_name = session[id]["playername"]
    session.pop(id)
    gameid = str(randint(100000, 200000))
    while gameid in session:
        gameid = str(randint(10000, 200000))
    word_num = randint(0, len(words))
    session[gameid] = {"word" : words[word_num], "score" : 100, "playername" : player_name}
    return redirect(url_for('game', id=gameid), code=307)
