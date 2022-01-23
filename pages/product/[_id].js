import { useState, useEffect } from "react";
import Header from "../../components/header.js";
import CategoryBar from "../../components/categoryBar.js";
import Slider from "../../components/slider.js";
import HeadComponents from "../../components/HeadComponents";
import Head from "next/head";
import Fade from "react-reveal/fade";
import Image from "next/image";
import LongText from "../../components/sheet/LongText";
import getDate from "../../plugins/getDate";
import GetSupInfo from "../../components/sheet/supInfo";
import PhoneNEmailSheet from "../../components/sheet/phoneNEmailSheet"
import GetActivity from "../../components/sheet/GetActivity";
import Footer from "../../components/footer"

import { Lang } from "../../plugins/lang.js";

import ReactImageMagnify from "react-image-magnify";

import styleSheet from "../../styles/Sheet.module.css";

const Sheet = ({ category, products, post }) => {
  const [Img, setImg] = useState(post.images[0].image);
  
  const textLang = Lang().sheet;

  
  
  return (
    <>
      <HeadComponents title="Inscription" />
      <main className="min-vh-100 bg-white">
        <Header />
        <CategoryBar category={category} />

        <section className={styleSheet.SectionSheet}>
          <div className={styleSheet.imagesSliderNSmall}>
            <Fade>
              <ReactImageMagnify
                {...{
                  enlargedImageClassName: "bg-secondary",
                  enlargedImageContainerClassName: "bg-secondary",
                  imageClassName: "bg-secondary",
                  smallImage: {
                    alt: post.title,
                    isFluidWidth: true,
                    src: Img,
                  },
                  largeImage: {
                    src: Img,
                    width: 800,
                    height: 800,
                  },
                }}
              />
            </Fade>

            <ul className={styleSheet.listImage}>
              {post.images.map(
                (i, key) =>
                  i.image && (
                    <li key={key}>
                      <Fade>
                        <Image
                          onClick={() => setImg(i.image)}
                          loader={({ src }) => src}
                          src={i.image}
                          alt={post.title + " image " + key}
                          width={100}
                          height={100}
                          objectFit="cover"
                          layout="fixed"
                        />
                      </Fade>
                    </li>
                  )
              )}
            </ul>
          </div>
          <article className={styleSheet.articleSheet}>
            <h1 className="my-4 mx-auto fw-bolder fs-3 w-100">{post.title} </h1>
            <div>
              {post.work_proposal != "request" && (
                <strong className="d-block  text-warning fs-5 my-4 mx-auto">
                  {post.category.format_profuct == "Job" ? textLang.salary :  textLang.price }:
                  <i className="mx-4 fw-lighter fs-3">
                    {post.price} <sup>DZD </sup>
                  </i>
                </strong>
              )}

              <strong className="d-block  my-4 mx-auto">
                {textLang.createdAt}:
                <time datetime={getDate(post.createdAt)}>
                  {getDate(post.createdAt)}
                </time>
              </strong>

              <span className="d-block  fw-bolder my-4 mx-auto">
                {textLang.adress}: 
              </span>
              <ul className="list-group my-4 mx-auto">
                {post.adress.map((i, key) => (
                  <li key={key} className="list-group-item bg-transparent">
                    <address>
                      {i.wilaya}- {i.commune}
                    </address>
                  </li>
                ))}
              </ul>

              <PhoneNEmailSheet type="email:" info={post.emails} />
              <PhoneNEmailSheet type="tel:" info={post.phones} />
 

              <span className="d-block fw-bolder my-4 mx-auto">
                {textLang.description}:
              </span>
              <LongText text={post.description} />
            </div>
          </article>
        </section>
        <section className="w-100 my-4 mx-auto px-2">
          <GetSupInfo post={post} />
        </section>

        <aside className={styleSheet.asideElement}>
          <i className={styleSheet.imgProfilParent}>
            <Image
              className={styleSheet.imgProfil}
              loader={({ src }) => src}
              src={post.author.profil_image_link || "/profilDefault.png"}
              alt={"picture profil " + post.author.username}
              width={120}
              height={120}
              objectFit="cover"
              layout="fixed"
            />
            <i
              className={
                post.author.status == "confirmed" &&
                "bi bi-check-circle-fill text-success " + styleSheet.iconChecked
              }
            ></i>
          </i>
          <article className=" w-75 d-flex justify-content-around align-content-start align-items-start flex-wrap">
            <span className="mx-4">
              <strong className="fst-italic fs-1">
                {post.author.username}
              </strong>

              <p>
                <span className="mx-1"> {textLang.seller.activity} : </span>
                <GetActivity lastConnect={post.author.lastConnect} />
              </p>

              <p>
                <span className="mx-1"> {textLang.seller.createdAt}: </span>
                <time datetime={getDate(post.author.createdAt)}>
                  {getDate(post.author.createdAt)}
                </time>
              </p>

              <p>
                {textLang.seller.adress}:
                <span className="mx-1">
                  {(post.author.wilaya || "/") +
                    " - " +
                    (post.author.commune || "/")}
                </span>
              </p>
            </span>
            <span className="mx-4">
              {post.author.phones && (
                <PhoneNEmailSheet type="tel:" info={post.author.phones} />
              )} 
              <PhoneNEmailSheet
                show={true}
                type="email:"
                info={[{ email: post.author.email }]}
              />
              <div className="d-flex justify-content-start">
                {post.author.facebook && (
                  <a
                    className="bi bi-facebook fs-1 text-primary mx-4"
                    target="_blank"
                    href={post.author.facebook}
                  >
                    {" "}
                  </a>
                )}
                {post.author.instagram && (
                  <a
                    className="bi bi-instagram fs-1 text-danger mx-4"
                    target="_blank"
                    href={post.author.instagram}
                  >
                    {" "}
                  </a>
                )}
                {post.author.twitter && (
                  <a
                    className="bi bi-twitter fs-1 text-info mx-4"
                    target="_blank"
                    href={post.author.twitter}
                  >
                    {" "}
                  </a>
                )}
              </div>
            </span>
          </article>
        </aside>
      </main>
      <Footer/>
    </>
  );
};
export default Sheet;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.URLSERVER + "/api/product/findId");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = [...posts].map((post) => ({
    params: { _id: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `${process.env.URLSERVER}/api/product/findOne/${params._id}`
  );
  const post = await res.json();

  const res2 = await fetch(process.env.URLSERVER + "/api/porduct/findhomepage");
  const HomePage = await res2.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Pass post data to the page via props
  return {
    props: {
      category: HomePage.category,
      products: [],
      post: post,
    },
    revalidate: 60,
  };
}
