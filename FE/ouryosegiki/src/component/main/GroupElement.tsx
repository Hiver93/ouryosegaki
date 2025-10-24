import '../../styles/components/main/group-element.css'

function GroupElement(props :any){
    return(
        <tr className="tr-group">
            <td className="group-id">{props.id}</td>
            <td className="group-name">{props.name}</td>
        </tr>
    )
}

export default GroupElement