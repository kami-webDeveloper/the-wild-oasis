/* eslint-disable react/prop-types */
import { HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteCabin from "./useDeleteCabin";

function DeleteCabin({ cabinId }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <Modal>
      <Modal.Open opens="delete">
        <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
          <HiTrash />
        </button>
      </Modal.Open>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="Cabin"
          onConfirm={() => deleteCabin(cabinId)}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteCabin;
