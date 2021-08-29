const addnote = async (newNote) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newNote),
  };
  const response = await fetch("http://localhost:5050/notes", requestOptions);
  //   console.log(response);
  const data = await response.json();

  return data;
};
const getNotes = async (noteID) => {
  const response = await fetch("http://localhost:5050/notes");
  const data = await response.json();
  return data;
};

const deleteNotes = async (noteID) => {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(
    `http://localhost:5050/notes/${noteID}`,
    requestOptions
  );
  //   console.log(response);
  const data = await response.json();

  return data;
};

const editNotes = async (newNote, noteID) => {
  // console.log(newNote);
  const { title, note } = newNote;
  const editedNote = { title, note };
  // console.log(editedNote);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedNote),
  };
  const response = await fetch(
    `http://localhost:5050/notes/${noteID}`,
    requestOptions
  );
  //   console.log(response);
  const data = await response.json();

  return data;
};

export { addnote, getNotes, deleteNotes, editNotes };
