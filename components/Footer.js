import MyApp from 'next';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <hr className="mt-5" />
            <footer className="container">
                <p>&copy; MBrasil - Desenvolvedor Web | 2000-2021</p>
            </footer>
        </div>
    )
}

export default Footer