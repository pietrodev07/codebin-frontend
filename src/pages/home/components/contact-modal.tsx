import { Dispatch, SetStateAction } from "react";

import { Modal } from "@/components/core/modal";
import { useContact } from "../hooks/use-contact";
import { getInputClass, getTextareaClass } from "@/utils/get-class";

interface ContactModal {
  isOpen: boolean;
  closeOverlayAction: Dispatch<SetStateAction<boolean>>;
}

export const ContactModal = ({ isOpen, closeOverlayAction }: ContactModal) => {
  const { actions, validators, isDirty, user } = useContact();

  return (
    <Modal isOpen={isOpen} closeOverlayAction={closeOverlayAction}>
      <form
        className="flex w-96 flex-col gap-6 max-sm:w-72"
        onSubmit={actions.handleSubmit}
      >
        <h1 className="title">Contact us</h1>

        <input
          className={getInputClass(isDirty.email, validators.isEmailValid)}
          placeholder="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={actions.handleChange}
          aria-label="Email"
        />

        <input
          className={getInputClass(isDirty.name, validators.isNameValid)}
          placeholder="Name"
          name="name"
          type="text"
          value={user.name}
          onChange={actions.handleChange}
          aria-label="Name"
        />

        <textarea
          className={getTextareaClass(isDirty.message, validators.isMessageValid)}
          placeholder="Message"
          name="message"
          value={user.message}
          onChange={actions.handleChange}
          rows={5}
        />

        <button
          className="btn btn-solid-primary border border-border"
          type="submit"
          disabled={!validators.isFormValid}
          aria-disabled={!validators.isFormValid}
        >
          Contact us
        </button>
      </form>
    </Modal>
  );
};
