from app.models import db
from app.models.diagnosisExercise import DiagnosisExercise


def seed_diagnosisExercise():

    shoulder_instability = DiagnosisExercise(
        diagnosisId=1, exerciseId=4)
    shoulder_instability2 = DiagnosisExercise(
        diagnosisId=1, exerciseId=2)
    mild_subacromial_pain_syndrome = DiagnosisExercise(
        diagnosisId=2, exerciseId=2)
    mild_subacromial_pain_syndrome2 = DiagnosisExercise(
        diagnosisId=2, exerciseId=4)
    moderate_subacromial_pain_syndrome = DiagnosisExercise(
        diagnosisId=3, exerciseId=1)
    moderate_subacromial_pain_syndrome2 = DiagnosisExercise(
        diagnosisId=3, exerciseId=3)
    ac_joint_sprain = DiagnosisExercise(
        diagnosisId=4, exerciseId=5)
    ac_joint_sprain2 = DiagnosisExercise(
        diagnosisId=4, exerciseId=2)
    posterior_shoulder_impingement = DiagnosisExercise(
        diagnosisId=5, exerciseId=3)
    posterior_shoulder_impingement2 = DiagnosisExercise(
        diagnosisId=5, exerciseId=5)
    scapular_winging = DiagnosisExercise(
        diagnosisId=6, exerciseId=4)
    scapular_winging2 = DiagnosisExercise(
        diagnosisId=6, exerciseId=5)

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
        diagnosisId=7, exerciseId=12)
    hip_impingement2 = DiagnosisExercise(
        diagnosisId=7, exerciseId=11)
    hip_bursitis = DiagnosisExercise(
        diagnosisId=8, exerciseId=11)
    hip_bursitis2 = DiagnosisExercise(
        diagnosisId=8, exerciseId=13)
    hip_labral_tear = DiagnosisExercise(
        diagnosisId=9, exerciseId=9)
    hip_labral_tear2 = DiagnosisExercise(
        diagnosisId=9, exerciseId=12)
    hip_osteoarthritis = DiagnosisExercise(
        diagnosisId=10, exerciseId=8)
    hip_osteoarthritis2 = DiagnosisExercise(
        diagnosisId=10, exerciseId=7)
    itbs = DiagnosisExercise(
        diagnosisId=11, exerciseId=17)
    itbs2 = DiagnosisExercise(
        diagnosisId=11, exerciseId=9)
    piriformis_sx = DiagnosisExercise(
        diagnosisId=12, exerciseId=8)
    piriformis_sx2 = DiagnosisExercise(
        diagnosisId=12, exerciseId=12)
    snapping_hip_sx = DiagnosisExercise(
        diagnosisId=13, exerciseId=14)
    snapping_hip_sx2 = DiagnosisExercise(
        diagnosisId=13, exerciseId=10)
    adductor_strain = DiagnosisExercise(
        diagnosisId=14, exerciseId=12)
    adductor_strain2 = DiagnosisExercise(
        diagnosisId=14, exerciseId=9)

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
