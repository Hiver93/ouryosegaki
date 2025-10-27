import '../styles/containers/member-container.css'
import AddButton from "../component/AddButton"
import YosegakiTable from "../component/member/YosegakiTable"
import CreateYosegakiModal from '../component/member/CreateYosegakiModal'
import { useState } from 'react';
import YosegakiDetailModal from '../component/member/YosegakiDeatilModal';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
function MemberContainer(){
    const navigate = useNavigate();
    const groupDetail = useSelector((state: RootState) => state.group.groupDetail);
    const memberDetail = useSelector((state:RootState)=>state.memberDetail.memberDetail)
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [detailContent, setDetailContent] = useState("");
    const [refreshKey, setRefreshKey] = useState(0); // 새로고침 트리거 state
    const handleModalClose = () => {
        setIsCreateOpen(false);
        setRefreshKey(prev => prev + 1); // Table이 이 값 변화를 감지함
    };
    return(
        <div className='container-member-top'>
            <div className='container-member'>
                <div className="title-group-name-small" onClick={()=>navigate("/group")}>
                    {groupDetail.name}
                </div>
                <div className='title-member-name'>{memberDetail.name}</div>
                <AddButton click={()=>setIsCreateOpen(true)}></AddButton>
                <YosegakiTable setDetail={setDetailContent} setModal={setIsDetailOpen} refreshKey={refreshKey}></YosegakiTable> 
            </div>
             {isDetailOpen === true && <YosegakiDetailModal clickClose={() => setIsDetailOpen(false)} content={detailContent}/>}
            {/* <YosegakiDetailModal content="おめえでとうございます。こんごともよろしくおねがいします。すごくたのしかったです。おめえでとうございます。こんごともよろしくおねがいします。すごくたのしかったです。"></YosegakiDetailModal> */}
            {isCreateOpen === true && <CreateYosegakiModal clickClose={handleModalClose}/>}
            {/* <CreateYosegakiModal></CreateYosegakiModal> */}

        </div>
    )
}

export default MemberContainer