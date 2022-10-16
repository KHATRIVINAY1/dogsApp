import { useGlobalContext } from "../context";
import  Loading  from "./Loading";
import Dog from "./Dog"
const DogList = ()=>{
    const {dogs, loading} = useGlobalContext()
    if(loading)
        return <Loading/>
    
    if(dogs.length<1){
        return <h2 className="section-title">No Dog Found</h2>
    }
    return <>
        <section className="dog-list">
            <h2 className="section-title">All Dogs</h2>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                {dogs.map((item=>{
                    return <div className="col-lg-4 col-md-6 col-12">  <Dog key={item.breed} {...item}></Dog></div>
                }))}
                </div>
            </div>
        </section>
        
    </>
}

export default DogList