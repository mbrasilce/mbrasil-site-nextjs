import MyApp from 'next';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <hr className="mt-5" />
            <footer class="container">
                <p>&copy; MBrasil Web Developer 2000-2021</p>
            </footer>
        </div>
    )
}

export default Footer