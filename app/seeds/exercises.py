from app.models import db
from app.models.exercise import Exercise


def seed_exercises():

    sideplank_hip_abduction = Exercise(
        name='Hip Abduction', image='https://fulcrumphysio.s3.amazonaws.com/sideplank-hip-abduction.jpeg', description='Sideplank with active hip abduction to facilitate improved core and hip strength and coordination.', categoryId=1)
    kneeling_hip_flexor_stretch = Exercise(
        name='Kneeling Hip Flexor Stretch', image='https://fulcrumphysio.s3.amazonaws.com/kneeling-hip-flexor-stretch.png', description='Kneeling stretch to help loosen the front of the hip to improve glute activation and posture.', categoryId=1)
    shoulder_retraction = Exercise(
        name='Scapular Retraction', image='https://fulcrumphysio.s3.amazonaws.com/Scapular-Retraction.jpeg', description='Pull together your shoulder blades to improve posture, improve back muscular strength, and open the front of the shoulder', categoryId=4)
    shoulder_external_rotation = Exercise(
        name='Shoulder External Rotation', image='https://fulcrumphysio.s3.amazonaws.com/Shoulder-External-Rotation.png', description='Pull the band from your belly button while rotating your arm to improve rotator cuff strength and deltoid coordination during activities', categoryId=4)
    open_book = Exercise(
        name='Open Book', image='https://fulcrumphysio.s3.amazonaws.com/open-the-book.jpeg', description='Laying on your side, open the arm facing upward to the ceiling and floor behind you while keeping your knees together. This will help improve your thoracic mobility and shoulder mobility.', categoryId=4)
    band_rows = Exercise(
        name='Band Rows', image='https://fulcrumphysio.s3.amazonaws.com/band-rows.jpeg', description='Holding elastic band with both hands, draw back the band as you bend your elbows. Keep your elbows near the side of your body.', categoryId=4)
    shoulder_extensions = Exercise(
        name='Shoulder Extensions', image='https://fulcrumphysio.s3.amazonaws.com/shoulder_extensions.jpeg', description='While holding an elastic band in front of you with your elbows straight, pull the band down and back towards your side.', categoryId=4)
    pendulums = Exercise(
        name='Pendulums', image='https://fulcrumphysio.s3.amazonaws.com/Pendulums.jpeg', description='Shift your body weight side to side to allow your injured arm to swing side to side freely. Your injured arm should be fully relaxed.', categoryId=4)

    db.session.add(sideplank_hip_abduction)
    db.session.add(kneeling_hip_flexor_stretch)
    db.session.add(shoulder_retraction)
    db.session.add(shoulder_external_rotation)
    db.session.add(open_book)
    db.session.add(band_rows)
    db.session.add(shoulder_extensions)
    db.session.add(pendulums)

    db.session.commit()


def undo_exercises():
    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
