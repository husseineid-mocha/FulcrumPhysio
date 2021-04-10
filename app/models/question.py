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
    diagnosisId = db.Column(
        db.Integer, db.ForeignKey('diagnoses.id'), nullable=True
    )
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )
    updated_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow()
    )

    diagnosis = db.relationship('Diagnosis', back_populates='questions')

    def to_dict(self):
        return{
            "id": self.id,
            'promptId': self.promptId,
            'prompt': self.prompt,
            'promptType': self.promptType,
            'displayText': self.displayText,
            'displayValue': self.displayValue,
            'diagnosisId': self.diagnosisId,
        }
