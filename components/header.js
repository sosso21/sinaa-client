import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import StyleHeader from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { Lang } from "../plugins/lang.js";

const Header = () => {
  const router = useRouter();

  const [isConnect, setUsConnect] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const textLang = Lang().header;

  const handleChangeLang = (event, e) => {
    event.preventDefault();
    localStorage.setItem("lang", e);
    router.reload();
  };

  const disconnect = () => {
    localStorage.clear();
    sessionStorage.clear();
    if (router.route != "/") {
      router.push("/");
    } else {
      router.reload();
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Collapse
          className="justify-content-end text-center"
          
        >
          <span className="d-flex mx-4 px-4"> 
            <Link href="/adsence">
              <a className="mx-2 btn btn-primary btn-sm">
                {textLang.adsence}
              </a>
            </Link>

            <Link href="/contact">
              <a className="mx-2 btn btn-primary btn-sm">
                {textLang.contact}
              </a>
            </Link>

            <NavDropdown className="m-auto" title={textLang.lang}>
              {["en", "fr", "ar"].map((e, i) => (
                <NavDropdown.Item
                  key={i}
                  onClick={(event) => handleChangeLang(event, e)}
                >
                  {e}{" "}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </span>

        </Navbar.Collapse>
      </Navbar>




      <Navbar className={StyleHeader.sticky}  collapseOnSelect expand="sm" bg="light" variant="light">
      

        <header className="m-auto" >
        <Link href="/" ><a title="home" className="mx-4 navbar-brand text-primary "><i className="fs-3 bi bi-gear-fill text-warning"><i className={"bi bi-lightning fs-3 text-dark "+StyleHeader.AbsolutBi}></i> </i> <h1 className={StyleHeader.FFTitle}>{process.env.NAMEWEBSITE.toUpperCase()} </h1> </a>
        </Link>
      </header>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className=" justify-content-end text-center"
          id="responsive-navbar-nav"
        > 
            <form className={StyleHeader.inputSearch} >
              <div  className="input-group px-4 mx-auto my-1 ">
              <Link href="/post">
              <a className="mx-4 w-100 btn btn-warning btn-sm">
                {textLang.post}
              </a>
            </Link>
              </div>
              <div  className="input-group mx-auto my-1">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder={textLang.search}
              />
              <button className="btn btn-outline-primary btn-sm bi bi-search ">
                 
              </button>
              </div>
            </form> 

          <Nav>
            <Link href="/legal">
              <a className="mx-4 nav-link">
                <i className="d-block fs-3 bi bi-question-circle-fill mx-1"></i>
                {textLang.faq}
              </a>
            </Link>
          </Nav>

          {isConnect ? (
            <Nav className="mr-4 pr-4">
              <Link href="/setting">
                <a className="mx-4 nav-link">
                  <i className="d-block fs-3 bi bi-people-fill mx-1"></i>
                  {textLang.setting}
                </a>
              </Link>
              <Link href="/profil">
                <a className="mx-4 nav-link">
                  <i className="d-block fs-3 bi bi-person-bounding-box mx-1"></i>
                  Profil
                </a>
              </Link>
              <button
                className="mx-4 nav-link btn btn-link"
                onClick={(e) => disconnect()}
              >
                <i className="d-block fs-3 bi bi-person-x-fill mx-1"></i>{" "}
                {textLang.disconnect}
              </button>
            </Nav>
          ) : (
            <Nav className="mr-4 pr-4">
              <Link href="/login">
                <a className="mx-4 nav-link" title="Connexion">
                  {" "}
                  <i className="d-block fs-3 bi bi-person-check-fill mx-1"></i>
                  {textLang.connect}
                </a>
              </Link>
              <Link href="/signup">
                <a className="mx-4 nav-link" title="Inscription">
                  <i className="d-block fs-3 bi bi-person-plus-fill mx-1"></i>
                  {textLang.sub}
                </a>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
