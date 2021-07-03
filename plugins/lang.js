import {
    useState,
    useEffect,
    createContext,
    useContext
  } from "react";
  
  import {en} from "../store/en.js";
  import {fr} from "../store/fr.js";
  import {ar} from "../store/ar.js";
  
  
  export const Lang = () => {
   
  const [language, setLanguage] = useState(en)

  useEffect(() => {

    switch (localStorage.getItem("lang")) {
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
