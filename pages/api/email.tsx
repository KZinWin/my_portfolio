import { SMTPClient } from 'emailjs';

export default async function handler(req : any , res: any) {

    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.subject; 

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        res.status(500).end(JSON.stringify({ message: 'please fill validate email!' }))
        return ;
    }

    if(!process.env.Password) {
        alert('sorry for inconvience ! Currently portforlio is runnion on localhost so your message can\'t reach to developer . thanks for trying to reach out.  ')
    }

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