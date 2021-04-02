from flask import Blueprint, jsonify
from app.models import Category, Exercise

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def get_categories():
    categories = Category.query.all()
    categoryList = []
    for category in categories:
        categoryList.append(category.to_dict())
    for category in categoryList:
        exercises = Exercise.query.filter_by(categoryId=category['id']).all()
        category['exercises'] = [exercise.to_dict() for exercise in exercises]
    print(categoryList)
    return jsonify(categoryList)
