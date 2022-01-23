
import {useState} from "react"
import Fade from "react-reveal/fade";
import { Lang } from "../../plugins/lang.js";

  const PhoneNEmailSheet = ({ show = false, type = "tel:", info }) => {
    const [see, setSee] = useState(show);
    
    const textLang = Lang().sheet.phoneNemail;
    return (
      <> 
        <span className="d-block fw-bolder  my-4 mx-auto">
          {type == "tel:" ?textLang.phone :textLang.email } : 
        </span>
        {see == false ? (
          <i
            onClick={() => setSee(true)}
            className="bi bi-eye-slash btn btn-link mx-1"
          ></i>
        ) : (
          <Fade>
            <ul className="list-group my-4 mx-auto">
              {info.map((i, key) => (
                <li key={key} className="list-group-item bg-transparent">
                  <a
                    className="mx-1"
                    target="_blank"
                    href={
                      type == "tel:" ? type + "+213" + i.phone : type + i.email
                    }
                  >
                    {type == "tel:" ? "+213" + i.phone : i.email}
                  </a>
                </li>
              ))}
            </ul>
          </Fade>
        )}
      </>
    );
  };
  export default PhoneNEmailSheet