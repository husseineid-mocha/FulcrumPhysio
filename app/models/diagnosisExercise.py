from .db import db
from app.models import diagnosis, exercise


class DiagnosisExercise(db.Model):
    __tablename__ = 'diagnosisExercises'

    id = db.Column(db.Integer, primary_key=True)
    diagnosisId = db.Column(
        db.Integer, db.ForeignKey('diagnoses.id'), nullable=False
    )
    exerciseId = db.Column(
        db.Integer, db.ForeignKey('exercises.id'), nullable=False
    )

    diagnosis = db.relationship(
        'Diagnosis', back_populates='diagnosisExercises')
    exercises = db.relationship(
        'Exercise', back_populates='diagnosisExercises')

    def to_dict(self):
        return{
            "id": self.id,
            "diagnosisId": self.diagnosisId,
            "exerciseId": self.exerciseId
        }
