
// fetching apis

const key= '5emicq9ME2s7qPqCsQq7rx8cm0aGRwBE';


// to get the city api 
const getCity = async (city) =>{

    const baseURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const querry = `?apikey=${key}&q=${city}`;

    const response = await fetch (baseURL + querry) ;

    const data = await response.json();
    // console.log(data);
    return data[0];


}
// weather condition api
const getCondition = async (id) =>{

    const baseURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const querry = `${id}?apikey=${key}`;

    const response = await fetch(baseURL + querry);

    const data = await response.json();
    // console.log(data);
    return data[0];


}
