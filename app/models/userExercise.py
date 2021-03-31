from .db import db
from app.models import exercise, user

class UserExercise(db.Model):
    __tablename__ = 'userexercises'
    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False
    )
    exerciseId = db.Column(
        db.Integer, db.ForeignKey('exercises.id'), nullable=False
    )

    user = db.relationship('User', back_populates='userexercises')
    exercises = db.relationship('Exercise', back_populates='userexercises')
    progresses = db.relationship('Progress', back_populates='userExercise')

    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "exerciseId": self.exerciseId
        }