import { useNavigate } from 'react-router-dom'
import '../../../styles/components/main/table-group-list.css'
import GroupElement from './GroupElement'

function GroupListTable(props :any){
    const navigate = useNavigate();
    
    return(
        <div>
            <div className="title-group-table" >{props.title}</div>
                <table className="table-group-list">       
                    <GroupElement id="123" name="my name is kimu"></GroupElement> 
                </table>
        </div>
    )
}

export default GroupListTable