import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Fade from "react-reveal/fade";
import Flip from 'react-reveal/Flip';
import StyleNav from "../styles/CategoryBar.module.css";
import formularSchema from "../store/formularSchema";

const CategoryBar = ({ category }) => {
  const [data, setData] = useState("");
  const [TopNav, setTopNav] = useState("");
  const [Show, setShow] = useState(false);
  const [underCategorie, setUnderCategorie] = useState("");

  const translateArr = (Arr) => {
    const myLang = localStorage.getItem("lang") || "en";
    console.log("myLang", myLang);
    let protoData = [];

    for (let index = 0; index < Arr.length; index++) {
      const element = Arr[index];

      if (myLang == "en") {
        protoData = [...protoData, { ...element, title: element.name_en }];
      } else if (myLang == "fr") {
        protoData = [...protoData, { ...element, title: element.name_fr }];
      } else if (myLang == "ar") {
        protoData = [...protoData, { ...element, title: element.name_ar }];
      }
    }
    return protoData;
  };

  useEffect(() => {
    setData(translateArr(category));

    setTopNav(translateArr(formularSchema));
  }, []);

  return (
    <>
      <Navbar className="py-0 px-0" bg="primary" variant="dark">
        <Container className="w-100  ms-3 w-100 p-0">
          <Nav
            onClick={() => setShow(!Show)}
            className={StyleNav.ResponsiveNav}
          >
            <i className="nav-link text-light bi bi-list"></i>
            <h2 className="text-light fs-4">Categories</h2>
          </Nav>

          <Nav className={StyleNav.ResponsiveNav + " " + StyleNav.ScrollBar}>
            {TopNav &&
              TopNav.map((i, key) => (
                <i className="h-100 btn   btn-primary">
                  {i.title.toUpperCase()}
                </i>
              ))}
          </Nav>
        </Container>
      </Navbar>
<div className="d-flex bg-primary">
      <Fade when={Show} left>
        {Show && (
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto d-flex flex-column">
                {data &&
                  data.map((i, key) => (
                    <i key={key} className="btn btn-sm btn-primary d-flex justify-content-between">
                      <p>{i.title}</p>
                      <i className="bi bi-chevron-compact-right"></i>
                    </i>
                  ))}
              </Nav>
            </Container>
          </Navbar>
        )}
      </Fade>

      
      <Flip when={Show} left>
        {Show && (
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto d-flex flex-column">
                {data &&
                  data.map((i, key) => (
                    <i key={key} className="btn btn-sm btn-primary d-flex justify-content-between">
                      <p>{i.title}</p>
                      <i className="bi bi-chevron-compact-right"></i>
                    </i>
                  ))}
              </Nav>
            </Container>
          </Navbar>
        )}
      </Flip>
      </div>
    </>
  );
};

export default CategoryBar;