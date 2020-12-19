import Head from 'next/head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function About() {
    return (

        <div className="container">
            <Head>
                <title>MBrasil - Desenvolvimento de Websites</title>
            </Head>
            <Menu></Menu>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">About Us</h1>
                <p className="lead">Um pouco sobre nós.</p>
            </div>
            <div className="container">
                <p>A MBrasil é uma empresa que atua em Portugal e no Brasil e tem como seu CEO <em>Márcio Brasil</em>, desenvolvedor com mais de 20 anos de experiência, professor de tecnologias web, MBA em gestão de projetos, empresário e empreendedor em tecnlogias da informação.</p>

                <p>Somos uma empresa confiável, solucionadora de problemas, criadora de soluções enxutas com excelente custo benefício para pequenas, médias e grandes empresas.</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About