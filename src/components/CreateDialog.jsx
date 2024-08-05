import { useState } from "react";

export default function CreateDialog() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [image, setImage] = useState("");

  async function createUser(event) {
    event.preventDefault(); // prevent the default form submission
    const user = { name, title, mail, image }; // create a user object
    console.log(user);

    const data = localStorage.getItem("users"); // get data from local storage
    console.log(data);
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    console.log(usersData);
    usersData.push(user); // add the new user to the array
    console.log(usersData);
    localStorage.setItem("users", JSON.stringify(usersData)); // save the array back to local storage
  }

  return (
    <section className="page">
      <h1>Create New User</h1>
      <form onSubmit={createUser}>
        <input type="text" value={name} placeholder="Type a name" onChange={e => setName(e.target.value)} />
        <input type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
        <input type="mail" value={mail} placeholder="Type a mail" onChange={e => setMail(e.target.value)} />
        <input type="url" value={image} placeholder="Paste image url" onChange={e => setImage(e.target.value)} />
        {image && <img className="image-preview" src={image} alt="Choose" />}
        <button>Save</button>
      </form>
    </section>
  );
}
