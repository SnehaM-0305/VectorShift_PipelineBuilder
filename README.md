# VectorShift — Pipeline Builder (Frontend)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SnehaM-0305/VectorShift_PipelineBuilder.git
cd VectorShift_PipelineBuilder
```

Run the **backend first** on port `8000`, otherwise **Run Pipeline** will fail.

## Frontend

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Backend (separate terminal)

From the repo root (`frontend` and `backend` are siblings):

```bash
cd backend
pip3 install fastapi uvicorn
uvicorn main:app --reload --port 8000
```

If your shell is already inside `frontend`, use `cd ../backend` instead of `cd backend`.

## Production build

```bash
npm run build
```
