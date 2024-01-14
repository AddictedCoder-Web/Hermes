import { Modal } from "antd";
import { useState, forwardRef, useImperativeHandle } from "react";
export const BaseModal = forwardRef(function (props, ref) {
  const { ELementChildren } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useImperativeHandle(
    ref,
    () => {
      return { showModal: showModal, closeModal: closeModal };
    },
    []
  );
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ top: "160px" }}
    >
      {ELementChildren}
    </Modal>
  );
});
