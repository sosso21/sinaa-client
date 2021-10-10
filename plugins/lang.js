import {
  useState,
  useEffect,
  createContext,
  useContext
} from "react";

import {en} from "../store/en.js";
import {fr} from "../store/fr.js";
import {ar} from "../store/ar.js";

import { formatDistance } from 'date-fns'
import { enGB, arDZ,frCH} from 'date-fns/locale'

  
  export const Lang = () => {
   
  const [language, setLanguage] = useState(en)

  useEffect(() => {

    const languageCode = localStorage.getItem("lang") || "en"
    document.documentElement.setAttribute("lang", languageCode);

    switch (languageCode) {
      case "en":
        return setLanguage(en) ;
        case "fr":
          return setLanguage(fr) ;
          case "ar":
            return setLanguage(ar) ;
    
      default:
        return setLanguage(en) ;
    }
  }, [])

  
  return useContext(createContext(language))
  }


  
  export const TranslateCategory = (Arr) => {
    const [Category, setCategory] = useState("")

    useEffect(() => {
      
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
    setCategory(protoData)
  }, [])
    return useContext(createContext(Category))
  
  };

  

 
  export const TranslateProduct = (protoProduct) => {
    
   const [product, setProduct] =useState(protoProduct);
const time =  new Date();
  useEffect(() => {

    let language = enGB;
    let prefix = "";
    let sufix = " ago";
    let array=[];
    if (localStorage.getItem("lang") == "fr"){
      language = frCH;
      prefix = "depuis ";
      sufix = ""
    }else if (localStorage.getItem("lang") == "ar"){
      language = arDZ ;
      prefix = "منذ ";
      sufix = ""
    }

    for (let index = 0; index < protoProduct.length; index++) {
      const element = protoProduct[index];

      array=[...array,{...element,
      createdAt_text : prefix + formatDistance(
        time,
        new Date(element.createdAt),
      {locale: language}
    ) + sufix }]
      
    }

    setProduct(array)
  }, [protoProduct])
 
    
  return useContext(createContext(product))
  
  }