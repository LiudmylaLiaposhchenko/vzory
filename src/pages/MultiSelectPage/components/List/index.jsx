import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);
  const [numSelected, setNumSelected] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      <div className="number-items">{numSelected}</div>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onSelect={(selected) =>
            setNumSelected(selected ? numSelected + 1 : numSelected - 1)
          }
        />
      ))}
    </div>
  );
};
