import '../../styles/components/member/create-yosegaki-modal.css'

function CreateYosegakiModal(){
    return (
        <div className='container-modal-create-yosegaki'>
            <div className='modal-create-yosegaki'>
                <textarea  className='text-create-yosegaki'>
                    
                </textarea>
                <button className='button-create-complete'>{">"}</button>
            </div>
        </div>
    )
}

export default CreateYosegakiModal