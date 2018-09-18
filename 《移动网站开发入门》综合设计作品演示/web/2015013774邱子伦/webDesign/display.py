# -*- coding:utf-8 -*-
from flask import Flask,render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template(
        'index.html',
    )

@app.route('/page1')
def contact():
    """Renders the contact page."""
    return render_template(
        'emmm.html',
    )

@app.route('/page2')
def about():
    """Renders the about page."""
    return render_template(
        'second.html',
    )
@app.route('/doc')
def doc():
	return render_template('doc.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8082)
