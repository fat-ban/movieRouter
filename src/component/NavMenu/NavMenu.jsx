import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import {Link} from "react-router-dom";


const NavMenu = () => {
  
 
  
  return (
    <>
    <Navbar Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Movfix</Navbar.Brand>
        
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/"  className='text-decoration-none'>Home</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to = "/about"  className='text-decoration-none' >Movie</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to = "/tvshow"  className='text-decoration-none'>Tv Show</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to = "/pricing"  className='text-decoration-none'>pricing</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to = "/blog" className='text-decoration-none'>blog</Link></Nav.Link>
            <Nav.Link href="#link"> <Link to = "/contacts"  className='text-decoration-none'>contacts</Link></Nav.Link>

          </Nav>
        
      </Container>
    </Navbar>
    
   
   
    </>
    
  )
}

export default NavMenu;