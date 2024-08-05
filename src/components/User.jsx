export default function User({ user }) {
  return (
    <article>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.title}</p>
      <p>{user.mail}</p>
    </article>
  );
}
