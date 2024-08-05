// Hvad er fejlen her og hvordan løses den?

const ItemList = () => {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
