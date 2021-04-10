from .db import db
from datetime import datetime


class Diagnosis(db.Model):
    __tablename__ = 'diagnoses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    education = db.Column(db.Text, nullable=True)
    exerciseId1 = db.Column(
        db.Integer, db.ForeignKey("exercises.id"), nullable=True
    )
    exerciseId2 = db.Column(
        db.Integer, db.ForeignKey('exercises.id'), nullable=True
    )
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )

    exercise1 = db.relationship('Exercise', back_populates='diagnosis1')
    exercise2 = db.relationship('Exercise', back_populates='diagnosis2')

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "education": self.education,
            "exerciseId1": self.exerciseId1,
            "exerciseId2": self.exerciseId2,
        }
