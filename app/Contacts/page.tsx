
'use client'
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { Toaster } from "react-hot-toast";
import ContactsForm from "@/components/ContactsForm/ContactsForm";
import css from "./Contacts.module.css";
import RunningText from "@/components/RunningText/RunningText";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
      <section className={css.contactSection}>
          <RunningText/>
  <div className={css.container}>
    <h1 className={css.title}>
      LET’S <span>WORK</span><br />TOGETHER
    </h1>

    <div className={css.flexContainer}>
      <div className={css.leftColumn}>
        <p className={css.subtitle}>
          Contact me to transform your ideas into exceptional solutions.
        </p>
        
        <button className={css.sendBtn} onClick={() => setIsModalOpen(true)}>
          Send Message
        </button>
      </div>
      <div className={css.rightColumn}>
        <ul className={css.contactsList}>
          <li><a href="mailto:ann.malchevska@gmail.com">ann.malchevska@gmail.com</a></li>
          <li>Ukraine</li>
        </ul>
      </div>
    </div>
          </div>
           {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ContactsForm onCancel={() => setIsModalOpen(false)} />
        </Modal>
          )}
           <Toaster position="top-right" />
</section>
  );
}