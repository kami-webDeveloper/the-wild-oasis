import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isRemovingBooking, mutate: removeBooking } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),

    onSuccess: () => {
      toast.success(`Booking successfuly deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/");
    },

    onError: () =>
      toast.error("There was an error while deleting the Booking!"),
  });

  return { isRemovingBooking, removeBooking };
}

export default useDeleteBooking;
