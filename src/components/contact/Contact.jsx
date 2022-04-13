import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'
const Contact = () => {

    const form = useRef();

    const [done,setDone] = useState(false)

    const sendEmail = async (e) => {
      e.preventDefault();
      await emailjs.sendForm('service_ylrnxsg', 'template_t6ozjkm', form.current, 'heiIg1xXcLj_gz_BS')
        .then((result) => {
            setDone(done=>true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-left to-left show-on-scroll">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur"></div>
                <div className="blur" style={{top: '-25%',left: '60%' }}></div>
                <div className="blur" style={{top: '50%',left: '70%' ,background: '#ABF1FF94'}}></div>
                <div className="blur" style={{top: '0%',left: '0%' ,background: '#ABF1FF94'}}></div>


            </div>
            <div className="contact-right to-right show-on-scroll">
                <form className="contact-right__form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="contact-right__form-name" placeholder="Name"/>
                    <input type="email" name="from_name" className="contact-right__form-email" placeholder="Email"/>
                    <textarea type="text" name="message" className="contact-right__form-message" placeholder="Message"/>
                    <input type="submit" className="button contact-button" value="Send"/>

                    {done && (<span>Thanks for contact me!</span>)}
                </form>
            </div>
        </div>
    );
};

export default Contact;