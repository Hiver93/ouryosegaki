import '../styles/pages/main-page.css'
import Header from "../layout/Header"
import MemberContainer from '../containers/MemberContainer'

function MemberPage(){
    return(
        <div className='body'>
            <Header></Header>
            <MemberContainer></MemberContainer>
        </div>
    )
}

export default MemberPage