import { useState } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Fade from "react-reveal/fade";
import Slide from "react-reveal/Slide";
import StyleNav from "../styles/CategoryBar.module.css";
import { schema } from "../store/formularSchema";
import { Lang, TranslateCategory } from "../plugins/lang.js";
import { ChildForNavBar, giveMeProducttChild } from "../plugins/childCategory";
import positiveSpace from "react-image-magnify/dist/lens/positive-space";

const CategoryBar = ({ category }) => {
  const textLang = Lang().category;

  const _data = TranslateCategory(category);
  const [data, setData] = useState(_data);
  const TopNav = TranslateCategory(schema);

  const [Show, setShow] = useState(false);
  const [underCategorie, setUnderCategorie] = useState("");

  const [actual_category, setActual_category] = useState("");
  const [_formular, set_formular] = useState("");
  const [postion, setPostion] = useState(0);

  const setMyCategoryParent = (slug, key) => {
    setPostion(3 * key);
    setActual_category(slug == actual_category ? "" : slug);
  };

  const setMyFormular = (slug) => {
    setActual_category("")
    const isAlready = !!(_formular == slug);
    set_formular(!!isAlready ? "" : slug);
    if (!isAlready) {
      setShow(true);
      setData(_data.filter((i) => i.format_profuct == slug));
    } else {
      setData(_data);
    }
  };

  return (
    <>
      <Navbar className="py-0 px-0" bg="primary" variant="dark">
        <Container className="w-100  ms-3 w-100 p-0">
          <Nav className={StyleNav.ResponsiveNav}>
            <i
              onClick={() => {
                setData(_data);
                setShow(!Show);
              }}
              className="btn nav-link text-light bi bi-list"
            ></i>
            <h2 className="text-light fs-4">{textLang.title}</h2>
          </Nav>

          <Nav className={StyleNav.ResponsiveNav + " " + StyleNav.ScrollBar}>
            {TopNav &&
              TopNav.map((i, key) => (
                <i
                  key={key}
                  onClick={() => setMyFormular(i.slug)}
                  className={`h-100 btn btn-primary ${
                    _formular == i.slug && "active"
                  }`}
                >
                  {i.title.toUpperCase()}
                </i>
              ))}
          </Nav>
        </Container>
      </Navbar>
      
      <div className={StyleNav.absoluteCategoryBar }>
        <Fade when={Show} left>
          {Show && (
            <Navbar bg="primary" variant="dark">
              <Container>
                <Nav className="me-auto d-flex flex-column">
                  {data &&
                    [...data]
                      .filter(
                        (ii) =>
                          [...(actual_category.parent_category_list || [""])]
                            .length ==
                          [...(ii.parent_category_list || [])].length + 1
                      )
                      .map((i, key) => (
                        <i
                          key={key}
                          onClick={() => setMyCategoryParent(i.slug, key)}
                          className={`btn text-nowrap btn-sm btn-primary d-flex justify-content-between ${
                            actual_category == i.slug && "active"
                          }`}
                        >
                          <p>{i.title}</p>
                          {actual_category == i.slug && (
                            <i className="bi bi-chevron-compact-right"></i>
                          )}
                        </i>
                      ))}
                </Nav>
              </Container>
            </Navbar>
          )}
        </Fade>

        <Slide
          when={
            Show &&
            !!actual_category &&
            !![
              ...ChildForNavBar({
                all: data,
                _actual: actual_category,
                _formular: _formular,
              }),
            ].length
          }
          left
        >
          {Show &&
            !!actual_category &&
            !![
              ...ChildForNavBar({
                all: data,
                _actual: actual_category,
                _formular: _formular,
              }),
            ].length && (
              <Navbar
                style={{ transform: `translateY(${postion}rem)` }}
                bg="primary"
                variant="dark"
              >
                <Container>
                  <Nav className="d-flex flex-column">
                    <h3 className="fs-5 text-light fw-lighter text-right">{textLang.underCategory}</h3>
                    {[
                      ...ChildForNavBar({
                        all: data,
                        _actual: actual_category,
                        _formular: _formular,
                      }),
                    ].map((i, key) => (
                      <i
                        key={key}
                        className="btn btn-sm btn-primary d-flex justify-content-between "
                      >
                        <p>{i.title}</p>
                        <i className="bi bi-chevron-compact-right"></i>
                      </i>
                    ))}
                  </Nav>
                </Container>
              </Navbar>
            )}
        </Slide>

        <Fade
          when={
            Show &&
            !!actual_category &&
            !!giveMeProducttChild(data, actual_category).length
          }
          left
        >
          {!!actual_category &&
            !!giveMeProducttChild(data, actual_category).length && (
              <Navbar
                style={{ transform: `translateY(${postion}rem)` }}
                bg="primary"
                variant="dark"
              >
                <Container>
                  <Nav className="d-flex flex-column">
                  <h3 className="fs-5 text-light fw-lighter text-right">{textLang.recent}</h3>
                    {[...giveMeProducttChild(data, actual_category)].map(
                      (i, key) => (
                        <Link href={`/product/${i.id}`}>
                          <a
                            key={key}
                            title={i.title}
                            className="text-left btn btn-sm btn-primary"
                          >
                           <strong>{i.title} </strong>
                          </a>
                        </Link>
                      )
                    )}
                  </Nav>
                </Container>
              </Navbar>
            )}
        </Fade>
      </div>
    </>
  );
};

export default CategoryBar;
