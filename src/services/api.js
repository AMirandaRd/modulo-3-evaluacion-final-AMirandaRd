const resultsLimit=20;

const callToApi= () => {
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then (response => response.json())
    .then (apiData=>{
        return apiData.results.map((person) => {
        return {

            id: person.id,
            name: person.name,
            pict: person.image,
            specie: person.species,
        };
    }) 
})
}
export default callToApi;