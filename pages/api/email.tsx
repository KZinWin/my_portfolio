import { SMTPClient } from 'emailjs';

export default async function handler(req : any , res: any) {

    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.subject; 

    const client = new SMTPClient({
        user: process.env.Username,
        password: process.env.Password,
        host: process.env.Server,
        port: 465,
        ssl: true
    });
    
    try {

        client.sendAsync(
            {
                text: `${message} \n -message from ${email}`,
                from: 'kayzinwin@ucsy.edu.mm',
                to: 'mysterioiusk82@gmail.com',
                subject: subject,

            }
        )
        res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }
}