import '../styles/containers/create-container.css'

import GroupNameBox from "../component/main/main/GroupNameBox"
import PasswordBox from "../component/main/main/PasswordBox"
import MainActionButton from "../component/main/MainActionButton"
import { postGroup } from '../api/mainApi';
import { useNavigate } from 'react-router-dom';
import { setGroupDetail, type GroupDetailInfo } from '../store/groupSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';

function CreateContainer(){
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleCreate = () => {
    
    const name = (document.getElementsByClassName("create-box-name")[0] as HTMLInputElement).value
    const password = (document.getElementsByClassName("create-box-pw")[0] as HTMLInputElement).value

    // console.log(name)
    // console.log(password)

    postGroup(
        {name,password},
        (res: any) => {
            // 성공 콜백
            console.log("서버 응답:", res.data);
            dispatch(setGroupDetail({ id:res.data.data.groupId, name:name, password:password }));            
            navigate('/group');
            
        },
        (err: any) => {
            // 실패 콜백
            console.error("요청 실패:", err);
        }
    )
    
    // getGroupList(
    // { keyword },
    // (res: any) => {
    //     // 성공 콜백
    //     console.log("서버 응답:", res.data);
    //     dispatch(setGroupList({ groupList: [...res.data.data.groupList] }));            
    // },
    // (err: any) => {
    //     // 실패 콜백
    //     console.error("요청 실패:", err);
    // }
    // );
    };

    return(
        <div className='create-container'>
            <div className="container-input">
                <GroupNameBox></GroupNameBox>
                <PasswordBox></PasswordBox>
            </div>
            <MainActionButton name="create" click={handleCreate}></MainActionButton>
        </div>
    )
}

export default CreateContainer