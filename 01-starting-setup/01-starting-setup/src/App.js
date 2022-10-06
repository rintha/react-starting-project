import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Vacation",
      amount: 500,
      date: new Date(2021, 2, 2),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expenses) => {
        return (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
            key={expenses.id}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
