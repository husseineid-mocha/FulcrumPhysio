from app.models import db
from app.models.diagnosis import Diagnosis
import csv


def seed_diagnoses():

    Dx1 = Diagnosis(name='Shoulder Instability', education='The shoulder is the most moveable joint in your body. It helps you to lift your arm, to rotate it, and to reach up over your head. It is able to turn in many directions. This greater range of motion, however, can cause instability.Shoulder instability occurs when the head of the upper arm bone is forced out of the shoulder socket. This can happen as a result of a sudden injury or from overuse.')
    Dx2 = Diagnosis(name='Mild Subacromial Pain Syndrome', education='Shoulder impingement syndrome is a common cause of shoulder pain. It occurs when there is impingement of tendons or bursa in the shoulder from bones of the shoulder. Overhead activity of the shoulder, especially repeated activity, is a risk factor for shoulder impingement syndrome. Examples include: painting, lifting, swimming, tennis, and other overhead sports. Other risk factors include bone and joint abnormalities. With impingement syndrome, pain is persistent and affects everyday activities. Motions such as reaching up behind the back or reaching up overhead to put on a coat or blouse, for example, may cause pain.')
    Dx3 = Diagnosis(name='Moderate Subacromial Pain Syndrome', education='Shoulder impingement syndrome is a common cause of shoulder pain. It occurs when there is impingement of tendons or bursa in the shoulder from bones of the shoulder. Overhead activity of the shoulder, especially repeated activity, is a risk factor for shoulder impingement syndrome. Examples include: painting, lifting, swimming, tennis, and other overhead sports. Other risk factors include bone and joint abnormalities. With impingement syndrome, pain is persistent and affects everyday activities. Motions such as reaching up behind the back or reaching up overhead to put on a coat or blouse, for example, may cause pain.')
    Dx4 = Diagnosis(name='AC joint sprain', education='The AC or acromioclavicular joint is at the end of the collar bone, or clavicle, near the shoulder. The AC joint is made of 4 ligaments that hold the collar bone to the shoulder blade, or scapula. With an AC joint sprain, these ligaments may be partly or fully torn. In both cases, this causes pain and swelling at the end of the collar bone. If the ligaments are completely torn, the collar bone will rise up.')
    Dx5 = Diagnosis(name='Posterior Shoulder Impingement', education='Internal (or posterior) impingement is characterized by posterior shoulder pain when the athlete places the humerus in extreme external rotation and abduction as in the cocking phase of pitching or throwing. Impingement in this position occurs between the supraspinatus and or infraspinatus and the glenoid rim.')
    Dx6 = Diagnosis(name='Scapular Winging', education='Scapular winging involves one or both shoulder blades sticking out from the back rather than lying flat. It can happen as a result of injury or nerve damage. The scapula, or shoulder blades, are flat bones that connect the upper arm to the collar bone. When they come out of place, it can cause scapular winging.')
    Dx7 = Diagnosis(name='Hip Impingement', education='Hip impingement, or femoroacetabular impingement (FAI), occurs when the femoral head (ball of the hip) pinches up against the acetabulum (cup of the hip). When this happens, damage to the labrum (cartilage that surrounds the acetabulum) can occur, causing hip stiffness and pain, and can lead to arthritis.')
    Dx8 = Diagnosis(name='Hip Bursitis', education='Bursae, are small, jelly-like sacs that are located throughout the body, including around the shoulder, elbow, hip, knee, and heel. They contain a small amount of fluid, and are positioned between bones and soft tissues, acting as cushions to help reduce friction. Bursitis is inflammation of the bursa. There are two major bursae in the hip that typically become irritated and inflamed. One bursa covers the bony point of the hip bone called the greater trochanter. Inflammation of this bursa is called trochanteric bursitis. Fortunately all forms of hip bursitis are treated similarly.')
    Dx9 = Diagnosis(name='Hip Labral Tear', education='A hip labral tear involves the ring of cartilage(labrum) that follows the outside rim of your hip joint socket. Besides cushioning the hip joint, the labrum acts like a rubber seal or gasket to help hold the ball at the top of your thighbone securely within your hip socket. Athletes who participate in sports such as ice hockey, soccer, football, golf and ballet are at higher risk of developing hip labral tears. Structural abnormalities of the hip also can lead to a hip labral tear.')
    Dx10 = Diagnosis(name='Hip Osteoarthritis', education='The changes in osteoarthritis usually occur slowly over many years. Patients who have osteoarthritis of the hip sometimes have problems walking. Diagnosis can be difficult at first. Thats because pain can appear in different locations, including the groin, thigh, buttocks, or knee. The pain can be stabbing and sharp or it can be a dull ache, and the hip is often stiff.')
    Dx11 = Diagnosis(name='Iliotibial Band Syndrome', education='IT band syndrome — also called hip bursitis or greater trochanteric bursitis — happens when the IT band becomes too tight. This can cause friction at the top of your hip or near your knee, resulting in inflammation.')
    Dx12 = Diagnosis(name='Piriformis Syndrome', education='Piriformis syndrome is a condition in which the piriformis muscle, located in the buttock region, spasms and causes buttock pain. The piriformis muscle can also irritate the nearby sciatic nerve and cause pain, numbness and tingling along the back of the leg and into the foot (similar to sciatic pain).')
    Dx13 = Diagnosis(name='Snapping Hip Syndrome', education='Snapping hip syndrome, sometimes called dancers hip, is a condition in which you hear a snapping sound or feel a snapping sensation in your hip when you walk, run, get up from a chair, or swing your leg around. For most people, the condition is little more than an annoyance and the only symptom is the snapping sound or sensation itself. But for dancers or athletes, snapping hip syndrome symptoms may also include pain and weakness that interfere with performance.')
    Dx14 = Diagnosis(name='Adductor Strain', education='Most commonly, strains occur during acute muscle contraction, such as when kicking, pivoting or skating. Factors that can predispose a patient to injury include failure to warm up, properly stretch, or fatigue from overuse.')

    db.session.add(Dx1)
    db.session.add(Dx2)
    db.session.add(Dx3)
    db.session.add(Dx4)
    db.session.add(Dx5)
    db.session.add(Dx6)
    db.session.add(Dx7)
    db.session.add(Dx8)
    db.session.add(Dx9)
    db.session.add(Dx10)
    db.session.add(Dx11)
    db.session.add(Dx12)
    db.session.add(Dx13)
    db.session.add(Dx14)

    db.session.commit()


def undo_diagnoses():
    db.session.execute('TRUNCATE diagnoses CASCADE;')
    db.session.commit()
