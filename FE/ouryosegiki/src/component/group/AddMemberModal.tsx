import '../../styles/components/group/add-member-modal.css'
import AddMemberCard from './AddMemberCard'
function AddMemberModal(){
    return(
        <div className='container-modal-add-member'>
            <div className='modal-add-member'>
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