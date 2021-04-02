from flask import Blueprint, jsonify
from app.models import Category

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def get_categories():
    categories = Category.query.all()
    categoryList = []
    for category in categories:
        categoryList.append(category.to_dict())
    return jsonify(categoryList)
