import { useNavigate } from 'react-router-dom';
import '../../styles/components/group/member-card.css'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { setMemberDetail } from '../../store/memberDetailSlice';

function MemberCard(props :{memberId:number, name: string}){
    
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    return(
        <div className='card-member' onClick={()=>{
            dispatch(setMemberDetail({
                id: props.memberId,
                name: props.name
            }));        
            navigate("/member")
            }}>
            {props.name}
        </div>
    )
}

export default MemberCard