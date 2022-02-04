import { Lang, TranslateCategory } from "../../plugins/lang";
 
export const GetInputHtml = ({
    id,
    text,
    type = "text",onChange=()=>{},
    value="",
    placeholder  ,
    required = true,
    labelClassName ="mx-2 my-4", InputClassname = "mx-auto form-control form-control-lg"
  }) => {
  
const textLang = Lang().client_space.post.input.generic;
 

    return ( <label className={labelClassName} htmlFor={id} >{text}
  
      <input
        type={type}
        onChange={e=>onChange(e.target.value) }
        value={value}
        id={id}
        className={InputClassname}
        placeholder={placeholder || textLang.pOinput}
        required={required}
      />  </label>);
  };

  export  const GetSelectHtml = ({ id, text, onChange, value, options,translate=true, labelClassName="mx-2 my-4", SelectClassName = "mx-auto form-select form-select-lg" }) => {
    const opt = translate ? TranslateCategory(options) : options
const textLang = Lang().client_space.post.input.generic;
  
    return <label className={labelClassName} htmlFor={id}>
      {text}
      <select
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={SelectClassName}
        value={value}
      >
        <option value="" key="0001"> {textLang.POSelect} </option>
        { [...opt].map((i, key) => (
          <option key={key} value={i.slug}>
            {i.title}
          </option>
        ))}
      </select>
    </label>;
  };