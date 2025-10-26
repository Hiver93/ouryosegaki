import { useDispatch, useSelector } from 'react-redux';
import { getYosegakies, postYosegaki } from '../../api/yosegakiApi'
import '../../styles/components/member/create-yosegaki-modal.css'
import type { AppDispatch, RootState } from '../../store/store';
import { setGroupDetail } from '../../store/groupSlice';
import { setYosegakiList } from '../../store/yosegakiSlice';

function CreateYosegakiModal(props :any){
    const memberDetail = useSelector((state: RootState) => state.memberDetail.memberDetail);
    const groupDetail = useSelector((state: RootState)=>state.group.groupDetail)
    
    const dispatch = useDispatch<AppDispatch>();
    const yosegakiList = useSelector((state: RootState) => state.yosegaki.yosegakiList);
    const handleYosegakiSearch = () => {
        console.log("gethethetehtehteht")
        getYosegakies(
            //
            //
            //id 바꿔야함 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //
            //
            {password:groupDetail.password, memberId:1},
            // 성공 콜백
            (res : any)=>{
                console.log("서버 응답:", res.data);    
                const list = res.data.data.list.map((item: any) => ({
                    content: item.content
                }));
                 dispatch(setYosegakiList({ yosegakiList: list }));
            },
            (err: any) => {
                // 실패 콜백
                console.error("요청 실패:", err);
            }
        ), [groupDetail.password, memberDetail.id, dispatch]
    };


    function writeYosegaki(){
        const content = (document.getElementsByClassName("text-create-yosegaki")[0] as HTMLInputElement).value
        const password = prompt();
        if(!password){
            alert('enter password')
            return;
        }
        //
        //
        // id 넣어야함 !!!!!!!!!!!!!!!!!!!!!!!!!!!
        //
        //        
        postYosegaki(
            { memberId: 1, content: content, password: password },
            (res: any) => {
                console.log("서버 응답:", res.data);
            },
            (err: any) => {
                console.error("요청 실패:", err);
            }
        );

        (document.getElementsByClassName("text-create-yosegaki")[0] as HTMLInputElement).value = ""
        props.clickClose()
        handleYosegakiSearch()
    }

    return (
        <div className='container-modal-create-yosegaki'onClick={props.clickClose}>
            <div className='modal-create-yosegaki' onClick={(e)=>e.stopPropagation()}>
                <textarea  className='text-create-yosegaki'>
                    
                </textarea>
                <button className='button-create-complete' onClick={writeYosegaki}>{">"}</button>
            </div>
        </div>
    )
}

export default CreateYosegakiModal