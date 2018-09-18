# -*- coding:utf-8 -*-
from flask import Flask,render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'home.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8081)
