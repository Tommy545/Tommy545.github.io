const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'hostingsquire@gmail.com',
        pass: 'secret!'
    }
});
// https://stackoverflow.com/questions/271171/sending-emails-with-javascript
// https://sendlayer.com/blog/how-to-send-email-with-javascript/
// https://kinsta.com/blog/gmail-smtp-server/#what-is-smtp
// https://mailtrap.io/blog/gmail-smtp/#How-to-configure-Gmail-SMTP-server-settings
const mailOptions = {
    from: 'hostingsquire@gmail.com',
    to: 'hostingsquire@gmail.com',
    subject: 'test',
    text: 'test'
};

function transition() {
    document.body.style.overflow = 'hidden';

    document.getElementById("next").scrollIntoView({ behavior: "smooth" }); 

    console.log("test")
};
function btransition() {
    document.body.style.overflow = 'hidden';

    document.getElementById("back").scrollIntoView({ behavior: "smooth" }); 
};

function enlarge(element) {
    element.style.transform = "scale(1.5)";

    element.style.transition = "transform 0.25 ease";
}

function resetimg(element) {
    element.style.transform = "scale(1)";

    element.style.transition = "transform 0.25 ease";
}

