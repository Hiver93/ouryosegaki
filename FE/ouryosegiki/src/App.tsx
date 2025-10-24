import { useState } from 'react'
import MainPage from "./pages/MainPage"
import GroupPage from './pages/GroupPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MainPage>

      </MainPage> */}
      <GroupPage></GroupPage>
    </>
  )
}

export default App
