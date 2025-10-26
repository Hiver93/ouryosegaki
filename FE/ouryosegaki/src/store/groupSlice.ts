import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GroupDetailInfo{
    id :number,
    name :string,
    password :string
}

interface GroupDetailState{
    groupDetail :GroupDetailInfo
}

const initialState: GroupDetailState = {
    groupDetail : {
        id: 0,
        name: "",
        password: ""
    }
}

export const GroupDetailSlice = createSlice({
  name: 'groupDetail',
  initialState,
  reducers: {
    setGroupDetail: (state, action: PayloadAction<GroupDetailInfo>)=>{
        state.groupDetail = action.payload
    }
    
    }
  }
)

export const { setGroupDetail } = GroupDetailSlice.actions;
export default GroupDetailSlice.reducer
export type {GroupDetailInfo}