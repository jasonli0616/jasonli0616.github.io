from flask import Flask, render_template, url_for, request
import smtplib
import os

app = Flask(__name__)

@app.route('/index.html', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    jsAlertMsg = None

    if request.method == 'POST':
        # Contact

        # Get contact form details
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']

        # Validation (not empty)
        sendEmail = True
        for i in [name, email, subject, message]:
            if i.strip() == '':
                sendEmail = False

        # Send email
        try:
            if name == '':
                jsAlertMsg = 'Please enter your name.'
                raise Exception
            elif email == '':
                jsAlertMsg = 'Please enter your email address.'
                raise Exception
            elif subject == '':
                jsAlertMsg = 'Please enter an email subject line.'
                raise Exception
            elif message == '':
                jsAlertMsg = 'Please enter your message.'
                raise Exception

            with smtplib.SMTP('smtp-mail.outlook.com', 587) as smtp:
                smtp.starttls()
                fromEmail = os.getenv('EMAIL_ADDR')
                fromPassword = os.getenv('EMAIL_PW')
                smtp.login(fromEmail, fromPassword)
                msgsubject = f'Message from Website: "{subject}"'
                msgbody = f'Name:\n{name}\n\nEmail:\n{email}\n\nSubject:\n{subject}\n\nMessage:\n{message}'
                smtp.sendmail(fromEmail, fromEmail, f'Subject: {msgsubject}\n\n{msgbody}')
            
            jsAlertMsg = 'Message sent!'
        except:
            if jsAlertMsg is None:
                jsAlertMsg = 'An error occurred. Please try again.'

    return render_template('index.html', jsAlertMsg=jsAlertMsg)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='8080')
    #app.run(host='0.0.0.0', port=443)
