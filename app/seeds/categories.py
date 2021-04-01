from app.models import db
from app.models.category import Category


def seed_categories():

    hip = Category(name='Hip')
    knee = Category(name='Knee')
    ankle = Category(name='Ankle')
    shoulder = Category(name='Shoulder')
    elbow = Category(name='Elbow')
    wrist = Category(name='Wrist')
    neck = Category(name='Neck')
    back = Category(name='Back')

    db.session.add(hip)
    db.session.add(knee)
    db.session.add(ankle)
    db.session.add(shoulder)
    db.session.add(elbow)
    db.session.add(wrist)
    db.session.add(neck)
    db.session.add(back)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()
