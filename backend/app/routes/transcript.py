from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import IpBlocked

...

@router.get("/transcript")
def get_transcript(url: str):
    video_id = extract_video_id(url)

    if not video_id:
        return {"error": "Invalid YouTube URL"}

    try:
        api = YouTubeTranscriptApi()
        transcript = api.fetch(video_id)

        text = " ".join(snippet.text for snippet in transcript)

        return {
            "video_id": video_id,
            "transcript": text
        }

    except IpBlocked:
        return {
            "error": "YouTube blocked transcript requests from the server. Please try again later."
        }

    except Exception as e:
        return {
            "error": str(e)
        }
    