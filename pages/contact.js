import Head from "next/head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ContactForm from "../components/contactForm";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
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
      <Container>
        <Row>
          <Col md="6">
            <ul>
              <li>Tlm: 926 018 986 (Portugal)</li>
              <li>Whatsapp: +351 926 018 986</li>
              <li>marcio@mbrasil.net</li>
              <li>Aveiro / Portugal</li>
            </ul>
          </Col>
          <Col md="6">
            <ContactForm></ContactForm>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}
