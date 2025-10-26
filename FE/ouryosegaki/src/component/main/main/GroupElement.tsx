import { Navigate, useNavigate } from 'react-router-dom'
import '../../../styles/components/main/group-element.css'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store/store';
import { setGroupDetail } from '../../../store/groupSlice';

function GroupElement(props :any){
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const groupDetail = useSelector((state: RootState) => state.group.groupDetail);
    const handleClick = () =>{
        if(props.id == null){
            return;
        }
        const pw = prompt("enter password")
        if(!pw){
            alert("enter password")
            return;
        }
        dispatch(setGroupDetail({ groupId:props.id, name:props.name, password:pw }));            
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