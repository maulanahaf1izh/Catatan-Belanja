export default function Footer({ items }) {
  if (items.length === 0) {
    return (
      <footer id="stats" className="stats">
        <p>
          Daftar belanjaan <br />
          masih kosong
        </p>
      </footer>
    );
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => {
    return item.checked;
  }).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer id="stats" className="stats">
      <p>
        Ada {totalItems} barang di daftar belanjaan, <br />
        {checkedItems} barang sudah dibeli ({percentage}%)
      </p>
    </footer>
  );
}
