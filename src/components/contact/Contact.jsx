import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import { useState } from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tz93mjg', 'template_xap5kdi', form.current, '4UJZG9p4XY4fRYgsM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact_icons' />
            <h4>Email</h4>
            <h5>shariefshaik11@gmail.com</h5>
            <a href="mailto:shariefshaik11@gmail.com" target='_blank'>send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact_icons' />
            <h4>LinkedIn</h4>
            <a href="linkedin.com/in/sharief-shaik-a324a7b8" target='_blank'>click to follow me @ LinkedIn</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email Address' required />
          <textarea name="message" rows="5" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact