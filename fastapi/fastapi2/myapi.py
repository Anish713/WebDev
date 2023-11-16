from fastapi import FastAPI, Path

app = FastAPI()

students = {
    1: {
        "name": "Anish",
        "age": 21,
        "year": "BCT"
    },
    2: {
        "name": "Pragya",
        "age": 21,
        "year": "BE"
    },
    3: {
        "name": "Safal",
        "age": 23,
        "year": "BCT"
    }
}


@app.get("/")
def index():
    return {"name":"Anish Shrestha"}


# http://127.0.0.1:8000/get-student/1 or 127.0.0.1/docs for api testing
@app.get("/get-student/{student_id}")
def get_student(student_id: int = Path(description= "Id of student to fetch details", gt=0, lt=4)):
    return students[student_id]