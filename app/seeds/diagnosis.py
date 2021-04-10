from app.models import db
from app.models.question import Diagnosis
import csv


def seed_diagnoses():

    Dx1 = Diagnosis(name='Shoulder Instability', education='The shoulder is the most moveable joint in your body. It helps you to lift your arm, to rotate it, and to reach up over your head. It is able to turn in many directions. This greater range of motion, however, can cause instability.Shoulder instability occurs when the head of the upper arm bone is forced out of the shoulder socket. This can happen as a result of a sudden injury or from overuse.')
    Dx2 = Diagnosis(name='Mild Subacromial Pain Syndrome', education='Shoulder impingement syndrome is a common cause of shoulder pain. It occurs when there is impingement of tendons or bursa in the shoulder from bones of the shoulder. Overhead activity of the shoulder, especially repeated activity, is a risk factor for shoulder impingement syndrome. Examples include: painting, lifting, swimming, tennis, and other overhead sports. Other risk factors include bone and joint abnormalities. With impingement syndrome, pain is persistent and affects everyday activities. Motions such as reaching up behind the back or reaching up overhead to put on a coat or blouse, for example, may cause pain.')
    Dx3 = Diagnosis(name='Moderate Subacromial Pain Syndrome', education='Shoulder impingement syndrome is a common cause of shoulder pain. It occurs when there is impingement of tendons or bursa in the shoulder from bones of the shoulder. Overhead activity of the shoulder, especially repeated activity, is a risk factor for shoulder impingement syndrome. Examples include: painting, lifting, swimming, tennis, and other overhead sports. Other risk factors include bone and joint abnormalities. With impingement syndrome, pain is persistent and affects everyday activities. Motions such as reaching up behind the back or reaching up overhead to put on a coat or blouse, for example, may cause pain.')
    Dx4 = Diagnosis(name='AC joint sprain', education='The AC or acromioclavicular joint is at the end of the collar bone, or clavicle, near the shoulder. The AC joint is made of 4 ligaments that hold the collar bone to the shoulder blade, or scapula. With an AC joint sprain, these ligaments may be partly or fully torn. In both cases, this causes pain and swelling at the end of the collar bone. If the ligaments are completely torn, the collar bone will rise up.')
    Dx5 = Diagnosis(name='Posterior Shoulder Impingement', education='Internal (or posterior) impingement is characterized by posterior shoulder pain when the athlete places the humerus in extreme external rotation and abduction as in the cocking phase of pitching or throwing. Impingement in this position occurs between the supraspinatus and or infraspinatus and the glenoid rim.')
    Dx6 = Diagnosis(name='Scapular Winging', education='Scapular winging involves one or both shoulder blades sticking out from the back rather than lying flat. It can happen as a result of injury or nerve damage. The scapula, or shoulder blades, are flat bones that connect the upper arm to the collar bone. When they come out of place, it can cause scapular winging.')

    db.session.add(Dx1)
    db.session.add(Dx2)
    db.session.add(Dx3)
    db.session.add(Dx4)
    db.session.add(Dx5)
    db.session.add(Dx6)

    db.session.commit()


def undo_diagnoses():
    db.session.execute('TRUNCATE diagnoses CASCADE;')
    db.session.commit()
