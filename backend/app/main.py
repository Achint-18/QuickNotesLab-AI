from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.youtube import router as youtube_router
from app.routes.transcript import router as transcript_router
from app.routes.ai import router as ai_router

app = FastAPI(title="QuickNotesLab AI")

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://quick-notes-lab-ai.vercel.app"
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(transcript_router)
app.include_router(youtube_router)
app.include_router(ai_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running 🚀"
    }