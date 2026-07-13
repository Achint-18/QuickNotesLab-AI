from fastapi import FastAPI
from app.routes.youtube import router as youtube_router
from app.routes.transcript import router as transcript_router

app = FastAPI(title="QuickNotesLab AI")
app.include_router(transcript_router)
app.include_router(youtube_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running 🚀"
    }