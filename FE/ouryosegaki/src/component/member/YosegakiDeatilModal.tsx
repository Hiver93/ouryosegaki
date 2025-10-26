import '../../styles/components/member/yosegaki-deatil-modal.css'

function YosegakiDetailModal(props :any){
    return(
        <div className='modal-yosegaki' onClick={props.clickClose}>
            <div className='container-yosegaki-detail' onClick={(e)=>e.stopPropagation()}>
                <div className='container-yosegaki-content'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default YosegakiDetailModal