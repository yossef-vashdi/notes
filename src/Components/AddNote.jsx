import React from "react";

import { addnote, editNotes } from "./ServerCommunication/Notes";

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
    };
  }
  componentDidMount() {
    if (this.props.item) {
      this.setState({
        note: this.props.item.note,
        title: this.props.item.title,
      });
    }
  }

  handleInput(target) {
    // console.log(target.value);
    this.setState({ [target.name]: target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    // const data = await addnote(this.state);
    if (this.props.item) await editNotes(this.state, this.props.item._id);
    else await addnote(this.state);
    window.location.reload();
    // console.log(data);
  }
  render() {
    return (
      <div>
        <form
          action=""
          className="noteForm"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleInput(e.target)}
          />
          <label htmlFor="Note">Note</label>
          <textarea
            name="note"
            id="note"
            cols="30"
            rows="10"
            value={this.state.note}
            onChange={(e) => this.handleInput(e.target)}
          ></textarea>

          <button type="submit" value="Submit">
            {this.props.item ? "edit" : "submit"}
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
