import { useNavigate } from 'react-router-dom'
import '../../../styles/components/main/table-group-list.css'
import GroupElement from './GroupElement'
import type { GroupInfo } from '../../../store/mainSlice';

function GroupListTable(props :{title:string, groupList:Array<GroupInfo>}){
    const navigate = useNavigate();
    let list = []
    const groupList = props.groupList ?? []

    for(let i = 0; i < groupList.length; ++i){
        if(groupList !== undefined&&groupList[i] !== undefined){
            let info = groupList[i];
            console.log(info.name)
            console.log("info" + i + ":" +info.groupId)
            list.push(
                <GroupElement id={info.groupId} name={info.name}></GroupElement>
            );
        }
    }
    
    return(
        <div>
            <div className="title-group-table" >{props.title}</div>
                <table className="table-group-list">       
                    <tbody>
                    {list}
                    </tbody>
                </table>
        </div>
    )
}

export default GroupListTable