from flask import Blueprint, jsonify
from app.models import Category, Question

question_routes = Blueprint('questions', __name__)


@question_routes.route('/')
def get_questions():
    questions = Question.query.all()
    QuestionList = []
    for question in questions:
        QuestionList.append(question.to_dict())
    for question in QuestionList:
        categories = Category.query.filter_by(categoryId=category['id']).all()
        question['category'] = [category.to_dict() for category in categories]
    print(QuestionList)
    return jsonify(QuestionList)