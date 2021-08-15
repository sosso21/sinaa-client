import { useState,useEffect } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import StyleHeader from "../styles/CategoryBar.module.css";

const CategoryBar = ({category}) => {
  const [data, setData] = useState("");

  

  useEffect(() => {
    const myLang = localStorage.getItem("lang") ||  "en" ;
    let protoData = [];
   
    for (let index = 0; index < category.length; index++) {
      const element = category[index]; 
    
      if (myLang == "en") {
        protoData= [...protoData,{...element,title:element.name_en}]
      }
      else if (myLang == "fr") {
        protoData= [...protoData,{...element,title:element.name_fr}]
      }
      else if (myLang == "ar") {
        protoData= [...protoData,{...element,title:element.name_ar}]
      }
    }
    setData(protoData)
 
  }, [])
  
  return (
    <>
    
  <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="navbar-brand d-flex justify-content-between align-content-center align-items-center"><i  className="nav-link text-light bi bi-list"></i> <h2 className
    ="fs-4">Categories</h2> </Nav>
    <Nav className="me-auto">
    {data && data.filter(i=> i.top_in_nav==true).map(i=><Link href={"/category/"+i.slug } ><a className="nav-link ">{i.title}</a></Link>)}
    </Nav>
    </Container>
  </Navbar>



    
  <Navbar bg="primary" variant="dark">
    <Container>
    
    <Nav className="me-auto d-flex flex-column">
    {data && data.filter(i=> i.top_in_nav==true).map(i=><Link href={"/category/"+i.slug } ><a className="nav-link ">{i.title}</a></Link>)}
    </Nav>
    </Container>
  </Navbar>
 

    </>
  );
};

export default CategoryBar;
