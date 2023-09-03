import "./ListItem.css";

const ListItem = ({ listItem }) => {
  return (
    <li className="list-item">
      <img src={listItem.image.img} alt={listItem.image.imgAlt} />
      <h2>{listItem.title}</h2>
      <p>{listItem.description}</p>
    </li>
  );
};

export default ListItem;
