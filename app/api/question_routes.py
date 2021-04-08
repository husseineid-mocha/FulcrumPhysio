from flask import Blueprint, jsonify, request
from app.models import Category, Question

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
