import '../styles/containers/create-container.css'

import GroupNameBox from "../component/main/main/GroupNameBox"
import PasswordBox from "../component/main/main/PasswordBox"
import MainActionButton from "../component/main/MainActionButton"

function CreateContainer(){
    return(
        <div>
            <div className="container-input">
                <GroupNameBox></GroupNameBox>
                <PasswordBox></PasswordBox>
            </div>
            <MainActionButton name="create"></MainActionButton>
        </div>
    )
}

export default CreateContainer