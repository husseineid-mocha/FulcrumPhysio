from .db import db
from datetime import datetime


class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False)
    displayText = db.Column(db.String(50), nullable=False)
    displayValue = db.Column(db.String(50), nullable=False)
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    categoryId = db.Column(
        db.Integer, db.ForeignKey('categories.id'), nullable=False
    )

    category = db.relationship('Category', back_populates='questions')

    def to_dict(self):
        return{
            "id": self.id,
            "question": self.question,
            "categoryId": self.categoryId
        }
