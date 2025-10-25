import '../../styles/components/group/group-name-title.css'

function GroupNameTitle(props :any){
    return (
        <div className="group-name-title">
            {props.name}
        </div>
    )
}

export default GroupNameTitle