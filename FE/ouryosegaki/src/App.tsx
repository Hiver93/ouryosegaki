import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import { useState } from 'react'
import MainPage from "./pages/MainPage"
import GroupPage from './pages/GroupPage'
import MemberPage from './pages/MemberPage'

function App() {

  return (
    <div className='App'>
    <BrowserRouter>

    <Routes>
      <Route path="/main" element={<MainPage/>}>
      </Route>
      <Route path="/group" element={<GroupPage></GroupPage>}>
      </Route>
      <Route path="/member" element={<MemberPage></MemberPage>}>
      </Route>
      <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
