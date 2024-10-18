import React from "react";
import countryName from "@/app/detalis/page";
import CountryComponent from "@/app/componenet/page";
import Link from "next/link";
export default function CountryDetails ({params}: {params: { country_names: string }}) {
    const country = countryName.find(c => c.name.toLowerCase() === params.country_names.toLowerCase())
        if (!country) {
            return <h1 className="text-center m-10 bg-blue-400 text-blue-700">Country not found!!</h1>;
        }
        return (
            <div>
                <h1><b className="bg-blue-300 text-xl font-mono">.Country’s details.</b></h1>
                <h3 className="font-mono text-blue-400">
                    <CountryComponent 
                    name={country.name} 
                    population={country.population} 
                    capital={country.capital}
                    />
                </h3>
                <Link className="bg-blue-200 texl-lg no-underline hover:underline font-mono" href="/country"><b>BACK TO COUNTRY LIST</b></Link>
            </div>
        )
};

