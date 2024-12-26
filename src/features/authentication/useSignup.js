import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useSignup() {
  const navigate = useNavigate();

  const { isLoading: isSigningUp, mutate: signupUser } = useMutation({
    mutationFn: (dataObj) => signup(dataObj),

    onSuccess: () => {
      toast.success(
        "User signed up successfuly. Verify new account from the user's email address"
      );

      navigate("/");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isSigningUp, signupUser };
}

export default useSignup;
