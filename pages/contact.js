import React from 'react';
import emailjs from 'emailjs-com';

import Head from 'next/head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cq9f2ip', 'template_fdntfyu', e.target, 'user_ySq4Gpz51PluUXjaVAx3o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (

        <div className="container">
            <Head>
                <title>MBrasil - Desenvolvimento de Websites</title>
            </Head>
            <Menu></Menu>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Contact</h1>
                <p className="lead">Fale conosco</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>+55 351 926 018 986 (Portugal)</li>
                            <li>mbrasil@mbrasil.net</li>
                            <li>Aveiro / Portugal</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <div className="form-group">
                                <label htmlFor="from_name">Name*</label>
                                <input className="form-control" type="text" id="from_name" name="from_name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="reply_to">Email*</label>
                                <input className="form-control" type="email" id="reply_to" name="reply_to" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message*</label>
                                <textarea className="form-control" id="message" name="message" required />
                            </div>
                            <p>
                                <button className="btn btn-primary" type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>


    );
}