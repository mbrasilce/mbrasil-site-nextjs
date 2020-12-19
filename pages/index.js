import Head from 'next/head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import Link from 'next/link';


function Home() {
    return (

        <div className="container">
            <Head>
                <title>MBrasil - Desenvolvimento de Websites</title>
            </Head>
            <Menu></Menu>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Web Developer</h1>
                <p className="lead">Se estava a buscar um desenvolvedor web, sua procura acabou. Sites profissionais, rápidos, simples e baratos. Criação, hospedagem e suporte integrados.</p>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Hot Sites</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">99,90<small className="text-muted">€</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Entregue em 1 dia</li>
                                <li>Tudo em uma página</li>
                                <li>5 tópicos de conteúdo</li>
                                <li>Formulário de contacto</li>
                            </ul>
                            <Link href="/contact">
                                <a className="btn btn-lg btn-block btn-primary">Contrate</a>
                            </Link>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Site Básico</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">450<small className="text-muted">€</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Prazo 30 dias</li>
                                <li>Até 10 páginas</li>
                                <li>Até 10 Tópicos</li>
                                <li>Até 2 Formulários de contacto</li>
                            </ul>
                            <Link href="/contact">
                                <a className="btn btn-lg btn-block btn-outline-primary">Contrate</a>
                            </Link>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Portal de Conteúdo</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">1200<small className="text-muted">€</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Prazo a combinar</li>
                                <li>Conteúdo ilimitado</li>
                                <li>Tópicos ilimitados</li>
                                <li>Formulários ilimitados</li>
                            </ul>
                            <Link href="/contact">
                                <a className="btn btn-lg btn-block btn-primary">Contrate</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home