import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-40 font-bold text-xl">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center mt-40 font-bold text-xl">Error: {error}</div>
    );

  const filteredItems = data.filter((item: any) =>
    item.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="m-6">
      <div className="w-80 mx-auto my-4 px-8 py-4 bg-white dark:bg-dark-blue shadow-md rounded-lg">
        <input
          className="w-full dark:bg-dark-blue focus:outline-none"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-12 justify-center">
        {filteredItems.map(
          (item: any): JSX.Element => (
            <Country item={item} key={item.name.common} />
          )
        )}
      </div>
    </section>
  );
};

export default Countries;
