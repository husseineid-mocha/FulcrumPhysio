from flask import Blueprint, jsonify, request
from app.models import Category, Exercise

exercise_routes = Blueprint('exercises', __name__)


@exercise_routes.route('/', methods=['PUT'])
def get_exercises():
    categoryId = request.json
    exercises = Exercise.query.filter(
        Exercise.categoryId == categoryId).all()
    print('XXXXXXXX')
    print(categoryId.to_dict())
    # return jsonify(categoryId)
