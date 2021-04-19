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
        promptId=6, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=1)
    question7 = Question(
        promptId=7, prompt='Are you able to reach behind your back with no discomfort?', promptType='radio', displayText='["yes", "no"]', displayValue='[9, 10]', diagnosisId=None)
    question9 = Question(
        promptId=9, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=2)
    question10 = Question(
        promptId=10, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=3)
    question8 = Question(
        promptId=8, prompt='Do you have pain at the top of your shoulder?', promptType='radio', displayText='["yes", "no"]', displayValue='[11, 12]', diagnosisId=None)
    question11 = Question(
        promptId=11, prompt='Is the top of your shoulder tender to touch?', promptType='radio', displayText='["yes", "no"]', displayValue='[14, 15]', diagnosisId=None)
    question14 = Question(
        promptId=14, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=4)
    question15 = Question(
        promptId=15, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=5)
    question3 = Question(
        promptId=3, prompt='Is there a pinching sensation when reaching behind your head?', promptType='radio', displayText='["yes", "no"]', displayValue='[15, 16]', diagnosisId=None)
    question16 = Question(
        promptId=16, prompt='Does the pain feel better when you are gripping a moderately heavy object?', promptType='radio', displayText='["yes", "no"]', displayValue='[10, 17]', diagnosisId=None)
    question17 = Question(
        promptId=17, prompt='Can you see your shoulder blade come off your body when doing an activity?', promptType='radio', displayText='["yes", "no"]', displayValue='[12, 9]', diagnosisId=None)
    question12 = Question(
        promptId=12, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=6)

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

    hipQuestion1 = Question(
        promptId=100, prompt='Is the pain in the front of your hip?', promptType='radio', displayText='["yes", "no"]', displayValue='[101, 102]', diagnosisId=None)
    hipQuestion2 = Question(
        promptId=101, prompt='Do you have pain with long periods of sitting/standing?', promptType='radio', displayText='["yes", "no"]', displayValue='[103, 106]', diagnosisId=None)
    hipQuestion3 = Question(
        promptId=103, prompt='Do you experience any clicking or locking in your hip?', promptType='radio', displayText='["yes", "no"]', displayValue='[105, 106]', diagnosisId=None)
    hipQuestion4 = Question(
        promptId=105, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=9)
    hipQuestion5 = Question(
        promptId=106, prompt='Do you get knee pain on the outside of your knee on the same side as your hip pain?', promptType='radio', displayText='["yes", "no"]', displayValue='[104, 107]', diagnosisId=None)
    hipQuestion6 = Question(
        promptId=104, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=11)
    hipQuestion7 = Question(
        promptId=107, prompt='Do you ever feel a pinching feeling in the front of your hip?', promptType='radio', displayText='["yes", "no"]', displayValue='[108, 109]', diagnosisId=None)
    hipQuestion8 = Question(
        promptId=108, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=7)
    hipQuestion9 = Question(
        promptId=109, prompt='Is your pain in/around your groin or inner thigh?', promptType='radio', displayText='["yes", "no"]', displayValue='[110, 111]', diagnosisId=None)
    hipQuestion10 = Question(
        promptId=110, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=14)
    hipQuestion11 = Question(
        promptId=102, prompt='Is the pain on the side of your hip?', promptType='radio', displayText='["yes", "no"]', displayValue='[112, 113]', diagnosisId=None)
    hipQuestion12 = Question(
        promptId=112, prompt='Is the pain more intense when you sleep or lay on the hurt hip?', promptType='radio', displayText='["yes", "no"]', displayValue='[114, 115]', diagnosisId=None)
    hipQuestion13 = Question(
        promptId=114, prompt='Is the side of your hip tender to touch?', promptType='radio', displayText='["yes", "no"]', displayValue='[116, 123]', diagnosisId=None)
    hipQuestion14 = Question(
        promptId=116, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=8)
    hipQuestion15 = Question(
        promptId=115, prompt='Does your hip hurt if you lift your knee up to your chest?', promptType='radio', displayText='["yes", "no"]', displayValue='[118, 111]', diagnosisId=None)
    hipQuestion16 = Question(
        promptId=118, prompt='Do you feel a snapping sensation on the side of your hip when moving or going from sit to stand?', promptType='radio', displayText='["yes", "no"]', displayValue='[120, 111]', diagnosisId=None)
    hipQuestion17 = Question(
        promptId=120, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=13)
    hipQuestion18 = Question(
        promptId=113, prompt='Is the pain on the back of your hip sharp and in one spot?', promptType='radio', displayText='["yes", "no"]', displayValue='[121, 122]', diagnosisId=None)
    hipQuestion19 = Question(
        promptId=121, prompt='Does the pain radiate down the back of your leg?', promptType='radio', displayText='["yes", "no"]', displayValue='[126, 111]', diagnosisId=None)
    hipQuestion20 = Question(
        promptId=126, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=12)
    hipQuestion21 = Question(
        promptId=123, prompt='Is the pain going down the front of your leg or down the side?', promptType='radio', displayText='["yes", "no"]', displayValue='[111, 125]', diagnosisId=None)
    hipQuestion22 = Question(
        promptId=111, prompt=None, promptType=None, displayText=None, displayValue=None, diagnosisId=10)
    hipQuestion23 = Question(
        promptId=122, prompt='Does the pain radiate to the side or top of your hip?', promptType='radio', displayText='["yes", "no"]', displayValue='[123, 111]', diagnosisId=None)
    hipQuestion24 = Question(
        promptId=125, prompt='Is there any numbness or tingling in your hip or down the leg?', promptType='radio', displayText='["yes", "no"]', displayValue='[126, 111]', diagnosisId=None)

    db.session.add(hipQuestion1)
    db.session.add(hipQuestion2)
    db.session.add(hipQuestion3)
    db.session.add(hipQuestion4)
    db.session.add(hipQuestion5)
    db.session.add(hipQuestion6)
    db.session.add(hipQuestion7)
    db.session.add(hipQuestion8)
    db.session.add(hipQuestion9)
    db.session.add(hipQuestion10)
    db.session.add(hipQuestion11)
    db.session.add(hipQuestion12)
    db.session.add(hipQuestion13)
    db.session.add(hipQuestion14)
    db.session.add(hipQuestion15)
    db.session.add(hipQuestion16)
    db.session.add(hipQuestion17)
    db.session.add(hipQuestion18)
    db.session.add(hipQuestion19)
    db.session.add(hipQuestion20)
    db.session.add(hipQuestion21)
    db.session.add(hipQuestion22)
    db.session.add(hipQuestion23)
    db.session.add(hipQuestion24)

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
                promptId=row[0], prompt=row[1], promptType=row[2], displayText=row[3], displayValue=row[4], diagnosisId=row[5]))
    print(questions)
    db.session.add_all(questions)
    db.session.commit()
