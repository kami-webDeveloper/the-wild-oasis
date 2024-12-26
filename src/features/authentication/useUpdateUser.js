import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: updateCurrUser,

    onSuccess: ({ user }) => {
      toast.success("User data updated successfuly");
      queryClient.setQueryData(["user"], user);
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdatingUser };
}

export default useUpdateUser;
