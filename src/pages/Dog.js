import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ff7d2a73b0msh3cab82294049d2cp1dd7d5jsn68dfa523ed5c",
    "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
  },
};

const Dog = () => {
  const { breed } = useParams();
  const [loading, setLoading] = useState(false);
  const [dog, setDog] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getDog() {
      try {
        const response = await fetch(
          `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${breed}`,
          options
        );
        const data = await response.json();
        const { img, origin, meta}= data[0]
        const newDog = {
            img, origin, meta 
        }
        setDog(newDog)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      
    }
    getDog()
  }, [breed]);

  if(loading){
    return( <Loading/>)
  }

  if(!dog){
    return <h1>Nothing to display yet</h1>
  }


  const { img, origin, meta}= dog
  console.log(meta)

  const {colour,common_nicknames, life_span,other_names, weight} =meta 
  const {dogs:dog_weight} = weight

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-12">
            <img src={img} alt="dog" className="d-block mx-auto"/>
          </div>
          <div className="col-lg-6 col-12">
              <h2>{breed}</h2>
              <p>{origin}</p>
              <p><span class="badge bg-primary">Colour</span> : {colour}</p>
              <p><span class="badge bg-success">Nick Name</span> : {common_nicknames}</p>
              <p><span class="badge bg-danger">Life Span</span> : {life_span}</p>
              <p><span class="badge bg-warning">Other Name</span> : {other_names}</p>
              <p><span class="badge bg-dark">Total Weight</span> : {dog_weight}</p>
          </div>      
      </div>
    </div>
  );
};

export default Dog;
