import React from "react";
import { connect } from "react-redux";
import { createSendMessageAction, createMessageInputChangeAction } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer({ dialogs, sendMessage, updateMessageInput }) {
  return <Dialogs dialogs={dialogs} sendMessage={sendMessage} updateMessageInput={updateMessageInput} />;
}

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage,
});

const mapDispatchToProps = {
  sendMessage: createSendMessageAction,
  updateMessageInput: createMessageInputChangeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
