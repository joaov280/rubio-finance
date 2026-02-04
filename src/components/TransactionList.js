function TransactionList({ transactions, onDelete }) {
  return (
    <div className="list">
      <h2>Transações</h2>

      {transactions.length === 0 ? (
        <p>Nenhuma transação ainda</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id} className={t.type}>
              <span>{t.category}</span>

              <span>
                {t.type === "entrada" ? "+" : "-"} R${" "}
                {Number(t.amount).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })}
              </span>

              <button onClick={() => onDelete(t.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
