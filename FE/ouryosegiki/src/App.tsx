import { useState } from 'react'
import MainPage from "./pages/MainPage"
import GroupPage from './pages/GroupPage'
import MemberPage from './pages/MemberPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MainPage>

      </MainPage> */}
      {/* <GroupPage></GroupPage> */}
      <MemberPage></MemberPage>
    </>
  )
}

export default App
