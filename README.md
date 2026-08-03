# Resto

A simple full-stack restaurant directory app for adding, editing, listing, and deleting restaurant records.

## Tech Stack

**Backend**
- Node.js + Express 5 (TypeScript)
- MongoDB with Mongoose
- InversifyJS for dependency injection
- Zod for request validation

**Frontend**
- React 19 + TypeScript + Vite
- Tailwind CSS
- Axios for API calls

## Features

- Add a new restaurant (name, address, phone)
- Edit an existing restaurant
- Delete a restaurant
- List all restaurants

## Project Structure

```
Resto/
├── backend/
│   └── src/
│       ├── controller/       # Route handlers
│       ├── service/          # Business logic
│       ├── repository/       # Data access layer
│       ├── model/            # Mongoose schema
│       ├── dto/              # Data transfer objects
│       ├── mapper/           # Model <-> DTO mapping
│       ├── validations/      # Zod schemas
│       ├── middlewares/      # Request validation middleware
│       ├── routes/           # Express router
│       ├── config/           # DB connection, DI container
│       └── app.ts            # Entry point
└── frontend/
    └── src/
        ├── pages/            # Restaurant page
        ├── components/       # Restaurant card, add/edit modals
        ├── services/         # API client
        └── App.tsx
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB instance (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/Subhana-7/Resto.git
cd Resto
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:
```env
MONGO_URL=your_mongodb_connection_string
PORT=2000
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd ../frontend
npm install
```

The frontend already includes a `.env` pointing at the backend:
```env
VITE_SERVER_URL=http://localhost:2000/api
```

Run the frontend:
```bash
npm run dev
```

The app will be available at the Vite dev server URL (typically `http://localhost:5173`).

## API Overview

**Restaurants** (`/api`)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/` | List all restaurants |
| POST | `/api/` | Add a new restaurant |
| PUT | `/api/:restaurantId` | Update a restaurant (partial updates allowed) |
| DELETE | `/api/:restaurantId` | Delete a restaurant |

### Restaurant shape
```json
{
  "name": "string",
  "address": {
    "street": "string",
    "city": "string",
    "state": "string",
    "country": "string",
    "pincode": 0
  },
  "phone": 0
}
```
