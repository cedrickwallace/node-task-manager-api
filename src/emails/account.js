const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'ryan@dkins.tech',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you enjoy it!`
    })

}

const sendCancellationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'ryan@dkins.tech',
        subject: 'Help me improve!',
        text: `Hey ${name}, I appreciate you using my service, and would love to learn your reasons for your cancelation so I can continue to improve my Task App
        Kind Regards,
        Ryan @dkins`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}