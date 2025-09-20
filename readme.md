# LegalKlarity - Modern Legal Intelligence Platform

LegalKlarity is an AI-driven platform that transforms how individuals and businesses interact with legal documents. Our innovative approach combines cutting-edge artificial intelligence with human-centered design to create a seamless legal intelligence experience.

## Core Features

### 🧠 Intelligent Legal Insights
- Context-aware document interpretation powered by advanced Gemini AI
- Smart document summarization with key point extraction
- Dynamic clause analysis with real-time suggestions

### 🎛️ Interactive Legal Workspace
- Drag-and-drop document organization
- Customizable dashboard with personalized insights
- One-click legal template generation

### 🌐 Global Legal Intelligence
- Multi-jurisdiction legal context awareness
- Cross-border compliance checking

### 🤝 Collaborative Legal Ecosystem
- Role-based access control for teams
- Version-controlled document collaboration

### 📱 Adaptive Interface Experience
- AI-personalized user interface
- Progressive enhancement for all devices

## Technology Stack

### Frontend Architecture
- React 18 with TypeScript
- Zustand for state management
- Firebase Authentication

### Intelligent Backend
- Node.js with Fastify
- Firebase Admin SDK
- Distributed Gemini AI microservices

### Advanced AI/ML Infrastructure
- Python-based microservices with FastAPI
- Specialized Gemini AI models

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (3.8 or higher)
- Firebase account
- Google Cloud account
- Gemini API key

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Install AI service dependencies:
   ```bash
   cd content_analyzer
   pip install -r requirements.txt
   ```

### Environment Setup

Create `.env` files in each directory by copying the `.env.example` files and filling in your actual values:

**IMPORTANT**: Firebase Service Account Setup:
1. For development/testing with mock data: No service account key needed
2. For production with real Firebase: 
   - Go to Firebase Console → Project Settings → Service Accounts
   - Click "Generate new private key"
   - Save the JSON file as `serviceAccountKey.json` in `backend/src/db/`

**Frontend (.env):**
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3001
VITE_GEMINI_API_KEY=your-gemini-api-key  # Optional - leave empty for mock mode
VITE_FIREBASE_API_KEY=your-firebase-api-key  # Optional - leave empty for mock mode
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain  # Optional - leave empty for mock mode
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id  # Optional - leave empty for mock mode
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket  # Optional - leave empty for mock mode
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id  # Optional - leave empty for mock mode
VITE_FIREBASE_APP_ID=your-firebase-app-id  # Optional - leave empty for mock mode
```

**Backend (.env):**
```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
CONTENT_ANALYZER_URL=http://127.0.0.1:8000
GEMINI_API_KEY=your-gemini-api-key  # Optional - leave empty for mock mode
USE_MOCK_API=true  # Set to false when using real API keys
```

### Running the Application (Development Mode)

1. Start the AI service:
   ```bash
   cd content_analyzer
   python app.py
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

### Running with Mock Data (No API Keys Required)

The application is configured to run in mock mode by default:
- Firebase authentication will work with mock users
- AI services will return sample data
- All features are available for testing without real API keys

To use real API keys, set `USE_MOCK_API=false` in the backend `.env` file and add your actual API keys.

### Running the Application

1. Start the AI service:
   ```bash
   cd content_analyzer
   python app.py
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.