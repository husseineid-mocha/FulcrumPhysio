from flask import Blueprint, jsonify, request
from app.models import Category, Question, Diagnosis, DiagnosisExercise, Exercise

question_routes = Blueprint('questions', __name__)


@question_routes.route('/', methods=['PUT'])
def get_questions():
    questionId = request.json
    print(questionId)
    question = Question.query.filter(Question.promptId == questionId).all()
    return(question[0].to_dict())


@question_routes.route('/<int:id>')
def get_next_question(id):
    questionId = id
    question = Question.query.filter(Question.promptId == questionId).all()
    return(question[0].to_dict())


@question_routes.route('/diagnosis/<int:id>')
def get_dx(id):
    diagnosisId = id
    diagnosis = Diagnosis.query.filter(Diagnosis.id == diagnosisId).all()
    dxExercises = DiagnosisExercise.query.filter(
        DiagnosisExercise.diagnosisId == diagnosisId).all()
    dxExercises = [dxExercise.to_dict() for dxExercise in dxExercises]

    exercises = Exercise.query.filter_by()
    print('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
    print(dxExercises)
