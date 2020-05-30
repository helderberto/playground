"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SendGridService = /** @class */ (function () {
    function SendGridService() {
    }
    SendGridService.prototype.sendMail = function (mail) {
        console.log('[sendgrid] submit: ', mail);
        return Promise.resolve({
            result: 'Success',
            message: 'Submitted via [sendgrid]!'
        });
    };
    return SendGridService;
}());
var MailChimpService = /** @class */ (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.sendMail = function (mail) {
        console.log('[mailchimp] submit:', mail);
        return Promise.resolve({
            result: 'Success',
            message: 'Submitted via [mailchimp]!'
        });
    };
    return MailChimpService;
}());
var sendGridService = new SendGridService();
var mailChimpService = new MailChimpService();
var sendGridPromise = sendGridService.sendMail({
    to: 'helder@mail.com',
    from: 'john@mail.com',
    body: 'lorem ipsum'
});
console.log('sendGridPromise', sendGridPromise);
var mailChimpPromise = mailChimpService.sendMail({
    to: 'helder@mail.com',
    from: 'john@mail.com',
    body: 'lorem ipsum'
});
console.log('mailChimpPromise', mailChimpPromise);
