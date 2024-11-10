import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}
function ListGroup({items, heading, onItemSelect}: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
        <h1>{heading}</h1>
        {items.length === 0 && <p>No element found!</p>}
        {items.map((item, index) => (
          <li
            onClick={() => {
              setselectedIndex(index);
              onItemSelect(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
