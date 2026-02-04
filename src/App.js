import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./style.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions(prev => [...prev, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const total = transactions.reduce((acc, t) => {
    const value = Number(t.amount) || 0;
    return t.type === "entrada" ? acc + value : acc - value;
  }, 0);

  return (
    <div className="container">
      <div className="header">
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <div>
          <h1>Rubio Finance</h1>
          <p className="subtitle">Controle simples do seu dinheiro</p>
        </div>
      </div>

      <h2 className={`saldo ${total >= 0 ? "positivo" : "negativo"}`}>
        Saldo Total: R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </h2>

      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;
