from app.models import db
from app.models.diagnosisExercise import DiagnosisExercise


def seed_diagnosisExercise():

    shoulder_instability = DiagnosisExercise(
        diagnosisId=1, exerciseId=4)
    shoulder_instability2 = DiagnosisExercise(
        diagnosisId=1, exerciseId=7)
    mild_subacromial_pain_syndrome = DiagnosisExercise(
        diagnosisId=2, exerciseId=4)
    mild_subacromial_pain_syndrome2 = DiagnosisExercise(
        diagnosisId=2, exerciseId=5)
    moderate_subacromial_pain_syndrome = DiagnosisExercise(
        diagnosisId=3, exerciseId=5)
    moderate_subacromial_pain_syndrome2 = DiagnosisExercise(
        diagnosisId=3, exerciseId=7)
    ac_joint_sprain = DiagnosisExercise(
        diagnosisId=4, exerciseId=3)
    ac_joint_sprain2 = DiagnosisExercise(
        diagnosisId=4, exerciseId=6)
    posterior_shoulder_impingement = DiagnosisExercise(
        diagnosisId=5, exerciseId=5)
    posterior_shoulder_impingement2 = DiagnosisExercise(
        diagnosisId=5, exerciseId=4)
    scapular_winging = DiagnosisExercise(
        diagnosisId=6, exerciseId=3)
    scapular_winging2 = DiagnosisExercise(
        diagnosisId=6, exerciseId=7)

    db.session.add(shoulder_instability)
    db.session.add(shoulder_instability2)
    db.session.add(mild_subacromial_pain_syndrome)
    db.session.add(mild_subacromial_pain_syndrome2)
    db.session.add(moderate_subacromial_pain_syndrome)
    db.session.add(moderate_subacromial_pain_syndrome2)
    db.session.add(ac_joint_sprain)
    db.session.add(ac_joint_sprain2)
    db.session.add(posterior_shoulder_impingement)
    db.session.add(posterior_shoulder_impingement2)
    db.session.add(scapular_winging)
    db.session.add(scapular_winging2)

    db.session.commit()


def undo_diagnosisExercise():
    db.session.execute('TRUNCATE diagnosisExercises CASCADE;')
    db.session.commit()
