export default function FetchUser(){
    fetch('https://swapi.dev/api/people/1/', result => result.json())
    console.log(result);

    
}
