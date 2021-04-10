from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .exercises import seed_exercises, undo_exercises
from .questions import seed_questions, undo_questions, seed_from_csv
from .diagnosis import seed_diagnoses, undo_diagnoses
from .diagnosisExercise import seed_diagnosisExercise, undo_diagnosisExercise

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_exercises()
    seed_diagnoses()
    seed_diagnosisExercise()
    seed_questions()
    seed_from_csv()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
