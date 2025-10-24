import '../../../styles/components/main/main-menu-button.css'

function MainMenuButton(props : any){
    return (
        <div className="button-main-menu">
            {props.name}
        </div>
    )
}

export default MainMenuButton