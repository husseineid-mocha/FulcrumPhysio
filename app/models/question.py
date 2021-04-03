from .db import db
from datetime import datetime


class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    promptId = db.Column(db.Integer, nullable=False)
    prompt = db.Column(db.String(500), nullable=True)
    promptType = db.Column(db.String(50), nullable=True)
    displayText = db.Column(db.String(50), nullable=True)
    displayValue = db.Column(db.String(50), nullable=True)
    dx = db.Column(db.String(50), nullable=True)
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    categoryId = db.Column(
        db.Integer, db.ForeignKey('categories.id'), nullable=True
    )

    category = db.relationship('Category', back_populates='questions')

    def to_dict(self):
        return{
            "id": self.id,
            "question": self.question,
            "categoryId": self.categoryId
        }
