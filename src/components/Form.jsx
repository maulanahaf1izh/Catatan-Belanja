import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      return;
    }

    const newItem = {
      name: name,
      quantity: quantity,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem);

    console.log(newItem);

    setName("");
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form id="add-form" className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => {
            return setQuantity(Number(e.target.value));
          }}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="Masukkan nama barang..."
          value={name}
          onChange={(e) => {
            return setName(e.target.value);
          }}
        />
      </div>
      <button>
        <p>TAMBAH</p>
      </button>
    </form>
  );
}
