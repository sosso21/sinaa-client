 import { Lang } from "../plugins/lang.js";


const PreFooter =( )=>{ 
 
    const textLang = Lang().preFooter;
    
    return(
        <>

        <ul className="mx-auto my-2 d-flex justify-content-around align-content-around flex-wrap">
            {[...textLang,...textLang,...textLang ].map((i,k)=><li key={k} style={{maxWidth:"10rem"}} className="text-center list-unstyled mx-auto px-4 d-flex flex-column"> 
            <i style={{fontSize:"5rem"}} className={`my-1 bi ${i.className}`}> </i>
            <strong className="fs-1">{i.strong}</strong>
            <p className="text-wrap ">{i.text} </p>

            </li>  ) }


        </ul>
        
        </>

    )
}

export default PreFooter