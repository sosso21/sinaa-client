import { useState, useRef,useLayoutEffect} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Fade from 'react-reveal/Fade';
import Link from "next/link";
import StyleHeader from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { Lang } from "../plugins/lang.js";
import Image from "next/image";

11
const Header = () => {
  const router = useRouter();

  const [isConnect, setUsConnect] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const elementDimension = useRef("")
  const [hideNav, seHhideNav] = useState({hamburg:false , hide:false });

  const textLang = Lang().header;
  


useLayoutEffect(() => {
 const token = localStorage.getItem("token")
 const userInfo = sessionStorage.getItem("userInfo")

 if(!!token && !!userInfo){
  setUsConnect(true)
 }
}, []);


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

  const Help=()=><Link href="/legal"><a title={textLang.faq} className="mx-4 nav-link"><i className="d-block fs-3 bi bi-question-circle-fill mx-1"></i>{textLang.faq}</a></Link>
   

  return (
    <>
    <header ref={elementDimension}  className={StyleHeader.sticky}>

<span className="d-flex justify-content-center align-content-center align-items-center">
  
 {(hideNav.hamburg==true) &&  <i onClick={()=>  seHhideNav({hamburg:true ,hide:!hideNav.hide})} className="btn btn-lg fs-3 bi bi-list"></i> }
  

       <Link href="/" ><a title={process.env.NAMEWEBSITE}  className={StyleHeader.FFTitle} >
         
       <Image
              className="rounded"
                loader={({ src }) => {
                  return src;
                }}
                src="/logo.png"
                alt="logo sinaa"
                width={40}
                height={'1rem'}
              />
       
         <h1 className="fw-bolder my-auto mx-2 d-flex">{[...process.env.NAMEWEBSITE.toUpperCase()].map((i,k)=>((k==2)?<Fade top><span className="text-warning">{i}</span> </Fade>:<Fade left><span>{i}</span> </Fade>  ) ) } </h1> </a>
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
              <a  title={textLang.adsence} className="mx-2 btn btn-primary btn-sm">
              <i className="mx-1 bi bi-megaphone-fill"></i>
              {(hideNav.hamburg==false) && textLang.adsence} 
              </a>
            </Link>

            <Link href="/contact">
              <a title={textLang.contact} className="mx-2 btn btn-primary btn-sm">
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
              <Link href={isConnect? "/client/post" :"/login"}>
              <a title={textLang.post} className=" btn btn-warning btn-sm">
                {textLang.post}
              </a>
            </Link>
        </span>
         

           
           

          {isConnect ? (
            <>
              <Link href="/client">
                <a className="mx-4 nav-link"  title={textLang.setting} >
                  <i className="d-block fs-3 bi bi-people-fill mx-1"></i>
                  {textLang.setting}
                </a>
              </Link>
              <Help/>
              <Link href="/profil">
                <a  title={textLang.profil} className="mx-4 nav-link">
                  <i className="d-block fs-3 bi bi-person-bounding-box mx-1"></i>
                  {textLang.profil}
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
                <a className="mx-4 nav-link"  title={textLang.connect}>
                   
                  <i className="d-block fs-3 bi bi-person-check-fill mx-1"></i>
                  {textLang.connect}
                </a>
              </Link>

              <Help/>
              
              <Link href="/signup">
                <a className="mx-4 nav-link"  title={textLang.sub}> 
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

 