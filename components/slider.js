import { Markup } from "interweave";

import Image from "next/image";
import StyleSlider from "../styles/Slider.module.css";
import { useState, useEffect, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";

const Slider = ({ sliderData }) => {
  const sliderRef = useRef(null);

  const getData = (lang = "en") => {
    let arr = [];

    sliderData.map((i) => {
      if (lang == "fr") {
        arr = [
          ...arr,
          {
            image_background: i.image_background,
            type: i.type,
            html: !!i.html ? i.html.fr : "",
          },
        ];
      } else if (lang == "ar") {
        arr = [
          ...arr,
          {
            image_background: i.image_background,
            type: i.type,
            html: !!i.html ? i.html.ar : "",
          },
        ];
      } else {
        arr = [
          ...arr,
          {
            image_background: i.image_background,
            type: i.type,
            html: !!i.html ? i.html.en : "",
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
    scale: 0.4,
    arrows: true,
  };

  return (
    <>
      {!!SliderItems.length && (
        <main className={StyleSlider.FlexParent}>
          {!!(SliderItems.filter((i, index) => i.type == "pub").length >= 1) &&
            SliderItems.filter((i, index) => i.type == "pub").map(
              (item, key) =>
                key == 0 && (
                  <aside
                    style={{
                      backgroundImage: `url("${item.image_background}")`,
                    }}
                    className={StyleSlider.LateralAds}
                    key={key}
                  >
                    {item.html && <Markup content={item.html} />}
                  </aside>
                )
            )}

          <div className={StyleSlider.SliderParent}>
            {!!SliderItems.filter((i) => i.type == "slider").length && (
              <>
                <Slide ref={sliderRef} easing="ease" {...properties}>
                  {SliderItems.filter((i) => i.type == "slider").map(
                    (item, index) => (
                      <section
                        key={index}
                        style={{
                          backgroundImage: `url("${item.image_background}")`,
                        }}
                        className={StyleSlider.slideItem}
                      >
                        {item.html && <Markup content={item.html} />}
                      </section>
                    )
                  )}
                </Slide>
                
<Slide
                  easing="ease"
                  {...properties}
                  arrows={false}
                  slidesToShow={3}
                >
                  {SliderItems.filter((i) => i.type == "slider").map(
                    (item, index) => (
                      <Image
                        loader={({ src }) => src}
                        onClick={() => sliderRef.current.goTo(index)}
                        className={StyleSlider.imgSmall}
                        src={item.image_background}
                        alt={"slider Indicator number" + item.id}
                        width={100}
                        height={100}
                        objectFit="cover"
                        layout="fixed"
                      />
                    )
                  )}
                </Slide>
              </>
            )}
          </div>

          {!!(SliderItems.filter((i, index) => i.type == "pub").length >= 2) &&
            SliderItems.filter((i, index) => i.type == "pub").map(
              (item, key) =>
                key == 1 && (
                  <aside
                    style={{
                      backgroundImage: `url("${item.image_background}")`,
                    }}
                    className={StyleSlider.LateralAds}
                    key={key}
                  >
                    {item.html && <Markup content={item.html} />}
                  </aside>
                )
            )}
          {!!(SliderItems.filter((i, index) => i.type == "pub").length >= 3) &&
            SliderItems.filter((i, index) => i.type == "pub").map(
              (item, key) =>
                key > 1 && (
                  <aside
                    style={{
                      backgroundImage: `url("${item.image_background}")`,
                    }}
                    className={StyleSlider.bottimAds}
                    key={key + 2}
                  >
                    {item.html && <Markup content={item.html} />}
                  </aside>
                )
            )}
        </main>
      )}
    </>
  );
};

export default Slider;
