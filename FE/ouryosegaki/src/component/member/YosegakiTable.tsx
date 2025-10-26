import { useDispatch, useSelector } from 'react-redux';
import { getYosegakies } from '../../api/yosegakiApi';
import '../../styles/components/member/yosegaki-table.css'
import YosegakiDetailModal from './YosegakiDeatilModal'
import Yosegaki from './Yousegaki'
import type { AppDispatch, RootState } from '../../store/store';
import { setYosegakiList } from '../../store/yosegakiSlice';
import { useEffect } from 'react';

function YosegakiTable(props :any){
    const dispatch = useDispatch<AppDispatch>();
    const memberDetail = useSelector((state: RootState) => state.memberDetail.memberDetail);
    const groupDetail = useSelector((state: RootState)=>state.group.groupDetail)
    const yosegakiList = useSelector((state: RootState) => state.yosegaki.yosegakiList);
    const handleYosegakiSearch = () => {
        console.log(memberDetail.id)
        getYosegakies(
            {password:groupDetail.password, memberId:memberDetail.id},
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
    // handleYosegakiSearch()
      useEffect(() => {
    handleYosegakiSearch();
  }, [props.refreshKey, groupDetail.password, memberDetail.id]);
  
    return(
        <div className="table-yosegaki">
            {yosegakiList.length > 0 ? (
                yosegakiList.map((y, idx) => (
                <Yosegaki key={idx} setModal={props.setModal} setDetail={props.setDetail} content={y.content} />
                ))
            ) : (
                <p>empty</p>
            )}
        </div>
        
    )
}

export default YosegakiTable