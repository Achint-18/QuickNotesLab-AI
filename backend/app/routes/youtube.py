from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def health():
    return {
        "status": "Backend Connected ✅",
        "project": "QuickNotesLab AI"
    }