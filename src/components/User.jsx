export default function User({ name, mail, image, title }) {
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{mail}</p>
    </div>
  );
}
