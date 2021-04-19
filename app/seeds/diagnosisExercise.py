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

    hip_impingement = DiagnosisExercise(
        diagnosisId=7, exerciseId=4)
    hip_impingement2 = DiagnosisExercise(
        diagnosisId=7, exerciseId=7)
    hip_bursitis = DiagnosisExercise(
        diagnosisId=8, exerciseId=4)
    hip_bursitis2 = DiagnosisExercise(
        diagnosisId=8, exerciseId=5)
    hip_labral_tear = DiagnosisExercise(
        diagnosisId=9, exerciseId=5)
    hip_labral_tear2 = DiagnosisExercise(
        diagnosisId=9, exerciseId=7)
    hip_osteoarthritis = DiagnosisExercise(
        diagnosisId=10, exerciseId=3)
    hip_osteoarthritis2 = DiagnosisExercise(
        diagnosisId=10, exerciseId=6)
    itbs = DiagnosisExercise(
        diagnosisId=11, exerciseId=5)
    itbs2 = DiagnosisExercise(
        diagnosisId=11, exerciseId=4)
    piriformis_sx = DiagnosisExercise(
        diagnosisId=12, exerciseId=3)
    piriformis_sx2 = DiagnosisExercise(
        diagnosisId=12, exerciseId=7)
    snapping_hip_sx = DiagnosisExercise(
        diagnosisId=13, exerciseId=3)
    snapping_hip_sx2 = DiagnosisExercise(
        diagnosisId=13, exerciseId=6)
    adductor_strain = DiagnosisExercise(
        diagnosisId=14, exerciseId=5)
    adductor_strain2 = DiagnosisExercise(
        diagnosisId=14, exerciseId=4)

    db.session.add(hip_impingement)
    db.session.add(hip_impingement2)
    db.session.add(hip_bursitis)
    db.session.add(hip_bursitis2)
    db.session.add(hip_labral_tear)
    db.session.add(hip_labral_tear2)
    db.session.add(hip_osteoarthritis)
    db.session.add(hip_osteoarthritis2)
    db.session.add(itbs)
    db.session.add(itbs2)
    db.session.add(piriformis_sx)
    db.session.add(piriformis_sx2)
    db.session.add(snapping_hip_sx)
    db.session.add(snapping_hip_sx2)
    db.session.add(adductor_strain)
    db.session.add(adductor_strain2)

    db.session.commit()


def undo_diagnosisExercise():
    db.session.execute('TRUNCATE diagnosisExercises CASCADE;')
    db.session.commit()
