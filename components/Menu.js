import MyApp from 'next';
import Link from 'next/link';

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link href=".">
                    <a className="navbar-brand logo_mbrasil">
                        MBrasil
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href=".">
                                <a className="nav-link">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link href="about">
                                <a className="nav-link">
                                    About Us
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link href="contact">
                                <a className="nav-link">
                                    Contact
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item dropdown">
                            <Link href="#">
                            <a className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            </Link>
                            
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu