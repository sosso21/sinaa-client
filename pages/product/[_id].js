import { useState, useEffect } from "react";
import Header from "../../components/header.js";
import CategoryBar from "../../components/categoryBar.js";
import Slider from "../../components/slider.js";
import HeadComponents from "../../components/HeadComponents";
import ItemArticle from "../../components/itemArticle.jsx";
import Head from "next/head";
import Fade from "react-reveal/fade";
import Image from "next/image";


import ReactImageMagnify from 'react-image-magnify';


import styleSheet from "../../styles/Sheet.module.css";

const Sheet = ({ category, product, post }) => {

  const [Img, setImg] = useState(post.images[0].link)

  const LongText = ({ text }) => {
    const [textLength, setTextLength] = useState(
      text.length < 512 ? text.length : 512
    );
    const [FilnalText, setFilnalText] = useState("");

    useEffect(() => {
      let string = "";
      for (let index = 0; index < textLength; index++) {
        const element = text[index];
        string += element;
      }
      string.length != text.length && (string += "...");
      setFilnalText(string);
    }, [textLength]);

    return (
      <p>
        {FilnalText}
        {text.length > 512 &&
          (textLength != text.length ? (
            <i
              onClick={() => setTextLength(text.length)}
              className="btn btn-link mx-1"
            >
              Voir parentlus<i className="bi bi-arrow-down"></i>
            </i>
          ) : (
            <i onClick={() => setTextLength(512)} className="btn btn-link mx-1">
              Voir moin<i className="bi bi-arrow-up"></i>
            </i>
          ))}
      </p>
    );
  };

  const getDate = (time) => {
    const d = new Date(time);
    return +d.getFullYear() + "/" + (+d.getMonth() + 1) + "/" + d.getDate();
  };
  const GetInfo = ({ type = "tel:", info }) => {
    const [see, setSee] = useState(false);
    return <> <span className="d-block fw-bolder  my-4 mx-auto">{(type=="tel:")?"Téléphone(s) :":"E-mail(s) :" } </span>{
     see == false ? (
      <i
        onClick={() => setSee(true)}
        className="bi bi-eye-slash btn btn-link mx-1"
      ></i>
    ) : (
      <Fade>
        
              <ul className="list-group my-4 mx-auto">
                {info.map((i, key) => (
                  <li key={key} className="list-group-item bg-transparent">
               <a className="mx-1" target="_blank" href={ (type=="tel:")?(type+"+213"+i.phone):(type+i.email) }>{(type=="tel:")?("+213"+i.phone):i.email }</a>
                  </li>
                ))}
              </ul>
       
      </Fade>
    ) }</>;
  };

  const GetActivity = ()=>{
    
    const diff =((new Date().getTime())- ( new Date(post.lastConnect).getTime()))/3600 /1000
    if (diff<=24) {
      return <i  className="text-success mx-1"><i className="bi bi-award-fill mx-1"></i> Très Actif </i>
    }else  if (diff<=168) {
      return <i  className="text-primary mx-1"><i className="bi bi-lightning-fill mx-1"></i> Actif </i>
    }else {
      return <i  className="text-secondary mx-1"><i className="bi bi-cloud-lightning-rain-fill mx-1"></i> Peu actif </i>
    }

  }
 
  return (
    <>
      <HeadComponents title="Inscription" />
      <main className="min-vh-100 bg-white">
        <Header />
        <CategoryBar category={category} />

        <section className={styleSheet.SectionSheet}>
          <div className={styleSheet.imagesSliderNSmall}>
          <Fade  >
          <ReactImageMagnify  {...{
            enlargedImageClassName:"bg-secondary",
            enlargedImageContainerClassName:"bg-secondary",
            imageClassName:"bg-secondary",
            smallImage: {
        alt:  post.title ,
        isFluidWidth: true,
        src: Img
    },
    largeImage: {
        src: Img,
        width: 800,
        height: 800
    }
}} />
</Fade>
 

            <ul className={styleSheet.listImage}>
              {post.images.map(
                (i, key) =>
                  i.link && (
                    <li key={key}>
                      <Fade>
                        <Image
                        onClick={()=>setImg(i.link) }
                          loader={({ src }) => src}
                          src={i.link}
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
              <strong className="d-block  text-warning fs-5 my-4 mx-auto">
                Prix:
                <i className="mx-4 fw-lighter fs-3">
                  {post.price} <sup>DZD </sup>
                </i>
              </strong>


              <strong className="d-block  my-4 mx-auto">
                Publiée le : 
                <time datetime={getDate(post.createdAt)}>
                {getDate(post.createdAt)}
              </time>
              </strong>


              <span className="d-block  fw-bolder my-4 mx-auto">Disponible à: </span>
              <ul className="list-group my-4 mx-auto">
                {post.adress.map((i, key) => (
                  <li key={key} className="list-group-item bg-transparent">
                    <address>
                      {i.wilaya}- {i.commune}
                    </address>
                  </li>
                ))}
              </ul>
              
              <GetInfo type="email:" info={post.email} />
               <GetInfo type="email:" info={post.email}  />

              <span className="d-block fw-bolder my-4 mx-auto">Description:</span>
              <LongText text={post.description} />
            </div>
          </article>
          </section>

        <aside className={styleSheet.asideElement} >
         <i className="pt-4 mt-4">
          <Image
          className="rounded-1"
            loader={({ src }) => src}
            src={post.author.profil_image_link || "/profilDefault.png"}
            alt={"picture profil " + post.author.username}
            width={120}
            height={120}
            objectFit="cover"
            layout="fixed"
          />  
          </i>
          <article className=" w-75 d-flex justify-content-around align-content-start align-items-start flex-wrap">
            <span className="mx-4">
            <strong className="fst-italic fs-1">{post.author.username}</strong>
 
            <p>
              <span className="mx-1"> Remarque : </span>
              <GetActivity />
            </p>
            
            <p>
              <span className="mx-1"> Membre depuis : </span>
              <time datetime={getDate(post.author.createdAt)}>
                {getDate(post.author.createdAt)}
              </time>
            </p>

            <p>
              Adresse du vendeur: 
              <span className="mx-1">
                 
                {(post.author.wilaya || "/") +
                  " - " +
                  (post.author.commune || "/")} 
              </span>
            </p>
            </span>
            <span className="mx-4">
            {post.author.phone  && <GetInfo type="tel:" info={[{phone:  post.author.phone}]} />
             } <GetInfo type="email:" info={[{email:post.author.email}]} />
           
            <div className="d-flex justify-content-start"  >
            {post.author.facebook && <a className="bi bi-facebook fs-1 text-primary mx-4" target="_blank" href={post.author.facebook}> </a>}
            {post.author.instagram && <a className="bi bi-instagram fs-1 text-danger mx-4" target="_blank" href={post.author.instagram}> </a>}
            {post.author.twitter && <a className="bi bi-twitter fs-1 text-info mx-4" target="_blank" href={post.author.twitter}> </a>}


            </div>
            </span>
          </article>
        </aside>
      </main>
    </>
  );
};
export default Sheet;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.URLSERVER + "/api/homepage");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.product.map((post) => ({
    params: { _id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.URLSERVER}/products/${params._id}`);
  const post = await res.json(); 

  const res2 = await fetch(process.env.URLSERVER + "/api/homepage");
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
      product: HomePage.product,
      post: post,
    },
    revalidate: 60,
  };
}
