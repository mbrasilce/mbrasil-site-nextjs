import Link from 'next/link'

export default function Contenthome({ sites }) {
    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{sites.name}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">{sites.price}<small className="text-muted">€</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{sites.entrega}</li>
                    <li>{sites.paginas}</li>
                    <li>{sites.topicos}</li>
                    <li>{sites.formularios}</li>
                </ul>
                <Link href="/contact">
                    <a className={sites.btn_class}>Contrate</a>
                </Link>

            </div>
        </div>
    )
}