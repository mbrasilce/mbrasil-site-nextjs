import MyApp from 'next';
import Link from 'next/link';

const Menu = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h2 className="my-0 mr-md-auto logo_mbrasil">MBrasil</h2>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link href=".">
                        <a className="p-2 text-dark" >Home</a>
                    </Link>
                    <Link href="about">
                        <a className="p-2 text-dark">About</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Menu