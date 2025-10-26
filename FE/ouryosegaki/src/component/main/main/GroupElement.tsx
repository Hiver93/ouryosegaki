import { Navigate, useNavigate } from 'react-router-dom'
import '../../../styles/components/main/group-element.css'

function GroupElement(props :any){
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/group');
    }
    return(
        <tr className="tr-group" onClick={handleClick}>
            <td className="group-id">{props.id}</td>
            <td className="group-name">{props.name}</td>
        </tr>
    )
}

export default GroupElement