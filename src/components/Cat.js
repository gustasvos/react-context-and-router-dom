import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Cat = () => {
  const { data: catData } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  return (
    <div>
      <h1> {catData?.fact} </h1>
    </div>
  );
};
