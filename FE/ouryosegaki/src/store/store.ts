import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

// import counterReducer from './counterSlice'
// import applyingReducer from './applyingSlice'
// import userReducer from './userSlice'
// import mentoringReducer from './mentoringSlice'
// import rollingReducer from './rollingSlice'
import mainReducer from './mainSlice'
import groupReducer from './groupSlice'
import memberReducer from './memberSlice'
import addMemberReducer from './addMemberSlice'

const reducers = combineReducers ({
//   counter: counterReducer,
//   applying: applyingReducer,
    main: mainReducer,
    group: groupReducer,
    member: memberReducer,
    addMember: addMemberReducer
})

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['user'],
  // blacklist: ['applying', 'mentoring'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



export default store