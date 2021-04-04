from flask import Blueprint, jsonify, request
from app.models import db, Category, Exercise, UserExercise, Progress

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

@exercise_routes.route('/add/<int:id>', method=['POST'])
def save_userExercise():
    userExercise = request.json
    new_userExercise = UserExercise(
        userId = userExercise['userId'],
        exerciseId = userExercise['exerciseId'])
        db.session.add(new_userExercise)
        db.session.commit()
        return new_userExercise.to_dict()


@exercise_routes.route('/<int:id>/add', method=['POST'])
def save_userExercise():
    progress = request.json
    new_progress = Progress(
        reps = progress['reps'],
        sets = progress['sets'],
        weight = progress['weight'],
        date = progress['date'],
        userExerciseId = progress['userExerciseId']
        )
        db.session.add(new_progress)
        db.session.commit()
        return new_progress.to_dict()    