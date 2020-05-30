import { MailService, EmailTransmissionResult, Mail } from './liskov-substition-principle';

class SendGridService implements MailService {
  sendMail(mail: Mail): Promise<EmailTransmissionResult> {
    console.log('[sendgrid] submit: ', mail);

    return Promise.resolve({
      result: 'Success',
      message: 'Submitted via [sendgrid]!'
    });
  }
}

class MailChimpService implements MailService {
  sendMail(mail: Mail): Promise<EmailTransmissionResult> {
    console.log('[mailchimp] submit:', mail);

    return Promise.resolve({
      result: 'Success',
      message: 'Submitted via [mailchimp]!'
    });
  }
}

const sendGridService = new SendGridService();
const mailChimpService = new MailChimpService();

const sendGridPromise = sendGridService.sendMail({
  to: 'helder@mail.com',
  from: 'john@mail.com',
  body: 'lorem ipsum'
});
console.log('sendGridPromise', sendGridPromise);

const mailChimpPromise = mailChimpService.sendMail({
  to: 'helder@mail.com',
  from: 'john@mail.com',
  body: 'lorem ipsum'
});
console.log('mailChimpPromise', mailChimpPromise);
