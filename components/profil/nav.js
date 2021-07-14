import Link from "next/link";




 const Nav=({Navigation,actualRout}) =>{
   

    return (
        <ul class="nav nav-pills nav-fill">
       
        {Navigation.map(i=>  <li className="nav-item">
        <Link href={`/profil/${i.slug}`}>
          <a className={`nav-link ${(actualRout==i) && "active" }`} >{i.name}</a>
                </Link>
        </li>)}
       
      </ul>
    )
}

export default Nav
 