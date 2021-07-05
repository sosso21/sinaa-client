import { useState, useEffect } from "react";
import { Markup } from "interweave";
 
import StyleSlider from "../styles/Slider.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";

const alldata = [
  {
    img: "images%2F1625504962056_image_2021-07-05_180921.png?alt=media&token=cd4a7eb3-7a03-4597-90fd-4773aabc6ba2",
    en: "<h1 class='m-4'>first slide</h1>",
    fr: "<h1 class='m-4'>premier slider</h1> ",
    ar: "<h1 class='m-4'>المنزلق الأول</h1>",
  },
  {
    img: "images%2F1625504992833_image_2021-07-05_180952.png?alt=media&token=24a56326-3dcd-4015-9e63-9389e9f9043b",
    en: "<h1 class='m-4'>second slid</h1>",
    fr: "<h1 class='m-4'>deuxieme slider</h1>",
    ar: "<h1 class='m-4'>المنزلق الثاني</h1>",
  },
  {
    img: "images%2F1625505024151_image_2021-07-05_181023.png?alt=media&token=1c5ce511-d4e5-4b11-b742-d8561f313bb8",
    en: "<h1 class='m-4'>third slide</h1>",
    fr: "<h1 class='m-4'>troisième slider</h1> ",
    ar: "<h1 class='m-4'>المنزلق الثالث</h1>",
  },
  {
    img: "images%2F1625505101969_image_2021-07-05_181141.png?alt=media&token=f20f5086-eda6-4c06-bb10-c3b94dda4e7b",
    en: "<h1 class='m-4'>forth slid</h1>",
    fr: "<h1 class='m-4'>quatrième slider</h1>",
    ar: "<h1 class='m-4'>المنزلق  الرابع</h1>",
  },
  {
    img: "images%2F1625505157444_image_2021-07-05_181237.png?alt=media&token=0636d43f-183a-4e83-91b3-5bce161a275d",
    en: "<h1 class='m-4'>fiveth slid</h1>",
    fr: "<h1 class='m-4'>cinquième slider</h1>",
    ar: "<h1 class='m-4'>المنزلق الخامس</h1>",
  },
  {
    img: "images%2F1625505197892_image_2021-07-05_181317.png?alt=media&token=277a583c-3a49-4e42-b027-a33e5633e6ad",
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
  }, []);

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
