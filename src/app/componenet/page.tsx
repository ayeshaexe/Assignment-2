import type from "../interface/page"
export default function CountryComponent ({name, population, capital}: type) {
    return(
        <div>
            <h1>Country name: {name}</h1>
            <h1>Population: {population}</h1>
            <h1>Capital: {capital}</h1>
        </div>
    )
};