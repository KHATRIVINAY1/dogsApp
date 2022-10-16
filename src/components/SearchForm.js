import { useGlobalContext } from "../context";
import { useRef ,useEffect} from "react";
const SearchForm = ()=>{
    const {setSearchTerm} = useGlobalContext();
    const searchValue = useRef('')

    useEffect(()=>{
        searchValue.current.focus()
    },[])

    const searchDog =()=>{
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
    }

    return( <>
        <section className="search-section">
            <form className="searchform" onSubmit={handleSubmit}>
                <label htmlFor="dog">Search The dog</label>
                <input type='text' id='dog'  ref={searchValue} onChange={searchDog}/>
            </form>
        </section>

    </>)

}

export default SearchForm;