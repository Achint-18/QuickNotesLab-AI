from fastapi import APIRouter
from urllib.parse import urlparse, parse_qs
from dotenv import load_dotenv
import os
import requests

load_dotenv()

router = APIRouter(prefix="/youtube", tags=["YouTube"])

SUPADATA_API_KEY = os.getenv("SUPADATA_API_KEY")


def extract_video_id(url: str):
    parsed = urlparse(url)

    if parsed.hostname == "youtu.be":
        return parsed.path[1:]

    if parsed.hostname in ["www.youtube.com", "youtube.com"]:
        return parse_qs(parsed.query).get("v", [None])[0]

    return None


@router.get("/transcript")
def get_transcript(url: str):

    video_id = extract_video_id(url)

    if not video_id:
        return {"error": "Invalid YouTube URL"}

    response = requests.get(
        "https://api.supadata.ai/v1/transcript",
        headers={
            "x-api-key": SUPADATA_API_KEY,
        },
        params={
            "url": url,
            "text": "true",
            "mode": "auto",
            "lang": "en",
        },
        timeout=60,
    )

    if response.status_code != 200:
        return {
            "error": response.text
        }

    data = response.json()

    

    transcript = ""

    if isinstance(data.get("content"), str):
        transcript = data["content"]

    elif isinstance(data.get("content"), list):
        transcript = " ".join(
            chunk["text"] if isinstance(chunk, dict) else str(chunk)
            for chunk in data["content"]
        )

    elif "text" in data:
        transcript = data["text"]

    if not transcript:
        return {"error": "Transcript not found"}

    return {
        "video_id": video_id,
        "transcript": transcript
    }