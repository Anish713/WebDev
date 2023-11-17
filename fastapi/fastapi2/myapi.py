from fastapi import FastAPI, Path, Query
from typing import Optional
from pydantic import BaseModel


app = FastAPI()

students = {
    1: {"name": "Anish", "age": 21, "roll": 1},
    2: {"name": "Pragya", "age": 21, "roll": 2},
    3: {"name": "Safal", "age": 23, "roll": 3},
    4: {"name": "Amit", "age": 44, "roll": 4},
}


class Student(BaseModel):
    name: str
    age: int
    roll: int


class UpdateStudent(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    roll: Optional[int] = None


@app.get("/")
def index():
    return {"name": "Anish Shrestha"}


# http://127.0.0.1:8000/get-student/1 or 127.0.0.1/docs for API testing
@app.get("/get-student/{student_id}")
def get_student(
    student_id: int = Path(description="Id of student to fetch details", gt=0, lt=50)
):
    return students.get(student_id, {"Data": "Not Found"})


@app.get("/get-by-name/{student_id}")
# def get_student(name: Optional[str] = None, test : int): #Error:  SyntaxError: non-default argument follows default argument
# def get_student( test : int, name: Optional[str] = None): #works, not best
# def get_student(*, student_id: int, name: Optional[str] = None, test: int):  # best way
def get_student_by_name(*, student_id: int, name: Optional[str] = None):
    for student_id in students:
        if students[student_id]["name"] == name:
            return students[student_id]
    return {"Data": "Not Found"}


@app.post("/create-student/{student_id}")
def create_student(student_id: int, student: Student):
    if student_id in students:
        return {"Error": "Student with that id already exists"}

    students[student_id] = {
        "name": student.name,
        "age": student.age,
        "roll": student.roll,
    }
    return students[student_id]


# @app.put("/update-student/{student_id}")
# def update_student(student_id: int, student: Student):
#     if student_id not in students:
#         return {"Error": "Student with that id does not exists"}

#     students[student_id] = {
#         "name": student.name,
#         "age": student.age,
#         "roll": student.roll,
#     }
#     return students[student_id]


@app.put("/update-student/{student_id}")
def update_student(
    student_id: int, student: UpdateStudent
):  # may need to update only one or more values
    if student_id not in students:
        return {"Error": "Student with that id does not exists."}

    if student.name != None:
        students[student_id]["name"] = student.name
    if student.age != None:
        students[student_id]["age"] = student.age
    if student.roll != None:
        students[student_id]["roll"] = student.roll

    # students[student_id] = {
    #     "name": student.name,
    #     "age": student.age,
    #     "roll": student.roll,
    # }
    return students[student_id]
    # pass
