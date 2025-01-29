import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs() {
  const dialogs = [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Сергей" },
    { id: 4, name: "Анна" },
  ];

  const messages = [
    { id: 1, message: "Привет! Как дела?" },
    { id: 2, message: "Что нового?" },
    { id: 3, message: "Давно не виделись!" },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogs.map(dialog => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={styles.dialogs__messages}>
        {messages.map(message => (
          <Message key={message.id} message={message.message} />
        ))}
        <div className={styles.dialogs__input}>
          <textarea className={styles.dialogs__textarea} placeholder="Написать сообщение..."></textarea>
          <button className={styles.dialogs__button}>Отправить</button>
        </div>
      </div>
    </div>
  );
}