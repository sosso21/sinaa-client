import {useState, useEffect} from 'react'
import styleProfil from "../../styles/profil.module.css";

const Gneral = () =>{
const [user, setUser] = useState("");

useEffect(() => {
    setUser(JSON.parse(essionStorage.getItem( 'userInfo')))
}, [])

    return (
        <section className={styleProfil.flexGeneral} >
        
            <form>
                <div className="input-group">
                    <div> 
                    <input type="text"className="form-control" placeholder="nom d'utilisateur0"/>
                    </div>
                </div>
            </form>

        </section>
    )
}
export default Gneral
