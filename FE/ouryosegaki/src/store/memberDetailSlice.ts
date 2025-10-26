import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MemberDetailInfo{
    id :number,
    name :string
}

interface MemberDetailState{
    memberDetail :MemberDetailInfo
}

const initialState: MemberDetailState = {
    memberDetail : {
        id: 0,
        name: ""
    }
}

export const MemberDetailSlice = createSlice({
  name: 'memberDetail',
  initialState,
  reducers: {
    setMemberDetail: (state, action: PayloadAction<MemberDetailInfo>)=>{
        state.memberDetail = action.payload
    }
    
    }
  }
)

export const { setMemberDetail } = MemberDetailSlice.actions;
export default MemberDetailSlice.reducer
export type {MemberDetailInfo}