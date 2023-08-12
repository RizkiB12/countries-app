import { useQuery, gql } from "@apollo/client";
import { Toaster } from "react-hot-toast";

const GET_ALL_COUNTRIES = gql`
  {
    countries {
      name
      native
      capital
      code
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

function List() {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);

  if (loading) return <div className="font-semibold text-2xl text-center ">Loading.....</div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-auto mt-4 grid grid-cols-2 gap-4">
      <Toaster />
      {data.countries.map(({ name, native, capital, code, currency, emoji }) => (
        <div key={code} className="col-span-1 flex flex-col bg-white p-4 rounded-lg">
          <div className="flex justify-start py-2">
            <div className="font-semibold">Name:</div>
            <div className="ml-1">{name}</div>
          </div>
          <hr />
          <p className="mt-3">Flag: {emoji}</p>
          <p>Native: {native}</p>
          <p>Capital: {capital}</p>
          <p>Currency: {currency}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
