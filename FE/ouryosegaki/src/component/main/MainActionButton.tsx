import '../../styles/components/main/button-main-action.css'

function MainActionButton(props :any){
    return (
        <button className="button-main-action" onClick={props.click}>{props.name}</button>
    )
}

export default MainActionButton