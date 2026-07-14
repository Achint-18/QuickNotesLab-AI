from fastapi import APIRouter
from pydantic import BaseModel

from app.routes.transcript import get_transcript
from app.services.gemini import generate_notes

router = APIRouter(prefix="/ai", tags=["AI"])


class LectureRequest(BaseModel):
    url: str


@router.post("/notes")
def notes(request: LectureRequest):

    transcript_data = get_transcript(request.url)

    if "error" in transcript_data:
        return transcript_data

    notes = generate_notes(
        transcript_data["transcript"]
    )

    return {
        "video_id": transcript_data["video_id"],
        "notes": notes
    }