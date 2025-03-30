import { useState } from "react";
import Item from "./Item";

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => {
        return a.checked - b.checked;
      });
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <div id="list" className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div id="actions" className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            return setSortBy(e.target.value);
          }}
        >
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>
          <p>Bersihkan Daftar</p>
        </button>
      </div>
    </>
  );
}
