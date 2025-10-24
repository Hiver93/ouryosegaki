import '.././styles/pages/main-page.css'

import Header from "../layout/Header"
import MainContainer from "../containers/MainContainer"
import MainMenuButton from '../component/main/main/MainMenuButton'
import CreateContainer from '../containers/CreateContainer'
function MainPage(){
    return(
        <div className='body'>
            <Header></Header>
            <div className="page-main">
                <div className="main-menu">
                    <MainMenuButton name="search"></MainMenuButton>
                    <MainMenuButton name="create"></MainMenuButton>
                </div>
                {/* <MainContainer></MainContainer> */}
                <CreateContainer></CreateContainer>
            </div>
        </div>
    )
}

export default MainPage