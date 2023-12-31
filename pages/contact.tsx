import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import { useState } from 'react'
import axios from 'axios'
import Phone from '../components/svgs/phone'

const contacts = [
  {
    Comp: Phone,
    alt: 'Phone icon',
    link: 'tel:+959973801525',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/KZinWin',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/k-zin-win-410bb122b/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:mysterioiusk82@gmail.com',
  },
]

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const changeValue = (field: any, value: any) => {

    if (!process.env.Password) {
      alert('sorry for inconvience ! Currently portforlio is runnion on localhost so your message can\'t reach to developer . thanks for trying to reaching me out. You can connect me by clicking following social icons. ')
      return 
    }
    field == 'email' ?
      setEmail(value)
      : field == 'sub' ?
        setSubject(value)
        : setMessage(value)
  }

  const validateFormWithJS = (e: any) => {
    e.preventDefault();
    var mail_container = document.getElementById('email')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
      alert('request kindly fill out a valid email address !')
      mail_container.style = "borderColor:red"
      mail_container?.focus();
      return
    }

    axios.post('http://localhost:3000/api/email', { email, message, subject })
      .then(

        (res) => {
          console.log(res)
          setEmail('')
          setMessage('')
          setSubject('')
        }

      ).catch(
        (e) => console.log(e)
      )
  }

  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/images/contactus.png" alt="Contact Us" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.contact_container}>
          <p className={contactStyles.text_column}>
            If you have any questions, inquiries, or just want to say hello, this is the perfect place to reach out. I love connecting with new people and discussing potential collaborations or projects.

            Whether you have a specific project in mind, need further information, or want to discuss a potential opportunity, don't hesitate to reach out. I'm here to help and provide any additional details you may need.

            Feel free to fill out the contact form , and I will respond to you as soon as possible.
          </p>
          <form className={contactStyles.form_column}>
            <input type="text" name="email" id="email" className="input" placeholder='your email'
              value={email} onChange={(e) => changeValue('email', e.target.value)}
              required />

            <input type="text" name="subject" id="subject" className="input" placeholder='subject' value={subject} onChange={(e) => changeValue('sub', e.target.value)} required />

            <textarea rows={5}
              placeholder="Message Me ... "
              onChange={(e) => changeValue('msg', e.target.value)}
              name="message"
              value={message}
              className="input"
              id="message" />

            <button type="submit" onClick={validateFormWithJS}>Submit</button>
          </form>

        </div>
        <div className="explanation">

          <p>
            Alternatively, you can also connect with me through the social media icons provided below. Feel free to connect with me on LinkedIn. I'm active on these following platforms.

            Thank you for visiting my portfolio, and I look forward to hearing from you soon. Let's create something amazing together!
          </p>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}