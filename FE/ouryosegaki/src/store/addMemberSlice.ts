import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'

interface AddMemberState{
    addMemberList: Array<string>
}

const initialState: AddMemberState = {
    addMemberList:[]
}

export const AddMemberSlice = createSlice({
  name: 'addMember',
  initialState,
  reducers: {
    setAddMemberList: (state, action: PayloadAction<AddMemberState>)=>{
        state.addMemberList = action.payload.addMemberList
    }
    }
  }
)

export const { setAddMemberList } = AddMemberSlice.actions;
export default AddMemberSlice.reducer