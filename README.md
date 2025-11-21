# Mental Health Charities — Starter Website

This repository contains a minimal starter website using HTML, CSS, JavaScript, and a small Python (Flask) backend.

Project layout
```
mumvisit/
├─ app.py
├─ requirements.txt
├─ templates/
│  ├─ base.html
│  └─ index.html
├─ static/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  └─ images/
│     └─ .gitkeep
└─ .gitignore
```

Getting started (Windows)

1. Create and activate a virtual environment:

```powershell
py -3 -m venv venv
venv\Scripts\activate
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the app directly:

```powershell
python app.py
```

Or using Flask CLI (Windows):

```powershell
set FLASK_APP=app.py
set FLASK_ENV=development
flask run
```

Open http://127.0.0.1:5000/ in your browser.

Notes
- This is a minimal starter. Add routes, APIs, and static assets as needed.
- For production, use a proper WSGI server (gunicorn, waitress) and disable debug mode.

Deploying to Fly.io

- Install the Fly CLI: https://fly.io/docs/hands-on/install-fly/
- Login and create an app (from the repo root):

```bash
fly launch --image=registry.fly.io/<app-name> --name mumvisit
```

Or let Fly create the configuration for you interactively with `fly launch`. The included `Dockerfile` and `fly.toml` are starter files — use `fly launch` to finalize the app name and region.

To deploy:

```bash
fly deploy
```

Fly will build the Docker image and run the container; the app should bind to the port in `$PORT` (the `Dockerfile` already uses `$PORT`).

Local testing with Docker (optional):

```powershell
docker build -t mumvisit:local .
docker run -p 8080:8080 -e PORT=8080 mumvisit:local
```

If you prefer not to use Docker, run `fly launch` and pick the `python` builder or let Fly detect the project — Fly supports multiple deployment workflows.

Enjoy!