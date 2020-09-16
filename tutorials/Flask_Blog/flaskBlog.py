from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
app = Flask(__name__)

app.config['SECRET_KEY'] = 'c316f838ed2eb35ccafbed4a4dcada33'

posts = [
    {
        "author": "Austin Corteville",
        "title": "Blog Post 1",
        "content": "First post content",
        "date_posted": "July 15, 2020"
    },
    {
        "author": "Bob Saget",
        "title": "Blog Post 2",
        "content": "Second post content",
        "date_posted": "July 18, 2020"
    }
]

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html", posts=posts)

@app.route('/about')
def about():
    return render_template("about.html", title="About")

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)

@app.route('/login')
def login():
    form = LoginForm()
    return render_template('login.html', title='Login', form=form)

if __name__ =='__main__':
    app.run(debug=True)