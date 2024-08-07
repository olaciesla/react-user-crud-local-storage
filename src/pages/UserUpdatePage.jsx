import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("users");
    const usersData = JSON.parse(data) || [];
    const user = usersData.find(user => user.id === params.id);
    setName(user.name);
    setTitle(user.title);
    setMail(user.mail);
    setImage(user.image);
  }, [params.id]); // <--- "[params.id]" VERY IMPORTANT!!!

  async function updateUser(event) {
    event.preventDefault();

    const userToUpdate = {
      // key/name: value from state
      name: name,
      title: title,
      mail: mail,
      image: image
    };

    const data = localStorage.getItem("users");
    const usersData = JSON.parse(data) || [];
    const updatedUsers = usersData.map(user => {
      if (user.id === params.id) {
        return { ...user, ...userToUpdate };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate(`/users/${params.id}`);
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <section className="page">
      <h1>Update</h1>
      <form className="create-form" onSubmit={updateUser}>
        <label htmlFor="">Name</label>
        <input id="name" type="text" value={name} placeholder="Type a name" onChange={e => setName(e.target.value)} />
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
        <label htmlFor="mail">Mail</label>
        <input id="mail" type="mail" value={mail} placeholder="Type a mail" onChange={e => setMail(e.target.value)} />
        <label htmlFor="mail">Image URL</label>
        <input type="url" value={image} placeholder="Paste image url" onChange={e => setImage(e.target.value)} />
        <label htmlFor="image-preview"></label>
        <img
          id="image-preview"
          className="image-preview"
          src={image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"}
          alt="Choose"
          onError={e => (e.target.src = "https://placehold.co/600x400?text=Error+loading+image")}
        />
        <div className="btns">
          <button>Save</button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
