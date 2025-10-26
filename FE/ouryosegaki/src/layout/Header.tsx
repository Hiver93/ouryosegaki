import { useNavigate } from "react-router-dom"
import "../styles/layout/header.css"

function Header(){
    const navigate = useNavigate();
    const toMain = () =>{
        navigate('/main')
    } 
    return(
        <div>
            <header> 
                <div className="header" onClick={toMain}>よせがき</div>
            </header>
            <div className="header-bottom"></div>
        </div>
    )
}


export default Header