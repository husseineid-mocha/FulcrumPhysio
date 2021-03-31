from .db import db
from datetime import datetime

class Progress(db.Model):
    __tablename__ = 'progresses'
    id = db.Column(db.Integer, primary_key = True)
    reps = db.Column(db.Integer, nullable=True)
    sets = db.Column(db.Integer, nullable=True)
    weight = db.Column(db.Integer, nullable=True)
    date = db.Column(db.DateTime, nullable=False)
    userExerciseId = db.Column(
        db.Integer, db.ForeignKey('userexercises.id'), nullable=False
    )

    userExercise = db.relationship('UserExercise', back_populates='progresses')

    def to_dict(self):
        return{
            "id": self.id,
            "reps": self.reps,
            "sets": self.sets,
            "weight": self.weight,
            "date": self.date,
            "userExerciseId": self.userExerciseId
        }