import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryId } = useParams();

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <p className="text-center mt-40 font-bold text-xl">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-40 font-bold text-xl">Error: {error}</p>
    );
  }

  const country: any = countries.find(
    (c: any) => c.name.common.toString() === countryId
  );

  console.log(country); /////////////////////////////////////////////////////////////////
  console.log(typeof country.borders); /////////////////////////////////////////////////////////////////

  if (!country) {
    return <div>Country not found</div>;
  }

  // const countryBorders = country.borders.length

  return (
    <div className="mx-4 md:mx-20 my-8">
      <Link
        to={
          "/REST-Countries-API-with-color-theme-switcher---FrontEndMentor-Challenge"
        }
      >
        <span className="px-8 py-2 shadow-md">Back</span>
      </Link>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-x-20">
        <div>
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-96"
          />
        </div>
        <div className="text-sm leading-8">
          <h1 className="mt-8 mb-4 text-lg font-bold">
            {country.name.common === "North Macedonia"
              ? "Republic of Macedonia"
              : country.name.common}
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              <p>
                <span className="font-bold text-sm">Native Name: </span>
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].common
                }
              </p>
              <p>
                <span className="font-bold text-sm">Population: </span>
                {new Intl.NumberFormat("en-US").format(country.population)}
              </p>
              <p>
                <span className="font-bold text-sm">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-bold text-sm">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-bold text-sm">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-sm">Top Level Domain: </span>
                {country.tld}
              </p>
              <p>
                <span className="font-bold text-sm">Currencies: </span>
                {country.currencies[Object.keys(country.currencies)[0]].name}
              </p>
              <p>
                <span className="font-bold text-sm">Languages: </span>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-base font-bold">Border Countries:</p>
            <div className="flex flex-wrap gap-2">
              {country.borders ? (
                country.borders.map((borderCountry: any) => (
                  <div
                    key={borderCountry}
                    className="text-sm shadow-md px-4 py-2"
                  >
                    {borderCountry}
                  </div>
                ))
              ) : (
                <div>This country doesn't have any neighbors.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
