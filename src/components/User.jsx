import { useNavigate } from "react-router-dom";

export default function User({ user }) {
  // user is a prop containing user data, ex:
  // {id: "...", image: "...", mail: "...", name: "...", phone: "...", title: "..."}
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/users/${user.id}`);
  }

  return (
    <article className="user-card" onClick={handleClick}>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p className="title">{user.title}</p>
      <p>
        <a href={`mailto:${user.mail}`}>{user.mail}</a>
      </p>
    </article>
  );
}
