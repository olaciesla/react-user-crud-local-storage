import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import CreateDialog from "./components/CreateDialog";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("users"); // get data from local storage
    console.log(data);
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    console.log(usersData);
    setUsers(usersData); // set the users state with the data from local storage
  }, []);

  useEffect(() => {}, []);

  return (
    <main>
      <h1>User CRUD</h1>
      <section className="grid">
        {users.map(user => (
          <User key={user.id} name={user.name} mail={user.mail} image={user.image} title={user.title} />
        ))}
      </section>
      <CreateDialog />
    </main>
  );
}

export default App;
