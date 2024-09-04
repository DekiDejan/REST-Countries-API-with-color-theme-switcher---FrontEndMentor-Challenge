import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const country = countries.find(
    (c: any) => c.name.common.toString() === countryId
  );

  console.log(country); /////////////////////////////////////////////////////////////////

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{countryId}</h1>
    </div>
  );
};

export default CountryDetails;
