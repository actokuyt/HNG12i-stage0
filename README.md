# HNG Stage Zero Task - Backend API

This is a simple API built with TypeScript and Express.js for the HNG12i Stage Zero task. It returns a json object on successfull http call to the `root "/"` path.

## API Endpoint

- **URL:** `https://tg-hng12i-stage0.onrender.com/`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/yourusername/your-repo"
  }
  ```

## Setup Instructions

- **Clone the repository:** `git clone https://github.com/actokuyt/HNG12i-stage0`

- **Install dependencies:** `npm install`

- **Run the server:** dev mode `npm run dev`, production mode `npm run prod`

## Deployment

The API is deployed on render. You can access it at: https://tg-hng12i-stage0.onrender.com/

## Backlink

[HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)
