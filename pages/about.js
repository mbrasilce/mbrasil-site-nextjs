import Head from 'next/head'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'

function About() {
    return (

        <div>
            <Head>
                <title>MBrasil - Desenvolvimento de Websites</title>
            </Head>
            <Menu></Menu>
            <h1 className="text-danger">About</h1>
        </div>
    )
}

export default About