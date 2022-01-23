import { useState,useEffect } from "react"; 
 
import { Lang } from "../../plugins/lang.js";




const LongText = ({ text }) => {

    const textLang = Lang().sheet.seeMore;
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
              {textLang}<i className="bi bi-arrow-down"></i>
            </i>
          ) : (
            <i onClick={() => setTextLength(512)} className="btn btn-link mx-1">
              Voir moin<i className="bi bi-arrow-up"></i>
            </i>
          ))}
      </p>
    );
  };

  export default LongText