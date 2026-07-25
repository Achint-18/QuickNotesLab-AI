import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-flash-latest")


def generate_notes(transcript: str):
    prompt = f"""
You are an expert educator, instructional designer, and subject matter expert.

Your task is to convert the following YouTube lecture transcript into premium study notes.

The lecture may belong to ANY subject, including but not limited to:

- Mathematics
- Science
- Computer Science
- Biology
- Chemistry
- Physics
- History
- Geography
- Economics
- Commerce
- Law
- Medicine
- Literature
- Languages
- Engineering
- Competitive Exams
- School Curriculum
- College Curriculum

Your job is to understand the topic first and then create notes that are best suited for THAT subject.

---

## Objectives

Your notes should help the learner:

• Understand concepts quickly
• Revise before exams
• Remember important ideas
• Learn difficult topics easily

---

## Formatting Rules

Return the output ONLY in Markdown.

Use:

# Main Title

## Headings

### Subheadings

Use bullet points wherever possible.

Avoid long paragraphs.

Highlight important keywords using **bold** formatting.

Use tables whenever they improve understanding.

Use code blocks ONLY if the topic contains programming.

Use mathematical equations ONLY when needed.

Never force programming examples into non-programming subjects.

---

## Content Guidelines

Generate the following sections whenever they are applicable.

# Topic Title

## 📌 Introduction

A short explanation of what the topic is.

---

## 🎯 Learning Objectives

What the learner will understand.

---

## 📖 Main Concepts

Explain all important concepts clearly.

---

## 📝 Examples

Give simple examples whenever possible.

Skip this section if examples are not meaningful.

---

## 📊 Tables

Use comparison tables whenever useful.

---

## 💻 Code Example

Only if the lecture is about programming.

---

## 🧮 Formula / Equation

Only if mathematical expressions exist.

---

## ⚠ Common Mistakes

Mention common misconceptions students make.

---

## 💡 Memory Tricks

Provide mnemonics or tricks whenever possible.

Skip if not applicable.

---

## 🔥 Frequently Asked Questions

Generate 3-5 likely viva/interview/exam questions.

---

## ⚡ One Minute Revision

Summarize the entire topic into quick revision points.

---

## Rules

- Don't invent facts.
- Don't hallucinate.
- Don't repeat the transcript.
- Don't write unnecessary introductions.
- Keep the notes concise.
- Use simple language.
- Make the notes visually clean.
- Make them enjoyable to read.

Transcript:

{transcript}
"""



    print("=" * 50)
    print("Transcript length:", len(transcript))
    print("Prompt length:", len(prompt))
    print("=" * 50)
    response = model.generate_content(prompt)

    return response.text


def generate_summary(transcript: str):

    prompt = f"""
You are an expert educator.

Summarize this lecture.

Requirements:
- Maximum 250 words
- Explain in simple language
- Include only important concepts
- Use bullet points
- Mention important formulas if present

Transcript:

{transcript}
"""

    response = model.generate_content(prompt)

    return response.text