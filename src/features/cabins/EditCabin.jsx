/* eslint-disable react/prop-types */
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function EditCabin({ cabin, children }) {
  return (
    <Modal>
      <Modal.Open opens="edit">{children}</Modal.Open>
      <Modal.Window name="edit">
        <CreateCabinForm cabinToEdit={cabin} />
      </Modal.Window>
    </Modal>
  );
}

export default EditCabin;
