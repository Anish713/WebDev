from fastapi import FastAPI, Path, Query
from typing import Optional

app = FastAPI()

students = {
    1: {"name": "Anish", "age": 21, "roll": 1},
    2: {"name": "Pragya", "age": 21, "roll": 2},
    3: {"name": "Safal", "age": 23, "roll": 3},
    4: {"name": "Amit", "age": 44, "roll": 4},
}


@app.get("/")
def index():
    return {"name": "Anish Shrestha"}


# http://127.0.0.1:8000/get-student/1 or 127.0.0.1/docs for API testing
@app.get("/get-student/{student_id}")
def get_student(
    student_id: int = Path(description="Id of student to fetch details", gt=0, lt=5)
):
    return students.get(student_id, {"Data": "Not Found"})


@app.get("/get-by-name")
# def get_student(name: Optional[str] = None, test : int): #Error:  SyntaxError: non-default argument follows default argument
# def get_student( test : int, name: Optional[str] = None): #works, not best
def get_student(*, name: Optional[str] = None, test: int):  # best way
    for student_id in students:
        if students[student_id]["name"] == name:
            return students[student_id]
    return {"Data": "Not Found"}


