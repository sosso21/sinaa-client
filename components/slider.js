import { Markup } from "interweave";
 
import StyleSlider from "../styles/Slider.module.css";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
 

const Slider = ({ sliderData}) => {
  

  const getData = (lang = "en") => {
    let arr = [];

    sliderData.map((i) => {
       if (lang == "fr") {
        arr = [
          ...arr,
          {
            image_background: i.image_background,
            type:i.type,
            html: i.html_integration.fr,
          },
        ];
      } else if (lang == "ar") {
        arr = [
          ...arr,
          {
            image_background: i.image_background,
            type:i.type,
            html: i.html_integration.ar,
          },
        ];
      } else {
        arr = [
          ...arr,
          {
            image_background: i.image_background,
            type:i.type,
            html: i.html_integration.en,
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
  }, [sliderData]);

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
      {SliderItems.filter(i=> i.type=="slider").map((item, index) =>  <section
          key={index}
          style={{backgroundImage: `url("${item.image_background}")`}}
          className={StyleSlider.slideItem}
        >
          {item.html && <Markup content={item.html} />}
        
        </section>
       )}
    </Slide>
   
  );
};


export default Slider;

/*

    <aside className={StyleSlider.asideVertical} >

</aside>
*/