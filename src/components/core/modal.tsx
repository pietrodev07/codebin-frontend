import clsx from "clsx";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  closeOverlayAction?: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ isOpen, children, closeOverlayAction }: ModalProps) => {
  return (
    <div
      className={clsx(
        "modal",
        isOpen && "visible translate-y-0 scale-100 opacity-100",
      )}
    >
      {closeOverlayAction && (
        <div className="modal-overlay" onClick={() => closeOverlayAction(false)} />
      )}

      <div
        className={clsx(
          "modal-content flex flex-col gap-5 rounded-xl border border-border bg-gray-2 p-6",
          isOpen && "translate-y-0 scale-100",
        )}
      >
        {children}
      </div>
    </div>
  );
};
