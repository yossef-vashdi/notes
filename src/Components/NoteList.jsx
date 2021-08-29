import React from "react";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { getNotes } from "./ServerCommunication/Notes";

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: [],
    };
  }
  async componentDidMount() {
    const data = await getNotes();
    data.response.reverse();
    this.setState({ noteList: data.response });
    // console.log("typing from component did mount");
    // console.log(data);
  }
  // async request() {
  // const data = await getNotes();
  // this.setState(data.response);
  // console.log(data.response);
  // }
  render() {
    // console.log(this.state.noteList[0]);
    // this.request();
    return (
      <div>
        <AddNote />

        <hr />
        {this.state.noteList[0] &&
          this.state.noteList.map((item) => {
            // console.log(item);
            return <NoteItem key={item._id} item={item} />;
          })}
      </div>
    );
  }
}

export default NoteList;
