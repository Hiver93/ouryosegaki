import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'
// ***************************************
// api 호출시 주의점
// 서버에서 사용하는 이름과 대응하는 각각의 변수명들
//     id: completeMentoringId,
//     color: string,
//     content: reviewContent,
//     attached: reviewSelected, 이거 boolean아니고 1이나 0으로 들어옴 조건문에세 주의
//     posX: reviewWidth, 
//     posY: reviewHeight,
// ***************************************

interface MemberInfo{
    memberId: number,
    name: string
}

interface MemberState{
    memberList: Array<MemberInfo>
}

const initialState: MemberState = {
    memberList:[]
}

export const MemberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMemberList: (state, action: PayloadAction<MemberState>)=>{
        state.memberList = action.payload.memberList
    }
    }
  }
)

export const { setMemberList } = MemberSlice.actions;
export default MemberSlice.reducer
export type {MemberInfo}