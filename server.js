const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, address, email, age } = req.body;

    // Create a transporter using Brevo SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',  // Brevo SMTP server address
        port: 587,  // Standard port for SMTP
        auth: {
            user: 'ptitarara@gmail.com',  // Replace with your Brevo email
            pass: 'xsmtpsib-cbd1f391af24fa9f4dc115c3a33dee9320e2628c803e96cc817a551762ad1192-3XW8J1Ob0jZtARgh'            // Replace with your Brevo SMTP key
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,  // Sender address (can be your email or user-submitted email)
        to: 'yashsuthar170@gmail.com',  // Receiver address
        subject: 'New Contact Us Form Submission',
        text: `You have a new form submission:
               \nName: ${name}
               \nAddress: ${address}
               \nEmail: ${email}
               \nAge: ${age}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);  // Log the error for debugging
            return res.status(500).send('Error sending email: ' + error.message);
        }
        console.log('Email sent:', info.response);  // Log the response
        res.status(200).send('Email sent successfully!');
    });
});

// Serve the contact form (Optional)
app.use(express.static('public')); // Assuming your HTML file is inside the 'public' folder

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
