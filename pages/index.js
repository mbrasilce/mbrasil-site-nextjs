import Head from 'next/head'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';

import useSWR from 'swr'
import Contenthome from '../components/Contenthome'
const fetcher = (url) => fetch(url).then((res) => res.json())

function Home() {

    const { data, error } = useSWR('/api/contenthome', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (

        <div className="container">

            <Head>
                <title>MBrasil - Desenvolvimento de Websites</title>
            </Head>
            <Menu></Menu>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Web Developer</h1>
                <p className="lead">Se estava a buscar um desenvolvedor web, sua procura acabou. Sites profissionais, rápidos, simples e baratos.</p>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {data
                    .filter(sites => sites['tipo'] == 'sites')
                    .map((p, i) => (
                        <Contenthome key={i} sites={p} />
                    ))}    
                </div>
            </div>

            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Suporte e Hospedagem</h1>
                <p className="lead">Hospedagem profissinal com suporte integrado e personalizado. Registro de domínios e configuração de emails e sies.</p>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {data
                    .filter(sites => sites['tipo'] == 'hospedagem')
                    .map((p, i) => (
                        <Contenthome key={i} sites={p} />
                    ))}    
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Home