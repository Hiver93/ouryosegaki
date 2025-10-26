import '../styles/containers/main-containers.css'
import SearchBox from '../component/main/main/SearchBox'
import MainActionButton from '../component/main/MainActionButton'
import GroupListTable from '../component/main/main/GroupListTable'
import { getGroupList } from "../api/mainApi"
import { setGroupList, type GroupInfo } from "../store/mainSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import type { AppDispatch, RootState } from '../store/store'

function MainContainer(){
    const dispatch = useDispatch<AppDispatch>();  

    const [keyword, setKeyword] = useState("");
    const groupList: Array<GroupInfo> = useSelector((state: RootState) => {
        // console.log("check \n"+state.main.groupList)
        return state.main.groupList
    });
    

    const handleSearch = () => {
        // getGroupList는 (info, success, fail) 형태로 사용
        getGroupList(
        { keyword },
        (res: any) => {
            // 성공 콜백
            console.log("서버 응답:", res.data);
            dispatch(setGroupList({ groupList: [...res.data.data.groupList] }));            
        },
        (err: any) => {
            // 실패 콜백
            console.error("요청 실패:", err);
        }
        );
    };

    return(
        <div className='main-container'>
            <SearchBox onChange={setKeyword}></SearchBox>
            <MainActionButton name="search" click={handleSearch}></MainActionButton>
            <GroupListTable title="group number" groupList={groupList.slice(0,1)}>
            </GroupListTable>
            <GroupListTable title="group name" groupList={groupList.slice(1)}></GroupListTable>
        </div>
    )
}

export default MainContainer