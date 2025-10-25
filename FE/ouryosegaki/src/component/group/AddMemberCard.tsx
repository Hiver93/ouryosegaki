import '../../styles/components/group/add-member-card.css'

function AddMemberCard(props :any){
    return(
        <div className='card-add-member'>
            <div className='name-card-add-member'>{props.name}</div>
            <div className='cancel-add-member'>x</div>
        </div>
    )
}

export default AddMemberCard