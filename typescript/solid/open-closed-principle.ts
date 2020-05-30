type Mail = {
  from: string,
  to: string,
  body: string,
}

type EmailTransmissionResult = void;

interface EmailService {
  sendMail: (mail: Mail) => EmailTransmissionResult;
}

class SendGridService implements EmailService {
  sendMail(mail: Mail): EmailTransmissionResult {
    console.log('[sendgrid] submit: ', mail);
  }
}

class MailChimpService implements EmailService {
  sendMail(mail: Mail): EmailTransmissionResult {
    console.log('[mailchimp] submit:', mail);
  }
}

const sendGrid = new SendGridService()
sendGrid.sendMail({
  from: 'helder@mail.com',
  to: 'helder@mail.com',
  body: 'lorem ipsum'
});

const mailChimp = new MailChimpService();
mailChimp.sendMail({
  from: 'helder2@mail.com',
  to: 'helder2@mail.com',
  body: 'lorem ipsum 2'
});
