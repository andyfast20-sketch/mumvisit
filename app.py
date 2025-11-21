import os
from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample list of mental-health charities. Replace or extend as needed.
CHARITIES = [
    {
        "name": "Mind",
        "country": "UK",
        "website": "https://www.mind.org.uk/",
        "logo": "/static/images/mind.svg",
        "tagline": "For better mental health",
        "description": "Provides advice and support to empower anyone experiencing a mental health problem."
    },
    {
        "name": "Samaritans",
        "country": "UK & Ireland",
        "website": "https://www.samaritans.org/",
        "tagline": "You're never alone",
        "description": "Offers a safe place for people to talk any time they like, in their own way, about whatever's getting to them.",
        "logo": "/static/images/samaritans.svg"
    },
    {
        "name": "NAMI",
        "country": "USA",
        "website": "https://www.nami.org/",
        "tagline": "You Are Not Alone",
        "description": "National Alliance on Mental Illness; provides advocacy, education, support and public awareness.",
        "logo": "/static/images/nami.svg"
    },
    {
        "name": "Mental Health Foundation",
        "country": "UK",
        "website": "https://www.mentalhealth.org.uk/",
        "tagline": "Understand, protect and sustain mental health",
        "description": "Works to prevent mental health problems through research, policy and public education.",
        "logo": "/static/images/mentalhealthfoundation.svg"
    },
    {
        "name": "Rethink Mental Illness",
        "country": "UK",
        "website": "https://www.rethink.org/",
        "tagline": "Supporting people affected by mental illness",
        "description": "Provides services and a community for those affected by severe mental illness.",
        "logo": "/static/images/rethink.svg"
    },
]


@app.route('/')
def index():
    return render_template('index.html', charities=CHARITIES)


@app.route('/api/charities')
def charities_api():
    """Simple JSON API endpoint returning the charities list."""
    return jsonify(CHARITIES)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
