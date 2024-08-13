import { useEffect, useState } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]); // state to handle the data (users)
  // users: name of the state
  // setUsers: name of the function to set the state

  useEffect(() => {
    getUsers();

    async function getUsers() {
      const data = localStorage.getItem("users"); // get data from local storage

      let usersData = [];

      if (data) {
        // if data exists in local storage
        usersData = JSON.parse(data); // parse the data from string to javascript array
      } else {
        // if data does not exist in local storage fetch the data from the API
        usersData = await fetchUsers(); // fetch the data from the API
      }

      console.log(usersData);
      setUsers(usersData); // set the users state with the data from local storage
    }
  }, []);

  async function fetchUsers() {
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"); // fetch the data from the API
    const data = await response.json(); // parse the data from string to javascript array
    localStorage.setItem("users", JSON.stringify(data)); // save the data to local storage
    return data; // return the data
  }

  return (
    <section className="page">
      <section className="grid">
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </section>
    </section>
  );
}
