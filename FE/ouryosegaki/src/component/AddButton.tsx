import '../styles/components/add-button.css'

function AddButton(props :any){
    return(
        <div onClick={props.click} className='button-add'>
            +
        </div>
    )
}

export default AddButton