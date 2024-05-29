import React, { useRef } from 'react';
import Navabar from './Navabar';
import vector from './Vector.jpg';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert('Failed to send email. Please try again later.');
                }
            );
    };

    return (
        <>
            <Navabar />
            <div className="form">
                <div className="formcontain">
                    <img src={vector} alt="" />
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="sendername" placeholder="Name" required />
                        <input type="email" name="sendermail" placeholder="E-mail" required />
                        <textarea name="message" placeholder="Message" cols="40" rows="10" required></textarea>
                        <button type="submit" id='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
