import { useState, useRef,useLayoutEffect} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Fade from 'react-reveal/Fade';
import Link from "next/link";
import StyleHeader from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { Lang } from "../plugins/lang.js";

const Header = () => {
  const router = useRouter();

  const [isConnect, setUsConnect] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const elementDimension = useRef("")
  const [hideNav, seHhideNav] = useState({hamburg:false , hide:false });

  const textLang = Lang().header;
  
   useLayoutEffect(() => {
   if( Math.round(elementDimension.current.offsetWidth) <= 768){
    seHhideNav({hamburg:true , hide:true })
   }
   }, [elementDimension])
   

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

  const Help=()=><Link href="/legal"><a className="mx-4 nav-link"><i className="d-block fs-3 bi bi-question-circle-fill mx-1"></i>{textLang.faq}</a></Link>
   

  return (
    <>
    <header ref={elementDimension}  className={StyleHeader.sticky}>

<span className="d-flex justify-content-center align-content-center align-items-center">
  
 {(hideNav.hamburg==true) &&  <i onClick={()=>  seHhideNav({hamburg:true ,hide:!hideNav.hide})} className="btn btn-lg fs-3 bi bi-list"></i> }
  
       <Link href="/" ><a title="home" className={StyleHeader.FFTitle} ><i className="fs-3 bi bi-gear-fill text-warning"></i> <i className="bi bi-lightning fs-3 text-dark"></i><h1>{process.env.NAMEWEBSITE.toUpperCase()} </h1> </a>
        </Link> 
        
</span>

        <form  className={StyleHeader.inputSearch}>
              <input
                type="text"
                className="w-100 form-control my-auto"
                placeholder={textLang.search}
              />
              <button className="btn btn-outline-primary  bi bi-search"></button>
              </form>

              <span className="d-flex mx-4 px-4 align-content-center align-items-center "> 
            <Link href="/adsence">
              <a className="mx-2 btn btn-primary btn-sm">
              <i className="mx-1 bi bi-megaphone-fill"></i>
              {(hideNav.hamburg==false) && textLang.adsence} 
              </a>
            </Link>

            <Link href="/contact">
              <a className="mx-2 btn btn-primary btn-sm">
              <i className="mx-1 bi bi-envelope-fill"></i>
              {(hideNav.hamburg==false) &&  textLang.contact} 
              </a>
            </Link>

            <NavDropdown className="m-auto bi bi-globe2 d-flex justify-content-around align-content-center align-items-center" title={(hideNav.hamburg==false) && textLang.lang}>
              {["en", "fr", "ar"].map((e, i) => (
                <NavDropdown.Item
                  key={i}
                  onClick={(event) => handleChangeLang(event, e)}
                >
                  {e} 
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </span>

          </header>
          
          <Fade top when={!hideNav.hide}>
          {!hideNav.hide && 
          <nav className={StyleHeader.NavFlex}>

        <span className={StyleHeader.inputSearch+ " mx-4 nav-lin"}>
              <Link href="/post">
              <a className=" btn btn-warning btn-sm">
                {textLang.post}
              </a>
            </Link>
        </span>
         

           
           

          {isConnect ? (
            <>
              <Link href="/setting">
                <a className="mx-4 nav-link">
                  <i className="d-block fs-3 bi bi-people-fill mx-1"></i>
                  {textLang.setting}
                </a>
              </Link>
              <Help/>
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
         </>
          ) : (
            <>
              <Link href="/login">
                <a className="mx-4 nav-link" title="Connexion">
                  {" "}
                  <i className="d-block fs-3 bi bi-person-check-fill mx-1"></i>
                  {textLang.connect}
                </a>
              </Link>

              <Help/>
              
              <Link href="/signup">
                <a className="mx-4 nav-link" title="Inscription">
                  <i className="d-block fs-3 bi bi-person-plus-fill mx-1"></i>
                  {textLang.sub}
                </a>
              </Link>
            </>
          )}
           </nav>}
           </Fade>
           
</>
  );
};

export default Header;

 