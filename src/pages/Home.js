import { useContext } from "react";
import App, { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// no need to use props anymore

const Home = () => {
  const { username } = useContext(AppContext);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <h1>
      This is the home page and the user is {username}
      <p>{data?.fact}</p>
      <button onClick={refetch}> Update data </button>
    </h1>
  );
};

export default Home;
