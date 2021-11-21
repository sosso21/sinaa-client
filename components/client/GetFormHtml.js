import { Lang, TranslateCategory } from "../../plugins/lang.js";


export const GetInputHtml = ({
    id,
    text,
    type = "text",onChange=()=>{},
    value="",
    placeholder = "Saisissez le champ",
    required = true,
    labelClassName ="mx-2 my-4", InputClassname = "mx-auto form-control form-control-lg"
  }) => {
    
    
    return ( <label className={labelClassName} htmlFor={id} >{text}
  
      <input
        type={type}
        onChange={e=>onChange(e.target.value) }
        value={value}
        id={id}
        className={InputClassname}
        placeholder={placeholder}
        required={required}
      />  </label>);
  };

  export  const GetSelectHtml = ({ id, text, onChange, value, options,translate=true, labelClassName="mx-2 my-4", SelectClassName = "mx-auto form-select" }) => {
    const opt = translate ? TranslateCategory(options) : options
    return <label className={labelClassName} htmlFor={id}>

      {text}
      <select
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={SelectClassName}
        value={value}
      >
        <option key="0001">Selectionnez une option</option>
        { [...opt].map((i, key) => (
          <option key={key} value={i.slug}>
            {i.title}
          </option>
        ))}
      </select>
    </label>;
  };