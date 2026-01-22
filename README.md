# Fullstack Note App

A modern, fast, and scalable **full‑stack note‑taking application** built with **Next.js App Router**, MongoDB, and Tailwind CSS. Designed with clean architecture, API routing, and production‑ready patterns.

---

## Features

* Create, read, update, and delete notes (CRUD)
* Fast API routes with Next.js App Router
* MongoDB database with Mongoose ODM
* Clean UI with Tailwind CSS
* Real‑time UI updates
* SSR + CSR hybrid rendering
* Modular folder structure
* Environment‑based configuration
* Fully responsive design

---

## Tech Stack

| Layer    | Technology             |
| -------- | ---------------------- |
| Frontend | **Next.js**, React     |
| Styling  | **Tailwind CSS**       |
| Backend  | **Next.js API Routes** |
| Database | **MongoDB**            |
| ODM      | **Mongoose**           |
| Language | **TypeScript**         |

---

## Getting Started

### Prerequisites

* Node.js **v21+**
* npm or yarn
* MongoDB (local or cloud)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/Arijit-mondal099/fullstact-nextjs-note-app.git

# Enter project folder
cd fullstact-nextjs-note-app

# Install dependencies
npm install
# or
yarn install
```

---

## Environment Setup

Create a `.env` file in the root directory:

```env
DB_URI=mongodb-connection-string
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## Running the App

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open in browser:

```
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## Usage Guide

1. Open the app in your browser
2. Click **"Create Note"**
3. Add title and content
4. Save the note
5. Edit or delete notes anytime

---

## Project Structure

```txt
note-app/
├── app/            # Next.js App Router
│   └── api/        # API routes
├── components/     # UI components
├── lib/            # DB connection & helpers
├── models/         # Mongoose models
├── public/         # Static assets
├── .env            # Environment variables
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| GET    | /api/v1/notes     | Get all notes |
| POST   | /api/v1/notes     | Create a note |
| DELETE | /api/v1/notes/:id | Delete a note |
| PATCH  | /api/v1/notes/:id | Update a note |

---

## Architecture Highlights

* App Router based API design
* Server Components for DB access
* Client Components for UI
* Proper data serialization
* Hydration‑safe rendering
* Clean separation of concerns

---

## Best Practices Used

* Environment variable isolation
* Database connection pooling
* API response standardization
* Proper error handling
* Modular code structure
* Reusable components
* Type safety

---

## License

MIT License

---

## Author

**Arijit Mondal**
Full‑stack developer | MERN

GitHub: [https://github.com/Arijit-mondal099](https://github.com/Arijit-mondal099)

---

## Support

If you like this project, give it a on GitHub — it helps a lot!
