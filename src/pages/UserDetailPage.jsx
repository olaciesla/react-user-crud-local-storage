import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetailPage() {
  const [user, setUser] = useState([]); // state to handle the data (user)
  const params = useParams();
  const navigate = useNavigate();

  //the side effect - fetch user
  useEffect(() => {
    const data = localStorage.getItem("users"); // get data from local storage
    console.log(data);
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    console.log(usersData);
    const user = usersData.find(user => user.id === params.id); // find the user with the id from the params
    setUser(user); // set the user state with the data from local storage
  }, [params.id]); // <--- "[params.id]" VERY IMPORTANT!!!

  function showDeleteDialog() {
    const shouldDelete = window.confirm(`Do you want to delete "${user.name}"?`);
    if (shouldDelete) {
      deleteUser();
    }
  }

  async function deleteUser() {
    const data = localStorage.getItem("users"); // get data from local storage
    console.log(data);
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    console.log(usersData);
    const updatedUsers = usersData.filter(user => user.id !== params.id); // filter out the user with the id from the params
    console.log(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // save the users state to local storage
    navigate("/"); // navigate to the home page
  }

  function showUpdate() {
    navigate(`/users/${params.id}/update`);
  }

  return (
    <section className="page">
      <article className="user-detail">
        <img src={user.image} alt={user.name} />
        <section>
          <h1>{user.name}</h1>
          <p>{user.title}</p>
          <p>
            <a href={`mailto: ${user.mail}`}>{user.mail}</a> | <a href={`tel: ${user.phone}`}>{user.phone}</a>
          </p>
          <button onClick={showUpdate}>Update user</button>
          <button className="btn-outline" onClick={showDeleteDialog}>
            Delete user
          </button>
        </section>
      </article>
    </section>
  );
}
