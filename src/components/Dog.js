import { Link } from "react-router-dom";
const Dog =({index, origin, breed, img})=>{
    return<><div className="dog-card">
        <img src={img} alt={breed}/>
        <h3>{breed}</h3>
        <h4>{origin}</h4>
        <Link to={`/dog/${breed}`} className="btn btn-outline-primary">Details</Link>
    </div></>
}

export default Dog;