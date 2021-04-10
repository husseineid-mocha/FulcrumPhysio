from .db import db
from datetime import datetime


class Exercise(db.Model):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String(100), nullable=True)
    description = db.Column(db.String(500), nullable=False)
    reps = db.Column(db.Integer, nullable=True)
    sets = db.Column(db.Integer, nullable=True)
    timesPerWeek = db.Column(db.Integer, nullable=True)
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    categoryId = db.Column(
        db.Integer, db.ForeignKey('categories.id'), nullable=False
    )

    category = db.relationship('Category', back_populates='exercises')
    userexercises = db.relationship('UserExercise', back_populates='exercises')
    diagnosisExercises = db.relationship(
        'DiagnosisExercise', back_populates='exercises')

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "description": self.description,
            "reps": self.reps,
            "sets": self.sets,
            "timesPerWeek": self.timesPerWeek,
            "categoryId": self.categoryId,
            "diagnosisId": self.diagnosisId
        }
