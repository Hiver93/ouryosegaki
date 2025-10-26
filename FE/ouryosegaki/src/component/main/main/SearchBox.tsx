import '../../../styles/components/main/search-box.css'

function SearchBox(props :any){
    return (
        <input name='search-box' type='text' className="search-box" placeholder={props.holder}  onChange={(e) => props.onChange(e.target.value)}>

        </input>
    )
}

export default SearchBox