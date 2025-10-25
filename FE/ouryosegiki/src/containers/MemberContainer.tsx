import '../styles/containers/member-container.css'
import AddButton from "../component/AddButton"
import YosegakiTable from "../component/member/YosegakiTable"
import YosegakiDetailModal from '../component/member/YosegakiDeatilModal'
import CreateYosegakiModal from '../component/member/CreateYosegakiModal'
function MemberContainer(){
    return(
        <div className='container-member-top'>
            <div className='container-member'>
                <div className="title-group-name-small">
                    groupname
                </div>
                <div className='title-member-name'>membername</div>
                <AddButton></AddButton>
                <YosegakiTable></YosegakiTable> 
            </div>
            {/* <YosegakiDetailModal content="おめえでとうございます。こんごともよろしくおねがいします。すごくたのしかったです。おめえでとうございます。こんごともよろしくおねがいします。すごくたのしかったです。"></YosegakiDetailModal> */}
            <CreateYosegakiModal></CreateYosegakiModal>
        </div>
    )
}

export default MemberContainer