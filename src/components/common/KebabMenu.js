import React, { useState } from "react";
import DeleteModal from "../modal/DeleteModal";
import AddEditBoardModal from "../modal/AddEditBoardModal";
import AddEditTaskModal from "../modal/AddEditTaskModal";

const KebabMenu = ({ type, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const onEditClicked = (e) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
  };

  const onDeleteClicked = (e) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  return (
    <div>
      <div className="kebab-menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="point" />
        <div className="point" />
        <div className="point" />
      </div>
      {isOpen && (
        <div className="kebab-dropdown">
          <div className="text-l edit" onClick={onEditClicked}>
            Edit {type}
          </div>
          <div className="text-l delete" onClick={onDeleteClicked}>
            Delete {type}
          </div>
        </div>
      )}
      {isEditModalOpen &&
        (type == "board" ? (
          <AddEditBoardModal isEdit={true} setIsOpen={setIsEditModalOpen} />
        ) : (
          <AddEditTaskModal
            setIsOpen={setIsEditModalOpen}
            isEdit={true}
            task={data}
          />
        ))}
      {isDeleteModalOpen && (
        <DeleteModal type={type} data={data} setIsOpen={setIsDeleteModalOpen} />
      )}
    </div>
  );
};

export default KebabMenu;
