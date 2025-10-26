import '../../styles/components/group/add-member-modal.css'
import AddMemberCard from './AddMemberCard'
function AddMemberModal(props :any){
    return(
        <div className='container-modal-add-member' onClick={props.clickClose}>
            <div className='modal-add-member' onClick={(e)=>e.stopPropagation()}>
                <input className='input-name' placeholder='enter name'></input>
                <button className='button-member-add'>{"+"}</button>
                <div className='table-add-member-name'>
                    <AddMemberCard name="kimdowon"></AddMemberCard>
                    <AddMemberCard name="kimdowon"></AddMemberCard>
                    <AddMemberCard name="kimdowon"></AddMemberCard>
                </div>
                <button className='button-member-complete'>{">"}</button>
            </div>
        </div>
    )
}

export default AddMemberModal