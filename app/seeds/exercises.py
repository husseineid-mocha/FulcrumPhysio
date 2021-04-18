from app.models import db
from app.models.exercise import Exercise


def seed_exercises():

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

    db.session.add(shoulder_retraction)
    db.session.add(shoulder_external_rotation)
    db.session.add(open_book)
    db.session.add(band_rows)
    db.session.add(shoulder_extensions)
    db.session.add(pendulums)

    sideplank_hip_abduction = Exercise(
        name='Hip Abduction', image='https://fulcrumphysio.s3.amazonaws.com/sideplank-hip-abduction.jpeg', description='Sideplank with active hip abduction to facilitate improved core and hip strength and coordination.', categoryId=1)
    kneeling_hip_flexor_stretch = Exercise(
        name='Kneeling Hip Flexor Stretch', image='https://fulcrumphysio.s3.amazonaws.com/kneeling-hip-flexor-stretch.png', description='Kneeling stretch to help loosen the front of the hip to improve glute activation and posture.', categoryId=1)
    sidelying_clam = Exercise(
        name='Sidelying Clam Shell', image='https://fulcrumphysio.s3.amazonaws.com/BandClamshell.jpeg', description='While lying on your side with your knees bent and an elastic band wrapped around your knees, draw up the top knee while keeping contact of your feet together as shown.', categoryId=1)
    seated_hamstring_stretch = Exercise(
        name='Seated Hamstring Stretch', image='https://fulcrumphysio.s3.amazonaws.com/seatedhsStretch.jpeg', description='Kneeling stretch to help loosen the front of the hip to improve glute activation and posture.', categoryId=1)
    squat = Exercise(
        name='Squat', image='https://fulcrumphysio.s3.amazonaws.com/squat.jpeg', description='Stand with feet shoulder width apart and toes pointed forward to slightly turned out. Bend knees and lower buttock towards floor keeping your back straight and bending at your hips. Allow your arms to raise up forward as you lower down and then return arms to side as you straight back up.', categoryId=1)
    lateral_monster_walk = Exercise(
        name='Lateral Monster Walk', image='https://fulcrumphysio.s3.amazonaws.com/lateralMonsterWalk.jpeg', description='Place a looped elastic band around both thighs. Next, bend your knees and step to the side while keeping tension on the band the entire time.  After taking sidesteps to the side in one direction, reverse the direction taking sidesteps until you return to the starting position. Repeat.', categoryId=1)
    piriformis_stretch = Exercise(
        name='Piriformis Stretch', image='https://fulcrumphysio.s3.amazonaws.com/piriformisStretch.jpeg', description='While lying on your back with both knee bent, cross your affected leg on the other knee. Next, hold your unaffected thigh and pull it up towards your chest until a stretch is felt in the buttock.', categoryId=1)

    db.session.add(sideplank_hip_abduction)
    db.session.add(kneeling_hip_flexor_stretch)
    db.session.add(sidelying_clam)
    db.session.add(seated_hamstring_stretch)
    db.session.add(squat)
    db.session.add(lateral_monster_walk)

    quad_set = Exercise(
        name='Quad Set', image='https://fulcrumphysio.s3.amazonaws.com/quad+set.jpeg', description='Tighten your top thigh muscle as you attempt to press the back of your knee downward towards the table.', categoryId=2)
    prone_quad_stretch = Exercise(
        name='Prone Quad Stretch', image='https://fulcrumphysio.s3.amazonaws.com/pronequadstretch.jpeg', description='Lie down flat on your stomach. Wrap a strap (belt, towel, dog leash) around the top of one of your feet and pull the strap across your opposite shoulder so that your knee starts to curl up to your body. Pull until a stretch is felt across the front of your thigh.', categoryId=2)
    seated_hamstring_stretch_knee = Exercise(
        name='Seated Hamstring Stretch', image='https://fulcrumphysio.s3.amazonaws.com/seatedhsStretch.jpeg', description='Kneeling stretch to help loosen the front of the hip to improve glute activation and posture.', categoryId=2)
    calf_stretch_towel = Exercise(
        name='Calf Stretch with Towel', image='https://fulcrumphysio.s3.amazonaws.com/towelCalfStretch.jpeg', description='While in a seated position, place a towel around the ball of your foot and pull your ankle back until a stretch is felt on your calf area. Keep your knee in a straightened position during the stretch.', categoryId=2)
    foamroll_ITB = Exercise(
        name='Foam Roll Iliotibial Band', image='https://fulcrumphysio.s3.amazonaws.com/itbfoamroll.jpeg', description='Start on your side with a foam roll under your bottom thigh. Next, using your arms and unaffected leg, roll up and down the foam roll along your lateral thigh.', categoryId=2)
    hamstring_set = Exercise(
        name='Hamstring Set', image='https://fulcrumphysio.s3.amazonaws.com/hamstringSet.jpeg', description='Lie down on your back and then bend your knee.  Next, press your heel into the ground and hold. Relax and repeat.', categoryId=2)
    squatKnee = Exercise(
        name='Squat', image='https://fulcrumphysio.s3.amazonaws.com/squat.jpeg', description='While standing, lean towards your unaffected leg and then raise up on your toes as you lift your heels off the ground. There should be reduced body weight on the affected side while lifting and lowering your heels. ', categoryId=2)

    db.session.add(quad_set)
    db.session.add(prone_quad_stretch)
    db.session.add(seated_hamstring_stretch_knee)
    db.session.add(calf_stretch_towel)
    db.session.add(foamroll_ITB)
    db.session.add(hamstring_set)
    db.session.add(squatKnee)

    heel_raise = Exercise(
        name='Heel Raise', image='https://fulcrumphysio.s3.amazonaws.com/heelRaise.jpeg', description='While standing, lean towards your unaffected leg and then raise up on your toes as you lift your heels off the ground. There should be reduced body weight on the affected side while lifting and lowering your heels. ', categoryId=3)
    gastroc_stretch = Exercise(
        name='Standing Gastrocnemius Stretch', image='https://fulcrumphysio.s3.amazonaws.com/gastrocStretch.jpeg', description='Start by standing in front of a wall or other sturdy object. Step forward with one foot and maintain your toes on both feet to be pointed straight forward. Keep the leg behind you with a straight knee during the stretch. Lean forward towards the wall and support yourself with your arms as you allow your front knee to bend until a gentle stretch is felt along the back of your leg that is most behind you.', categoryId=3)
    soleus_stretch = Exercise(
        name='Standing Soleus Stretch', image='https://fulcrumphysio.s3.amazonaws.com/soleus+stretch.jpeg', description='Start by standing in front of a wall or other sturdy object. Step forward with one foot and maintain your toes on both feet to be pointed straight forward. Keep the leg behind you with a bent knee during the stretch. Lean forward towards the wall and support yourself with your arms as you allow your front knee to bend until a gentle stretch is felt along the back of your leg that is most behind you.', categoryId=3)
    ankle_Inversion = Exercise(
        name='Ankle Inversion With Band', image='https://fulcrumphysio.s3.amazonaws.com/ankleInversionBand.jpeg', description='While seated, cross your legs and using an elastic band attached to your foot, hook it under your opposite foot and up to your hand. Next, draw your foot inward. Be sure to keep your heel in contact with the floor the entire time.', categoryId=3)
    ankle_Eversion = Exercise(
        name='Ankle Eversion With Band', image='https://fulcrumphysio.s3.amazonaws.com/ankleEversionBand.jpeg', description='Using an elastic band attached to your foot, hook it under your opposite foot and up to your hand. Next, draw the band outwards to the side. Be sure to keep your heel in contact with the floor the entire time.', categoryId=3)
    ankle_plantarFlexion = Exercise(
        name='Ankle Plantarflexion With Band', image='https://fulcrumphysio.s3.amazonaws.com/anklePFBand.jpeg', description='While seated, use an elastic band attached to your foot and press your foot downward and forward. Be sure to keep your heel in contact with the floor the entire time.', categoryId=3)
    ankle_dorsiFlexion = Exercise(
        name='Ankle Dorsiflexion With Band', image='https://fulcrumphysio.s3.amazonaws.com/ankleDFBand.jpeg', description='While seated, use an elastic band attached to your foot and draw your foot upward. Be sure to keep your heel in contact with the floor the entire time.', categoryId=3)
    ankle_circles = Exercise(
        name='Ankle Circles', image='https://fulcrumphysio.s3.amazonaws.com/ankleCircles.jpeg', description='Move your ankle in a circular clockwise pattern for several repetitions and then repeat in the reverse counterclockwise direction.', categoryId=3)

    db.session.add(heel_raise)
    db.session.add(gastroc_stretch)
    db.session.add(soleus_stretch)
    db.session.add(ankle_Inversion)
    db.session.add(ankle_Eversion)
    db.session.add(ankle_plantarFlexion)
    db.session.add(ankle_dorsiFlexion)
    db.session.add(ankle_circles)

    wristFlexorStretch = Exercise(
        name='Wrist Flexor Stretch', image='https://fulcrumphysio.s3.amazonaws.com/wristFlexorstretch.jpeg', description='Use your unaffected hand to bend the affected wrist up as shown. Keep the elbow straight on the affected side the entire time.', categoryId=5)
    wristExtensorStretch = Exercise(
        name='Wrist Extensor Stretch', image='https://fulcrumphysio.s3.amazonaws.com/wristExtensionStretch.jpeg', description='Use your unaffected hand to bend the affected wrist down as shown. Keep the elbow straight on the affected side the entire time.', categoryId=5)
    towelGrip = Exercise(
        name='Towel Grip', image='https://fulcrumphysio.s3.amazonaws.com/wristTowelGrip.jpeg', description='Place a rolled up towel in your hand and squeeze.', categoryId=5)
    supinationPronationHammer = Exercise(
        name='Supination Pronation with Weight', image='https://fulcrumphysio.s3.amazonaws.com/wristHammer.jpeg', description='Slowly lower a hammer towards the inside and then outside of the body as shown.', categoryId=5)
    tricepPulldown = Exercise(
        name='Tricep Pulldown', image='https://fulcrumphysio.s3.amazonaws.com/elbowTricepPulldown.jpeg', description='Start with your elbow bent and holding an elastic band as shown. Pull the elastic band downward as you extend your elbow. Keep your elbow by your side the entire time.', categoryId=5)
    bicepCurl = Exercise(
        name='Bicep Curl', image='https://fulcrumphysio.s3.amazonaws.com/elbowBicepCurl.jpeg', description='Tie a small knot at the end of an elastic band and step on it. Tie a looped end on the other side and hold it with your hand.  While keeping your elbow at your side, bend at your elbow as you raise up your lower arm against the resistance of the band as shown. Lower back down and repeat. Keep your palm face up the entire time.', categoryId=5)
    isometricWristExtension = Exercise(
        name='Isometric Wrist Extension', image='https://fulcrumphysio.s3.amazonaws.com/wristExtensionIsometric.jpeg', description='Bend your wrist back and resist into your other hand.', categoryId=5)
    isometricWristFlexion = Exercise(
        name='Isometric Wrist Flexion', image='https://fulcrumphysio.s3.amazonaws.com/wristFlexionIsometric.jpeg', description='Bend your wrist forward and resist into your other hand.', categoryId=5)

    db.session.add(wristExtensorStretch)
    db.session.add(wristFlexorStretch)
    db.session.add(towelGrip)
    db.session.add(supinationPronationHammer)
    db.session.add(tricepPulldown)
    db.session.add(bicepCurl)
    db.session.add(isometricWristFlexion)
    db.session.add(isometricWristExtension)

    wristFlexorStretch2 = Exercise(
        name='Wrist Flexor Stretch', image='https://fulcrumphysio.s3.amazonaws.com/wristFlexorstretch.jpeg', description='Use your unaffected hand to bend the affected wrist up as shown. Keep the elbow straight on the affected side the entire time.', categoryId=6)
    wristExtensorStretch2 = Exercise(
        name='Wrist Extensor Stretch', image='https://fulcrumphysio.s3.amazonaws.com/wristExtensionStretch.jpeg', description='Use your unaffected hand to bend the affected wrist down as shown. Keep the elbow straight on the affected side the entire time.', categoryId=6)
    towelGrip2 = Exercise(
        name='Towel Grip', image='https://fulcrumphysio.s3.amazonaws.com/wristTowelGrip.jpeg', description='Place a rolled up towel in your hand and squeeze.', categoryId=6)
    isometricWristExtension2 = Exercise(
        name='Isometric Wrist Extension', image='https://fulcrumphysio.s3.amazonaws.com/wristExtensionIsometric.jpeg', description='Bend your wrist back and resist into your other hand.', categoryId=6)
    isometricWristFlexion2 = Exercise(
        name='Isometric Wrist Flexion', image='https://fulcrumphysio.s3.amazonaws.com/wristFlexionIsometric.jpeg', description='Bend your wrist forward and resist into your other hand.', categoryId=6)
    tendonGlides = Exercise(
        name='Tendon Glides', image='https://fulcrumphysio.s3.amazonaws.com/handtendonglides.jpeg', description='Start with an open palm and then bend your fingers to a claw hand as in the upper right image. Next, return to an open palm and then to an "L" hand" as shown in the bottom right image. Next, return to an open palm and then make a fist as in the bottom left image. Finally, return to an open palm and then repeat the series.', categoryId=6)
    wristExtensionCurls = Exercise(
        name='Wrist Extension Curls', image='https://fulcrumphysio.s3.amazonaws.com/wristExtensionCurls.jpeg', description='Hold a small free weight / dumbbell, rest your forearm on a table and bend your wrist up and down with your palm face down as shown.', categoryId=6)
    wristFlexionCurls = Exercise(
        name='Wrist Flexion Curls', image='https://fulcrumphysio.s3.amazonaws.com/wristFlexionCurls.jpeg', description='Hold a small free weight / dumbbell, rest your forearm on a table and bend your wrist up and down with your palm face up as shown.', categoryId=6)
    rubberBandExtension = Exercise(
        name='Rubber Band Extension', image='https://fulcrumphysio.s3.amazonaws.com/rubberBandExtension.jpeg', description='Expand a rubber band wrapped around your fingers.', categoryId=6)

    db.session.add(isometricWristFlexion2)
    db.session.add(isometricWristExtension2)
    db.session.add(tendonGlides)
    db.session.add(wristExtensionCurls)
    db.session.add(wristFlexionCurls)
    db.session.add(rubberBandExtension)
    db.session.add(wristExtensorStretch2)
    db.session.add(wristFlexorStretch2)
    db.session.add(towelGrip2)

    upperTrapStretch = Exercise(
        name='Upper Trapezius Stretch', image='https://fulcrumphysio.s3.amazonaws.com/upperTrapStretch.jpeg', description='While sitting in a chair, hold the seat with one hand and place your other hand on your head to assist in bending your head to the side as shown. Bend your head towards the opposite side of the hand that is holding the chair seat. You should feel a stretch to the side of your neck. ', categoryId=7)
    levatorScapStretch = Exercise(
        name='Levator Scapulae Stretch', image='https://fulcrumphysio.s3.amazonaws.com/levatorScapStretch.jpeg', description='Tilt your head to the side, then rotate to the side, then tip downward as in looking at your opposite pocket. Use your hand to pull your head downward and towards the opposite side for a gentle stretch. You should be looking towards your opposite pocket of the target side.', categoryId=7)
    chinTuck = Exercise(
        name='Chin Tuck', image='https://fulcrumphysio.s3.amazonaws.com/chinTuck.jpeg', description='While lying on your back, tuck your chin towards your chest and press the back of your head into the table. Maintain contact of the back of your head with the surface you are lying on the entire time. ', categoryId=7)
    cervicalTowelRotationStretch = Exercise(
        name='Cervical Towel Rotation Stretch', image='https://fulcrumphysio.s3.amazonaws.com/cervicalrotationtowel.jpeg', description='Hold the ends of a small folded bath towel and wrap it around your head and neck as shown. Place the towel on your face so as to minimize placing pressure on your jaw. Pressure should be placed on the side of your face/cheek bone. Use your bottom most arm to anchor the towel in place. Use your top most arm to pull the towel to cause a gentle rotational stretch in your neck. Hold, then return to starting position and repeat. ', categoryId=7)
    isometricSideBend = Exercise(
        name='Isometric Sidebend', image='https://fulcrumphysio.s3.amazonaws.com/isometricSidebend.jpeg', description='Place your fingers on the side of your head and gently tilt your head to the side and into your fingers.', categoryId=7)
    cervicalExtensionTowel = Exercise(
        name='Cervical Extension With Towel', image='https://fulcrumphysio.s3.amazonaws.com/cervicalExtensionTowel.jpeg', description='Start with a small hand towel wrapped around the base of your skull and holding the ends of the towel forward as shown. Next, perform a chin tuck and extend your neck back and upwards as if you are going to look up at the ceiling. Then, return to starting position. Your hands should follow with your head during the movement. ', categoryId=7)
    firstRibMobilization = Exercise(
        name='Self First Rib Mobilization', image='https://fulcrumphysio.s3.amazonaws.com/firstRibMob.jpeg', description='Sitting on one end of a belt or strap, wrap it up behind you and over opposite shoulder near the base of your cervical spine/neck. Use one hand to pull the belt or strap down in front of you and towards the opposite shoulder side as shown. Pull firmly without pain and hold. Next, side bend your head away from the belt side.', categoryId=7)
    medianNerveGlide = Exercise(
        name='Median Nerve Glide', image='https://fulcrumphysio.s3.amazonaws.com/medianNerveGlide.jpeg', description='Start with your arm up and out to the side with a straight elbow as shown. Your palm should be facing upwards. Next, bend your wrist upwards as you side bend your head away from the target arm as shown. Then, bend your wrist downward as you side bend your head towards the target arm.', categoryId=7)
    suboccipitalStretch = Exercise(
        name='Suboccipital Stretch', image='https://fulcrumphysio.s3.amazonaws.com/suboccipitalStretch.jpeg', description='Gently draw your chin downward towards your chest as your fingers assist in adding a stretch to the back of your head.', categoryId=7)

    db.session.add(upperTrapStretch)
    db.session.add(levatorScapStretch)
    db.session.add(chinTuck)
    db.session.add(cervicalTowelRotationStretch)
    db.session.add(isometricSideBend)
    db.session.add(cervicalExtensionTowel)
    db.session.add(firstRibMobilization)
    db.session.add(medianNerveGlide)
    db.session.add(suboccipitalStretch)

    db.session.commit()


def undo_exercises():
    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
