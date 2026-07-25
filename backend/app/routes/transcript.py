from fastapi import APIRouter
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import urlparse, parse_qs

router = APIRouter(prefix="/youtube", tags=["YouTube"])


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

    api = YouTubeTranscriptApi()
    transcript = api.fetch(video_id)

    text = " ".join(snippet.text for snippet in transcript)

    return {
        "video_id": video_id,
        "transcript": text
    }