"use strict";
var SendGridService = /** @class */ (function () {
    function SendGridService() {
    }
    SendGridService.prototype.sendMail = function (mail) {
        console.log('[sendgrid] submit: ', mail);
    };
    return SendGridService;
}());
var MailChimpService = /** @class */ (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.sendMail = function (mail) {
        console.log('[mailchimp] submit:', mail);
    };
    return MailChimpService;
}());
var sendGrid = new SendGridService();
sendGrid.sendMail({
    from: 'helder@mail.com',
    to: 'helder@mail.com',
    body: 'lorem ipsum'
});
var mailChimp = new MailChimpService();
mailChimp.sendMail({
    from: 'helder2@mail.com',
    to: 'helder2@mail.com',
    body: 'lorem ipsum 2'
});
