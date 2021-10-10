import {
    useState,
    useEffect,
    createContext,
    useContext
  } from "react";
   
import { formatDistance } from 'date-fns'
import { en, arDZ, fr } from 'date-fns/locale'

 
  export const Time =  (relativeDate) => {
    
     
   const [language, setLanguage] = useState(en);

  useEffect(() => {
    switch (localStorage.getItem("lang")) {
      case "en":
        return setLanguage(en) ;
        case "fr":
          return setLanguage(fr) ;
          case "ar":
            return setLanguage(arDZ) ;
    
      default:
        return setLanguage(en) ;
    }
  }, [])
 
  
  return useContext(createContext(formatDistance(
    new Date(2016, 7, 1),
    new Date(2015, 0, 1),
    {locale: language} // Pass the locale as an option
  )))
  
  }


   