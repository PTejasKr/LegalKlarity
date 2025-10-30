# LegalKlarity - Deployment Fix Instructions

## Current Issues:
1. Frontend is trying to access `summary:1` which returns a 404 error
2. Backend is returning a 500 error when calling the content analyzer service
3. Environment variables are not properly configured

## Fix Steps:

### 1. Update Netlify Environment Variables
In the Netlify dashboard, update the following environment variable:
```
VITE_API_BASE_URL=https://legalklarity-production.up.railway.app
```

### 2. Deploy Content Analyzer to Railway
Make sure the content analyzer service is deployed to Railway with the following environment variables:
```
GOOGLE_CLOUD_PROJECT=your-google-cloud-project-id
GOOGLE_CLOUD_LOCATION=us-central1
```

### 3. Update Backend Environment Variables in Render
In the Render dashboard, update the following environment variables:
```
CONTENT_ANALYZER_URL=https://legalklarity-content-analyzer.up.railway.app
USE_MOCK_API=false
```

### 4. Verify Google Cloud Credentials
Make sure the Google Cloud service account has the necessary permissions for Vertex AI.

## Code Fixes Applied:
1. Fixed content analyzer requirements.txt to include Google Cloud Vertex AI dependencies
2. Implemented proper enhanced analysis endpoint with error handling
3. Updated backend to use correct API endpoints and improved error handling
4. Added debugging information to content analyzer service
5. Updated deployment configurations for both Render and Railway

## After Deployment:
1. Trigger a new deploy on Netlify after updating environment variables
2. Test the enhanced analysis feature through the frontend