import '../styles/containers/member-container.css'
import AddButton from "../component/AddButton"
import YosegakiTable from "../component/member/YosegakiTable"
import CreateYosegakiModal from '../component/member/CreateYosegakiModal'
import { useState } from 'react';
import YosegakiDetailModal from '../component/member/YosegakiDeatilModal';
function MemberContainer(){
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [detailContent, setDetailContent] = useState("");

    return(
        <div className='container-member-top'>
            <div className='container-member'>
                <div className="title-group-name-small">
                    groupname
                </div>
                <div className='title-member-name'>membername</div>
                <AddButton click={()=>setIsCreateOpen(true)}></AddButton>
                <YosegakiTable setDetail={setDetailContent} setModal={setIsDetailOpen}></YosegakiTable> 
            </div>
             {isDetailOpen === true && <YosegakiDetailModal clickClose={() => setIsDetailOpen(false)} content={detailContent}/>}
            {/* <YosegakiDetailModal content="おめえでとうございます。こんごともよろしくおねがいします。すごくたのしかったです。おめえでとうございます。こんごともよろしくおねがいします。すごくたのしかったです。"></YosegakiDetailModal> */}
            {isCreateOpen === true && <CreateYosegakiModal clickClose={() => setIsCreateOpen(false)}/>}
            {/* <CreateYosegakiModal></CreateYosegakiModal> */}

        </div>
    )
}

export default MemberContainer