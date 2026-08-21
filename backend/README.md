# NexusStore AI Shopping Assistant Backend 🚀

A high-performance **FastAPI** backend powering the AI Shopping Assistant with intelligent catalog retrieval and optional **Google Gemini LLM** integration.

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

### 2. Configure Environment (Optional LLM Integration)
Create a `.env` file in the `backend/` directory:
```env
GEMINI_API_KEY="your_google_gemini_api_key_here"
```
*(Note: If no API key is provided, the backend seamlessly uses built-in smart NLP heuristic recommendations!)*

### 3. Start FastAPI Server
```bash
uvicorn app:app --reload --port 8000
```

### 4. Interactive API Documentation
Open your browser at:
- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)