from fastapi import FastAPI
from pymongo import MongoClient
from routes.note import note
from fastapi.staticfiles import StaticFiles


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

conn = MongoClient(
    "mongodb+srv://Zeref713:qCjOqY07lZaYxYDX@cluster0.wf1rgxx.mongodb.net/"
)
app.include_router(note)
