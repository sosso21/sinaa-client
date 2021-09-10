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
    arrows: true,
  };

  return (
    <main className={StyleSlider.FlexParent} >
 
{SliderItems.filter((i,index)=> i.type=="pub").map((item,key)=>
    key==0 &&  <aside style={{backgroundImage: `url("${item.image_background}")`}}  className={StyleSlider.LateralAds} key={key}>
        
          {item.html && <Markup content={item.html} />}
         
      </aside>)}

      <div className={StyleSlider.SliderParent } >
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
    </div>
    
{SliderItems.filter((i,index)=> i.type=="pub").map((item,key)=>
    key == 1  && <aside style={{backgroundImage: `url("${item.image_background}")`}}  className={StyleSlider.LateralAds} key={key}>
        
          {item.html && <Markup content={item.html} />}
         
      </aside>)}
{SliderItems.filter((i,index)=> i.type=="pub").map((item,key)=>
     key>1 && <aside style={{backgroundImage: `url("${item.image_background}")`}}  className={StyleSlider.bottimAds} key={key+2} >

          {item.html && <Markup content={item.html} />}
         
      </aside> )}
    
    </main>
  );
};


export default Slider;

 