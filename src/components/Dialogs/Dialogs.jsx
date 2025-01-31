import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { createSendMessageAction, createMessageInputChangeAction } from "../redux/dialogs-reducer";

export default function Dialogs({ dialogs, dispatch }) {
  const handleSendMessage = () => {
    dispatch(createSendMessageAction());
  };

  const handleMessageInputChange = (e) => {
    dispatch(createMessageInputChangeAction(e.target.value));
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogs.dialogs.map((dialog) => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={styles.dialogs__messages}>
        {dialogs.messages.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <div className={styles.dialogs__input}>
          <textarea
            className={styles.dialogs__textarea}
            placeholder="Написать сообщение..."
            value={dialogs.newMessageText}
            onChange={handleMessageInputChange}
          ></textarea>
          <button className={styles.dialogs__button} onClick={handleSendMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
