import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedContinent, setSelectedContinent] =
    useState<string>("All Continents");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setCountries(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-40 font-bold text-xl">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center mt-40 font-bold text-xl">Error: {error}</div>
    );

  const continents = [
    "All Continents",
    ...new Set(countries.map((country: any) => country.region)),
  ];

  const filteredCountries = countries.filter((country: any) => {
    const matchesSearchInput = country.name.common
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const matchesSelectedContinent =
      selectedContinent === "All Continents" ||
      country.region === selectedContinent;

    return matchesSearchInput && matchesSelectedContinent;
  });

  return (
    <section className="m-6">
      <div className="w-full my-6 flex flex-col justify-between md:flex-row gap-4">
        <div className="w-80 max-w-96 mx-auto md:mx-4 px-8 py-4 bg-white dark:bg-dark-blue shadow-md rounded-lg flex grow">
          <input
            className="w-full dark:bg-dark-blue focus:outline-none"
            placeholder="Search for a country..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="w-80 max-w-96 mx-auto md:mx-4 px-8 py-4 bg-white dark:bg-dark-blue shadow-md rounded-lg flex grow">
          <select
            className="w-full  dark:bg-dark-blue focus:outline-none text-slate-400"
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
          >
            {continents.map((continent, index) => (
              <option key={index} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-12 justify-center">
        {filteredCountries.map(
          (country: any): JSX.Element => (
            <Country country={country} key={country.name.common} />
          )
        )}
      </div>
    </section>
  );
};

export default Countries;
