import '../../styles/components/member/yosegaki-deatil-modal.css'

function YosegakiDetailModal(props :any){
    return(
        <div className='modal-yosegaki'>
            <div className='container-yosegaki-detail'>
                <div className='container-yosegaki-content'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default YosegakiDetailModal