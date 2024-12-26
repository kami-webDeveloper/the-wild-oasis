import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading: isLogingIn } = useMutation({
    mutationFn: (loginObj) => login(loginObj),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashbord", { replace: true });
    },

    onError: () => {
      toast.error("Invalid email or password!");
    },
  });

  return { isLogingIn, loginUser };
}

export default useLogin;
