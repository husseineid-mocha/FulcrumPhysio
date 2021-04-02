from flask import Blueprint, jsonify, request
from app.models import Category, Exercise

exercise_routes = Blueprint('exercises', __name__)


@exercise_routes.route('/', methods=['PUT'])
def get_exercises():
    categoryId = request.json
    categoryId = (categoryId["categoryId"])
    exercises = Exercise.query.filter_by(
        categoryId=categoryId).all()
    exercises = [exercise.to_dict() for exercise in exercises]
    print(exercises)
    return (exercises)
