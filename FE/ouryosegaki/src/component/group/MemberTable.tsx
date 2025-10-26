import { useNavigate } from 'react-router-dom';
import '../../styles/components/group/member-table.css'
import MemberCard from './MemberCard'

function MemberTable(props : any){

    const navigate = useNavigate();
    let list = []
    const memberList = props.memberList ?? []


    for(let i = 0; i < memberList.length; ++i){
        if(memberList !== undefined&&memberList[i] !== undefined){
            let info = memberList[i];
            console.log(info.name)
            list.push(
                <MemberCard memberId={info.memberId} name={info.name}></MemberCard>
            );
        }
    }

    return(
        <div className="table-member">
            {list}
        </div>
    )
}

export default MemberTable