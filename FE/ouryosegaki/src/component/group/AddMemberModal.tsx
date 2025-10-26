import { useDispatch, useSelector } from 'react-redux';
import '../../styles/components/group/add-member-modal.css'
import AddMemberCard from './AddMemberCard'
import type { AppDispatch, RootState } from '../../store/store'
import { setAddMemberList } from '../../store/addMemberSlice';
import { useEffect, useState } from 'react'
import { postMembers } from '../../api/memberApi';
function AddMemberModal(props :any){

    const addMemberList = useSelector((state: RootState) => state.addMember.addMemberList);
    const groupDetail = useSelector((state: RootState) => state.group.groupDetail);
    const [list, setList] = useState<string[]>(addMemberList);
    const dispatch = useDispatch<AppDispatch>();
    console.log("현재 Redux에 저장된 addmembers:", addMemberList);

    const memberList: Array<string> = useSelector((state: RootState) => {
        return state.addMember.addMemberList
    });

    const addMemberToList = () => {
        const name = (document.getElementsByClassName("input-name")[0] as HTMLInputElement).value.trim()
        if(!name){
            return
        }

        const newList = [...addMemberList, name];
        console.log(newList)
        console.log(groupDetail)
        dispatch(setAddMemberList({ addMemberList: [...newList] }));    
        const tmpList = []
        for(let i = 0; i < memberList.length; ++i){
            tmpList.push(
                <AddMemberCard name={memberList[0]}></AddMemberCard>
            )
        }
        
        (document.getElementsByClassName("input-name")[0] as HTMLInputElement).value = ""
    };

    const handlePostMembers=()=>{

        postMembers(
            {groupId:groupDetail.groupId, memberList:memberList, password:groupDetail.password},
            (res: any) => {
                
                console.log("서버 응답:", res.data);
                props.reGet();
                dispatch(setAddMemberList({ addMemberList: [] }));    
                props.clickClose()
            },
            (err: any) => {
                
                console.error("요청 실패:", err);
            }
        )
        
    
    }

    return(
        <div className='container-modal-add-member' onClick={props.clickClose}>
            <div className='modal-add-member' onClick={(e)=>e.stopPropagation()}>
                <input className='input-name' placeholder='enter name'></input>
                <button className='button-member-add' onClick={addMemberToList}>{"+"}</button>
                <div className='table-add-member-name'>
                    {addMemberList.map((name, index) => (
                        <AddMemberCard key={index} idx={index} name={name} />
                    ))}
                </div>
                <button className='button-member-complete' onClick={handlePostMembers}>{">"}</button>
            </div>
        </div>
    )
}

export default AddMemberModal