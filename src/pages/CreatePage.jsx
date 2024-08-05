import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [image, setImage] = useState("");

  async function createUser(event) {
    event.preventDefault();

    const newUser = {
      // key/name: value from state
      name: name,
      title: title,
      mail: mail,
      image: image
    };

    const data = localStorage.getItem("users"); // get data from local storage
    console.log(data);
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array

    usersData.push(newUser); // add the new user to the array
    localStorage.setItem("users", JSON.stringify(usersData)); // save the users array to local storage

    navigate("/"); // navigate to the home page
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
