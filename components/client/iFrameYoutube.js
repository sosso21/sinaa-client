export const IFrameYoutube=({className="", src=""})=>{
 
 
const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

const  match = src.match(regExp);
const embed =  (match && match[1].length == 11) ? match[1]: "";
 
 
return <iframe
className={className}
src={`https://www.youtube.com/embed/${embed}`}
 
/>}