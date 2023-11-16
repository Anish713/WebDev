from fastapi import FastAPI, Path, Query

app = FastAPI()

students = {
    1: {"name": "Anish", "age": 21, "year": "BCT"},
    2: {"name": "Pragya", "age": 21, "year": "BE"},
    3: {"name": "Safal", "age": 23, "year": "BCT"},
}


@app.get("/")
def index():
    return {"name": "Anish Shrestha"}


# http://127.0.0.1:8000/get-student/1 or 127.0.0.1/docs for API testing
@app.get("/get-student/{student_id}")
def get_student(
    student_id: int = Path(description="Id of student to fetch details", gt=0, lt=4)
):
    return students.get(student_id, {"Data": "Not Found"})


@app.get("/get-by-name")
def get_student(name: str = Query(description="Name of student to fetch.")):
    for student_id in students:
        if students[student_id]["name"] == name:
            return students[student_id]
    return {"Data": "Not Found"}
