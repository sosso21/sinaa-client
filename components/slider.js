/// import { Markup } from "interweave";
 
import StyleSlider from "../styles/Slider.module.css";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";

const alldata = [
  {
    img:"images%2F1625529658233_amin-khorsand-tAnzPbVXjQo-unsplash.jpg?alt=media&token=e29775d4-0b9f-44d0-a104-36b6598e6711",
    en: "<h1 class='m-4'>first slide</h1>",
    fr: "<h1 class='m-4'>premier slider</h1> ",
    ar: "<h1 class='m-4'>المنزلق الأول</h1>",
  },
  {
    img:"images%2F1625529671097_carlos-aranda-QMjCzOGeglA-unsplash.jpg?alt=media&token=df350829-9325-4954-9ecd-7ffd87b19974",
    en: "<h1 class='m-4'>second slid</h1>",
    fr: "<h1 class='m-4'>deuxieme slider</h1>",
    ar: "<h1 class='m-4'>المنزلق الثاني</h1>",
  },
  {
    img: "images%2F1625529686840_remy-gieling-KP6XQIEjjPA-unsplash.jpg?alt=media&token=36bd9133-df57-47c5-9be3-763683190a47",
    en: "<h1 class='m-4'>third slide</h1>",
    fr: "<h1 class='m-4'>troisième slider</h1> ",
    ar: "<h1 class='m-4'>المنزلق الثالث</h1>",
  },
  {
    img: "images%2F1625529722330_christopher-burns-Wiu3w-99tNg-unsplash.jpg?alt=media&token=31b811ab-d005-4983-9a8e-05a9a9d41511",
    en: "<h1 class='m-4'>forth slid</h1>",
    fr: "<h1 class='m-4'>quatrième slider</h1>",
    ar: "<h1 class='m-4'>المنزلق  الرابع</h1>",
  },
  {
    img:"images%2F1625529758107_remy-gieling-TYeeT_YDC6o-unsplash.jpg?alt=media&token=140baa4a-c7e9-48ea-9091-b91b07c5bfa8",
    en: "<h1 class='m-4'>fiveth slid</h1>",
    fr: "<h1 class='m-4'>cinquième slider</h1>",
    ar: "<h1 class='m-4'>المنزلق الخامس</h1>",
  },
  {
    img: "images%2F1625529805806_rob-lambert-9Q_pLLP_jmA-unsplash.jpg?alt=media&token=ff1cfdd6-5601-41cd-9422-9fb64d5c1a0",
    en: "<h1 class='m-4'>sixth slide </hh1>",
    fr: "<h1 class='m-4'>sixième slider </hh1>",
    ar: "<h1 class='m-4'>المنزلق السادس </hh1>",
  },
];

const Slider = ({ data = alldata }) => {
  

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
  }, [data]);

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
        
        </section>
      ))}
    </Slide>
  );
};


export default Slider;




//  {item.html && <Markup content={item.html} />}