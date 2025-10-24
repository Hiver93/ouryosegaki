import '../styles/containers/main-containers.css'
import MainMenuButton from '../component/main/MainMenuButton'

function MainContainer(){
    return(
        <div>
            <div className="main-menu">
                <MainMenuButton name="search"></MainMenuButton>
                <MainMenuButton name="create"></MainMenuButton>
            </div>
        </div>
    )
}

export default MainContainer