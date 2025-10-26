import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'

interface YosegakiInfo{
    content : string
}

interface YosegakiState{
    yosegakiList: Array<YosegakiInfo>
}

const initialState: YosegakiState = {
    yosegakiList:[]
}

export const YosegakiSlice = createSlice({
  name: 'yosegaki',
  initialState,
  reducers: {
    setYosegakiList: (state, action: PayloadAction<YosegakiState>)=>{
        state.yosegakiList = action.payload.yosegakiList
    }
    }
  }
)

export const { setYosegakiList } = YosegakiSlice.actions;
export default YosegakiSlice.reducer
export type {YosegakiInfo}