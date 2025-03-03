

const Search=({inpValue,setInpValue})=>{
    return(
        <div><input type="search" placeholder="search" value={inpValue} onChange={(e)=>{
            setInpValue(e.target.value)}}/></div>
    )
}

export default Search;