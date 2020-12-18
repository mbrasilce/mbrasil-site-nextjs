import Head from 'next/head'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
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
                <ul>
                    <li>+55 351 926 018 986 (Portugal)</li>
                    <li>mbrasil@mbrasil.net</li>
                    <li>Aveiro / Portugal</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact