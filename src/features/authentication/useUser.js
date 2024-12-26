import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

function useUser() {
  const {
    data: user,
    isLoading: isGettingUser,
    isAuthenticated = user?.role === "authenticated",
  } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  return { user, isGettingUser, isAuthenticated };
}

export default useUser;
