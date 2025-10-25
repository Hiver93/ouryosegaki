import '../styles/containers/group-container.css'
import GroupNameTitle from "../component/group/GroupNameTitle"
import MemberTable from "../component/group/MemberTable"
import AddButton from '../component/AddButton'
import AddMemberModal from '../component/group/AddMemberModal'

function GroupContainer(){
    return (
        <div className="container-group">
            <GroupNameTitle name="group name"></GroupNameTitle>
            <AddButton></AddButton>
            <MemberTable>

            </MemberTable>
            <AddMemberModal></AddMemberModal>
        </div>
    )
}

export default GroupContainer