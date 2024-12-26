import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryFn: getCabins,
    queryKey: ["cabins"],
  });

  return { isLoading, cabins, error };
}

export default useCabins;
