import { Modal } from "@/components/core/modal";

interface ConfirModalProps {
  isOpen: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirModal = ({
  isOpen,
  title,
  onCancel,
  onConfirm,
}: ConfirModalProps) => {
  return (
    <Modal isOpen={isOpen}>
      <h2 className="pr-8 text-xl font-semibold">{title}</h2>

      <div className="flex gap-5">
        <button
          className="btn-solid btn btn-block border border-border"
          onClick={onCancel}
        >
          No
        </button>

        <button
          className="btn btn-block btn-solid-error border border-border"
          onClick={onConfirm}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};
