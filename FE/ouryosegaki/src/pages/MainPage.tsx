import '.././styles/pages/main-page.css'

import Header from "../layout/Header"
import MainContainer from "../containers/MainContainer"
import MainMenuButton from '../component/main/main/MainMenuButton'
import CreateContainer from '../containers/CreateContainer'
import { useState } from 'react'



function MainPage(){
    // function toMain(){

    //     const [count , setCount] = useState(0);
    //     const mainElem = document
    //     .getElementsByClassName("main-container")[0] as HTMLElement;
    //     mainElem.style.display = "inline"

    //     const createElem = document
    //     .getElementsByClassName("create-container")[0] as HTMLElement;
    //     createElem.style.display = "none"

    //     const buttonElem0 = document
    //     .getElementsByClassName("button-main-menu")[0] as HTMLElement;
    //     const buttonElem1 = document
    //     .getElementsByClassName("button-main-menu")[1] as HTMLElement;

    //     buttonElem0.style.backgroundColor = "#A9D3FF"
    //     buttonElem1.style.backgroundColor = "#FFFFFF"
    // }
    // function toCreate(){
    //     const mainElem = document
    //     .getElementsByClassName("main-container")[0] as HTMLElement;
    //     mainElem.style.display = "none"

    //     const createElem = document
    //     .getElementsByClassName("create-container")[0] as HTMLElement;
    //     createElem.style.display = "inline"
    //     const buttonElem0 = document
    //     .getElementsByClassName("button-main-menu")[0] as HTMLElement;
    //     const buttonElem1 = document
    //     .getElementsByClassName("button-main-menu")[1] as HTMLElement;

    //     buttonElem0.style.backgroundColor = "#FFFFFF"
    //     buttonElem1.style.backgroundColor = "#A9D3FF"
    // }

    const [active, setActive] = useState<"main" | "create">("main");
    return(
        <div className='body'>
            <Header></Header>
            <div className="page-main">
                <div className="main-menu">
                    <MainMenuButton name="search" click={() => setActive("main")}></MainMenuButton>
                    <MainMenuButton name="create" click={() => setActive("create")}></MainMenuButton>
                </div>
                {/* <MainContainer></MainContainer>
                <CreateContainer></CreateContainer> */}
                {active === "main" && <MainContainer />}
                {active === "create" && <CreateContainer />}
            </div>
        </div>
    )
}

export default MainPage