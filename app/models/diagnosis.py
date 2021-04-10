from .db import db
from datetime import datetime


class Diagnosis(db.Model):
    __tablename__ = 'diagnoses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    education = db.Column(db.Text, nullable=True)
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )

    questions = db.relationship('Question', back_populates='diagnosis')
    diagnosisExercises = db.relationship(
        'DiagnosisExercise', back_populates='diagnosis')

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "education": self.education,
        }
