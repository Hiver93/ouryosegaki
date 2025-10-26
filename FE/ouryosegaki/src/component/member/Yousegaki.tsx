import '../../styles/components/member/yosegaki.css'

function Yosegaki(props :any){
    return(
        <div className='card-yosegaki' onClick={()=>{
            props.setModal(true)
            props.setDetail(props.content)
        }}>
            {props.content}
        </div>
    )
}

export default Yosegaki