import { useEffect, useState } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]); // state to handle the data (users)
  // users: name of the state
  // setUsers: name of the function to set the state

  useEffect(() => {
    const data = localStorage.getItem("users"); // get data from local storage
    console.log(data);
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    console.log(usersData);
    setUsers(usersData); // set the users state with the data from local storage
  }, []);

  // useEffect(() => {
  //   if (users.length === 0) {
  //     fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json")
  //       .then(response => response.json())
  //       .then(data => {
  //         setUsers(data); // set the users state with the data from the API
  //       });
  //   }
  //   localStorage.setItem("users", JSON.stringify(users)); // save the users state to local storage
  // }, [users]);

  return (
    <section className="page">
      <h1>Users</h1>
      <section className="grid">
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </section>
    </section>
  );
}
