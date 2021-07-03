import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import StyleHeader from "../styles/Header.module.css";
import { useRouter } from 'next/router';
import {Lang} from "../plugins/lang.js"


const Header = () =>
{
  
  const router = useRouter();
  
  const [isConnect, setUsConnect] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const textLang =Lang().header;


const handleChangeLang=(event , e )=>{
  event.preventDefault();
  localStorage.setItem("lang", e);
  router.reload();
}


  const disconnect = () =>
  {

    localStorage.clear();
    sessionStorage.clear();;
    if(router.route!= "/"){
      router.push("/");
    }else{
      router.reload();
    }
  }


  return ( 
   <>
    <header >
        <Link href="/" ><a title="home" className="navbar-brand"> <h1 className={StyleHeader.FFTitle}>{process.env.NAMEWEBSITE.toUpperCase()} </h1> </a>
        </Link>
      </header>


      <Navbar className={StyleHeader.sticky}  collapseOnSelect expand="lg" bg="light" variant="light">
      
    
  <NavDropdown className="m-auto" title={textLang.lang} >
        {["fr","en","ar"].map((e,i )=> <NavDropdown.Item key={i} onClick={event=>handleChangeLang(event , e ) }>{e} </NavDropdown.Item>
        )}
      </NavDropdown>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className=" justify-content-end text-center" id="responsive-navbar-nav">

  <div className="mx-auto">
<form className="input-group">
  <input type="text" className="form-control form-control-sm" placeholder={textLang.search}/>
  <button className="btn btn-outline-primary btn-sm bi bi-search "> </button>
</form>
  </div>
 
          <Nav>
            
            <Link href="/legal">
              <a className="nav-link"><i className="d-block fs-5 bi bi-question-circle-fill mx-1"></i>{textLang.faq}</a>
            </Link>
            </Nav> 

{isConnect ?  
<Nav>
              <Link href="/setting"><a className="nav-link"><i className="d-block fs-5 bi bi-people-fill mx-1"></i>{textLang.setting}</a></Link>
              <Link href="/profil"><a className="nav-link"><i className="d-block fs-5 bi bi-person-bounding-box mx-1"></i>Profil</a></Link>
              <button className="nav-link btn btn-link" onClick={(e) => disconnect()} ><i className="d-block fs-5 bi bi-person-x-fill mx-1"></i> {textLang.disconnect}</button>
            </Nav>
            :
            <Nav className="mr-auto">
              <Link href="/login"><a className="nav-link" title="Connexion" > <i className="d-block fs-5 bi bi-person-check-fill mx-1"></i>{textLang.connect}</a></Link>
              <Link href="/signup"><a className="nav-link" title="Inscription" ><i className="d-block fs-5 bi bi-person-plus-fill mx-1"></i>{textLang.sub}</a></Link>
            </Nav>

          }
        </Navbar.Collapse>
      </Navbar>
 
      </>
  );
};

export default Header;

