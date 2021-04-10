from app.models import db
from app.models.question import Question
import csv


def seed_questions():

    question1 = Question(
        promptId=1, prompt='Is the pain in the front of your shoulder?', promptType='radio', displayText='["yes", "no"]', displayValue='[2, 3]', diagnosisId=None)
    question2 = Question(
        promptId=2, prompt='Have you dislocated your shoulder in the past month?', promptType='radio', displayText='["yes", "no"]', displayValue='[4, 5]', diagnosisId=None)
    question4 = Question(
        promptId=4, prompt='Do you feel your shoulder loose or that it clicks or grinds when reaching overhead?', promptType='radio', displayText='["yes", "no"]', displayValue='[6, 7]', diagnosisId=None)
    question5 = Question(
        promptId=5, prompt='Is there a pinching or stabbing feeling when reaching overhead?', promptType='radio', displayText='["yes", "no"]', displayValue='[7, 8]', diagnosisId=None)
    question6 = Question(
        promptId=6, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId='Shoulder Instability')
    question7 = Question(
        promptId=7, prompt='Are you able to reach behind your back with no discomfort?', promptType='radio', displayText='["yes", "no"]', displayValue='[9, 10]', diagnosisId=None)
    question9 = Question(
        promptId=9, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId='Mild Subacromial Pain Syndrome')
    question10 = Question(
        promptId=10, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId='Moderate Subacromial Pain Syndrome')
    question8 = Question(
        promptId=8, prompt='Do you have pain at the top of your shoulder?', promptType='radio', displayText='["yes", "no"]', displayValue='[11, 12]', diagnosisId=None)
    question11 = Question(
        promptId=11, prompt='Is the top of your shoulder tender to touch?', promptType='radio', displayText='["yes", "no"]', displayValue='[14, 15]', diagnosisId=None)
    question14 = Question(
        promptId=14, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId='AC joint sprain')
    question15 = Question(
        promptId=15, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId='Posterior Shoulder Impingement')
    question3 = Question(
        promptId=3, prompt='Is there a pinching sensation when reaching behind your head?', promptType='radio', displayText='["yes", "no"]', displayValue='[15, 16]', diagnosisId=None)
    question16 = Question(
        promptId=16, prompt='Does the pain feel better when you are gripping a moderately heavy object?', promptType='radio', displayText='["yes", "no"]', displayValue='[10, 17]', diagnosisId=None)
    question17 = Question(
        promptId=17, prompt='Can you see your shoulder blade come off your body when doing an activity?', promptType='radio', displayText='["yes", "no"]', displayValue='[12, 9]', diagnosisId=None)
    question12 = Question(
        promptId=12, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId='Scapular winging')

    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)
    db.session.add(question15)
    db.session.add(question16)
    db.session.add(question6)
    db.session.add(question7)
    db.session.add(question8)
    db.session.add(question9)
    db.session.add(question10)
    db.session.add(question11)
    db.session.add(question14)
    db.session.add(question17)
    db.session.add(question12)

    db.session.commit()


def undo_questions():
    db.session.execute('TRUNCATE questions CASCADE;')
    db.session.commit()


def seed_from_csv():
    with open('app/seeds/questions.csv') as csvFile:
        data = csv.reader(csvFile, delimiter=',')
        FirstLine = True
        questions = []
        next(data, None)
        for row in data:
            print(row)
            questions.append(Question(
                promptId=row[0], prompt=row[1], promptType=row[2], displayText=row[3], displayValue=row[4], dx=row[5]))
    print(questions)
    db.session.add_all(questions)
    db.session.commit()
