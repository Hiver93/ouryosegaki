import '../styles/containers/group-container.css'
import GroupNameTitle from "../component/group/GroupNameTitle"
import MemberTable from "../component/group/MemberTable"
import AddButton from '../component/AddButton'
import AddMemberModal from '../component/group/AddMemberModal'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { getGroupMembers } from '../api/memberApi'
import { setMemberList, type MemberInfo } from '../store/memberSlice'
import { useEffect, useState } from 'react'

function GroupContainer(){
    const groupDetail = useSelector((state: RootState) => state.group.groupDetail);
    const dispatch = useDispatch<AppDispatch>();
    console.log("현재 Redux에 저장된 groupDetail:", groupDetail);

    const memberList: Array<MemberInfo> = useSelector((state: RootState) => {
        // console.log("check \n"+state.main.groupList)
        return state.member.memberList
    });

    const handleMemberSearch = () => {
        // getGroupList는 (info, success, fail) 형태로 사용
        getGroupMembers(
        { groupId : 1, password : groupDetail.password },
        (res: any) => {
            // 성공 콜백
            console.log("서버 응답:", res.data);
            dispatch(setMemberList({ memberList: [...res.data.data.memberList] }));            
        },
        (err: any) => {
            // 실패 콜백
            console.error("요청 실패:", err);
        }
        );
    };

    useEffect(()=>{
        handleMemberSearch()
    }, [groupDetail.id])
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container-group">
            <GroupNameTitle name={groupDetail.name}></GroupNameTitle>
            <AddButton click={() => setIsModalOpen(true)}></AddButton>
            <MemberTable memberList={memberList}>

            </MemberTable>
            {isModalOpen === true && <AddMemberModal reGet={handleMemberSearch} clickClose={() => setIsModalOpen(false)}/>}
            {/* <AddMemberModal></AddMemberModal> */}
        </div>
    )
}                
 
export default GroupContainer