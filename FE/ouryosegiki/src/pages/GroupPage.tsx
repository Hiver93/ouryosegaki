import '.././styles/pages/main-page.css'
import GroupContainer from '../containers/GroupContainer'

import Header from "../layout/Header"
function GroupPage(){
    return(
        <div className='body'>
            <Header></Header>
            <GroupContainer></GroupContainer>
        </div>
    )
}

export default GroupPage