import MyApp from 'next';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Navbar.Brand href="/">
                    <Image
                        src="/logo-mbrasil.png"
                        layout="fixed"
                        width={200}
                        height={57}
                        alt="MBrasil"
                        q={25} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <NavDropdown title="Social" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/mbrasil/" target="_blank">Linkedin</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/user/WebDeveloperBrasil" target="_blank">YouTube</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/mbrasilce" target="_blank">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.facebook.com/ProfMarcioBrasil" target="_blank">Facebook</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu