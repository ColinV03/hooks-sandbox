import React, {useState, useEffect} from "react"

export default function UserCard(props) {
    const [planet, setPlanet] = useState('');
    // const [movies, setMovies] = useState([])

    


    const { name, height, mass, homeworld, films } = props.props
    

    // let regexURL =
    //   "(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})";
     
    // let examplePath = "http://swapi.dev/api/films/1/"
    useEffect(() => {
        
        fetch(homeworld)
            .then(response => response.json())
            .then(data => setPlanet(data.name))            
        
        
        return () => {
            console.log("Planet Assigned! ")
            
            
        }
    }, [name,homeworld])

    
    // useEffect(() => {
    //   console.log("Films added");
    //   return () => {
    //     films.map((x) =>
    //         console.log(x)
    //     )
    //   };
    // }, [films]);
    

    // if (examplePath.match(regexURL)){
    //     console.log("Success!")
    // } else {
    //     console.log("No match")
    
    // console.log(props);

    

    return (
      <div>
        
        <h1>Name:{name}</h1>
        <h3>Height: {height}</h3>
        <h3>Weight:{mass}</h3>
        <h3>Homeworld:{planet}</h3>
        <h3>Movies:{films}</h3>
      </div>
    );

}
