import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [type, setType] = useState("entrada");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    onAdd({
      id: Date.now(),
      type: type.toLowerCase(),
      amount: parseFloat(amount),
      category
    });

    setAmount("");
    setCategory("");
    setType("entrada");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>

      <input
        type="number"
        step="0.01"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TransactionForm;
