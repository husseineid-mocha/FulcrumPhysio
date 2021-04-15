from flask import Blueprint, jsonify, request
from app.models import db, Category, Exercise, UserExercise, Progress


selected_routes = Blueprint('selected', __name__)


@selected_routes.route('/', methods=['POST'])
def save_userExercise():
    data = request.get_json()

    userExercise = data['exercises']
    print(userExercise)
    userId = data['userId']
    for exercise in userExercise:
        # updating the exercise with the reps/sets/timesPerWeek
        matched_exercise = Exercise.query.get(exercise['id'])
        matched_exercise.reps = exercise['reps']
        matched_exercise.sets = exercise['sets']
        matched_exercise.timesPerWeek = exercise['timesPerWeek']
        # fill the joins table with the exercise and
        # the userId for that exercise
        newUserExercise = UserExercise(
            userId=userId,
            exerciseId=exercise['id']
        )
        db.session.add(newUserExercise)
        db.session.commit()
    return {"message": 'Success'}


@selected_routes.route('/get/<int:id>')
def get_userExercises(id):
    userId = id
    exercises = UserExercise.query.filter_by(userId=userId).all()
    formattedExercises = [exercise.to_dict() for exercise in exercises]
    exerciseDict = {}
    for exercise in formattedExercises:
        exerciseDict[exercise['exerciseId']] = (Exercise.query.get(
            exercise['exerciseId']).to_dict())
    # print(exerciseDict)
    return exerciseDict


@selected_routes.route('/delete', methods=['DELETE'])
def delete_userExercise():
    data = request.get_json()
    userId = data['userId']
    exerciseId = data['exerciseId']
    print(userId)
    entry = UserExercise.query.filter_by(
        userId=userId).filter_by(exerciseId=exerciseId).first()
    db.session.delete(entry)
    db.session.commit()
    return {"message": 'success'}


@selected_routes.route('/edit', methods=['POST'])
def edit_exercise():
    exercise = request.get_json()
    matched_exercise = Exercise.query.get(exercise['id'])
    matched_exercise.reps = exercise['reps']
    matched_exercise.sets = exercise['sets']
    matched_exercise.timesPerWeek = exercise['timesPerWeek']
    matched_exercise.description = exercise['description']
    db.session.commit()
    return matched_exercise.to_dict()
