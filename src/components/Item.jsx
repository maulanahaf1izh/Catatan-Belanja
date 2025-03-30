export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => {
          return onToggleItem(item.id);
        }}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button
        onClick={() => {
          return onDeleteItem(item.id);
        }}
      >
        <p> &times;</p>
      </button>
    </li>
  );
}
