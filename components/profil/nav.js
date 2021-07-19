import Link from "next/link";


 const Nav=({Navigation,actualRout}) =>{
   
  
    return (
        <ul className="bg-dark text-light nav nav-pills nav-fill">
       
        {Navigation.map((i,key)=>  <li key={key} className="nav-item">
        <Link href={`/profil/${i.slug}`}>
          <a className={`nav-link ${(actualRout==i) && "active" }`} >{i.name}</a>
                </Link>
        </li>)}
       
      </ul>
    )
}

export default Nav
 /*



 */