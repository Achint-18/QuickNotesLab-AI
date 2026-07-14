import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-flash-latest")


def generate_notes(transcript: str):
    prompt = f"""
You are an expert professor.

Convert the following lecture transcript into structured study notes.

Rules:

- Use proper headings
- Use bullet points
- Highlight important concepts
- Keep explanations concise
- Make notes exam-oriented
- Keep technical terms
- Don't hallucinate information

Transcript:

{transcript}
"""

    response = model.generate_content(prompt)

    return response.text