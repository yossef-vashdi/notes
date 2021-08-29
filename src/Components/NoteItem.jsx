import React from "react";
import { deleteNotes, editNotes } from "./ServerCommunication/Notes";
import Modal from "react-modal";
import AddNote from "./AddNote";
Modal.setAppElement("#root");

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
    };
  }
  componentDidMount() {
    // console.log(this.props.item);
  }
  async deleteNote() {
    // console.log(" i want to delete this note");
    // console.log(this.props.item._id);
    // const data = await deleteNotes(this.props.item._id);
    // console.log(data);
    await deleteNotes(this.props.item._id);
    window.location.reload();
  }

  async editNote() {
    this.setState({ modalStatus: true });
  }
  handleCloseModal() {
    this.setState({ modalStatus: false });
  }

  render() {
    return (
      <div className="note">
        <Modal
          isOpen={this.state.modalStatus}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => this.handleCloseModal()}
          // style={customStyles}
          // contentLabel="Example Modal"
        >
          <AddNote item={this.props.item} />
        </Modal>
        <div className="note-item-title">
          <pre> {`${this.props.item.title}`}</pre>
          <pre> {`${this.props.item.createdAt.slice(0, 10)}`}</pre>
        </div>

        <pre>{`${this.props.item.note}`}</pre>
        <div className="note-item-buttons">
          <button
            onClick={() => {
              this.editNote();
            }}
          >
            edit
          </button>
          <button
            onClick={() => {
              this.deleteNote();
            }}
          >
            delete
          </button>
        </div>

        <hr />
      </div>
    );
  }
}

export default NoteItem;
