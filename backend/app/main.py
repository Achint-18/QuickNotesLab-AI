from fastapi import FastAPI
from app.routes.youtube import router as youtube_router
from app.routes.transcript import router as transcript_router
from app.routes.ai import router as ai_router

app = FastAPI(title="QuickNotesLab AI")
app.include_router(transcript_router)
app.include_router(youtube_router)
app.include_router(ai_router)
@app.get("/")
def home():
    return {
        "message": "Backend Running 🚀"
    }