from flask import Blueprint, jsonify, request
from app.models import db, Category, Exercise, UserExercise, Progress


selected_routes = Blueprint('selected', __name__)


@selected_routes.route('/', methods=['POST'])
def save_userExercise():
    data = request.get_json()
    print(data)
    userExercise = data['exercises']
    userId = data['userId']
    for exercise in userExercise:
        newUserExercise = UserExercise(
            userId=userId,
            exerciseId=exercise['id']
        )
        db.session.add(newUserExercise)
        db.session.commit()
    return {"message": 'Success'}

    # console.log(userExercise)
    # new_userExercise = UserExercise(
    #     userId=userExercise['userId'],
    #     exerciseId=userExercise['exerciseId'])
    # db.session.add(new_userExercise)
    # db.session.commit()
    # return new_userExercise.to_dict()
