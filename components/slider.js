import { Markup } from "interweave";
import { useRouter } from "next/router";

import StyleSlider from "../styles/Slider.module.css";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";

const alldata = [
  {
    img: "images%2F1625418332073__20170406_010808.JPG?alt=media&token=8b59ce9c-d1dc-47aa-97cf-afa7542bb1ea",
    en: "<h1 class='m-4'>first slide</h1>",
    fr: "<h1 class='m-4'>premier slider</h1> ",
    ar: "<h1 class='m-4'>المنزلق الأول</h1>",
  },
  {
    img: "images%2F1625418341175__20170406_010753.JPG?alt=media&token=7913ee92-d2eb-4003-903e-ee8f7d7722d7",
    en: "<h1 class='m-4'>second slid</h1>",
    fr: "<h1 class='m-4'>deuxieme slider</h1>",
    ar: "<h1 class='m-4'>المنزلق الثاني</h1>",
  },
  {
    img: "images%2F1625418352515__20170406_010829.JPG?alt=media&token=b33aacb2-7e8b-404d-a34a-017211f734ac",
    en: "<h1 class='m-4'>third slide</h1>",
    fr: "<h1 class='m-4'>troisième slider</h1> ",
    ar: "<h1 class='m-4'>المنزلق الثالث</h1>",
  },
  {
    img: "images%2F1625406173091_image_2021-07-04_144253.png?alt=media&token=7e73dd63-64fb-46c8-b891-9f2fb01bfc88",
    en: "<h1 class='m-4'>forth slid</h1>",
    fr: "<h1 class='m-4'>quatrième slider</h1>",
    ar: "<h1 class='m-4'>المنزلق  الرابع</h1>",
  },
  {
    img: "images%2F1625418451453_1e81014d0c1e1e496cb5b7a0fedbed61.jpg?alt=media&token=7463b719-cd88-474a-92ea-1202864a3303",
    en: "<h1 class='m-4'>fiveth slid</h1>",
    fr: "<h1 class='m-4'>cinquième slider</h1>",
    ar: "<h1 class='m-4'>المنزلق الخامس</h1>",
  },
  {
    img: "images%2F1625418475261_3d_Box-wallpaper-9780729.jpg?alt=media&token=051b35fb-482f-4779-88d2-7c00b6a2813d",
    en: "<h1 class='m-4'>sixth slide </hh1>",
    fr: "<h1 class='m-4'>sixième slider </hh1>",
    ar: "<h1 class='m-4'>المنزلق السادس </hh1>",
  },
];

const Slider = ({ data = alldata }) => {
  const router = useRouter();

  const getData = (lang = "en") => {
    let arr = [];

    data.map((i) => {
       
      if (lang == "en") {
        arr = [
          ...arr,
          {
            img: i.img,
            html: i.en,
          },
        ];
      } else if (lang == "fr") {
        arr = [
          ...arr,
          {
            img: i.img,
            html: i.fr,
          },
        ];
      } else if (lang == "ar") {
        arr = [
          ...arr,
          {
            img: i.img,
            html: i.ar,
          },
        ];
      } else {
        arr = [
          ...arr,
          {
            img: i.img,
            html: i.en,
          },
        ];
      }
    });
    return arr;
  };

  const [SliderItems, setSliderItems] = useState(getData());

  useEffect(() => {
    const myLang = localStorage.getItem("lang");
    if (myLang) {
      setSliderItems(getData(myLang));
    }
  }, [router.query]);

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false,
  };

  return (
    <Slide easing="ease" {...properties}>
      {SliderItems.map((item, index) => (
        <section
          key={index}
          style={{backgroundImage: `url("${process.env.HOST_IMG + item.img}")`}}
          className={StyleSlider.slideItem}
        >
          
          {item.html && <Markup content={item.html} />}
        
        </section>
      ))}
    </Slide>
  );
};

export default Slider;
