import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://dog-breeds2.p.rapidapi.com/dog_breeds";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [dogs, setDogs] = useState([]);

  const fetchDog = async ()=>{
    setLoading(true)
    try{
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ff7d2a73b0msh3cab82294049d2cp1dd7d5jsn68dfa523ed5c',
          'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
      };
      
      
      const respose = await fetch(`${url}?${searchTerm}`, options)
      const data = await respose.json()
      if(data)
      {
        const allDogs = data.filter((item, index)=>{
          if(searchTerm){
            if(item.breed.toLowerCase().includes(searchTerm)){
              const {breed, origin, img} = item;
              return { breed, origin, img}
            }
          }
          
        })
        setDogs(allDogs)
      }
      else{
        setDogs([])
        setLoading(false)
      }
      setLoading(false)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchDog()
  }, [searchTerm])
  return (
    <AppContext.Provider value={{ loading, searchTerm, dogs, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
