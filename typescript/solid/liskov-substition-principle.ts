type TransmissionResult = 'Success' | 'Failure' | 'Bounced';

export interface EmailTransmissionResult {
  result: TransmissionResult;
  message?: string;
}

export type Mail = {
  from: string,
  to: string,
  body: string,
}

export interface MailService {
  sendMail: (mail: Mail) => Promise<EmailTransmissionResult>;
}
