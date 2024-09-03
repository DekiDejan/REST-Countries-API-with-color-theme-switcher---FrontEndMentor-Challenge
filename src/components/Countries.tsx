import { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState<null | []>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <section className="m-6">
      <div className="flex flex-wrap gap-12 justify-center">
        {data?.map((item: any) => (
          <div
            key={item.name.common}
            className="bg-white dark:bg-dark-blue shadow-md w-80 h-96 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="w-80 h-48">
              <img
                src={item.flags.png}
                alt={`${item.name.common} flag`}
                className="w-full h-full object-cover aspect-[2/1]"
              />
            </div>
            <div className="mx-4 my-6">
              <p className="font-bold mb-4">
                {item.name.common === "North Macedonia"
                  ? "Republic of Macedonia"
                  : item.name.common}
              </p>
              <p>
                <span className="font-bold text-sm">Population: </span>
                {new Intl.NumberFormat("en-US").format(item.population)}
              </p>
              <p>
                <span className="font-bold text-sm">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="font-bold text-sm">Capital: </span>
                {item.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
