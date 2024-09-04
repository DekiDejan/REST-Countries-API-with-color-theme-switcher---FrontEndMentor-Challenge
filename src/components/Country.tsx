type CountryProps = {
  item: any;
};

const Country = ({ item }: CountryProps) => {
  return (
    <div className="bg-white dark:bg-dark-blue shadow-md w-80 h-96 rounded-lg overflow-hidden cursor-pointer">
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
  );
};

export default Country;
