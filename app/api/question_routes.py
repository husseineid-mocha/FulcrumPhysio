from flask import Blueprint, jsonify, request
from app.models import Category, Question

question_routes = Blueprint('questions', __name__)


@question_routes.route('/', methods=['PUT'])
def get_questions():
    questionId = request.json
    Question
