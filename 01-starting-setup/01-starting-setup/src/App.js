import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      location: "Boston",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "City",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      location: "Banglore",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      location: "Jaipur",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Vacation",
      location: "Goa",
      amount: 500,
      date: new Date(2021, 2, 2),
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expenses) => {
        return (
          <ExpenseItem 
          title={expenses.title}
            location={expenses.location}
            amount={expenses.amount}
            date={expenses.date}
            key={expenses.id}
          ></ExpenseItem>
        );
      })}
      {/* <ExpenseItem
        title={expenses[0].title}
        location={expenses[0].location}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        location={expenses[1].location}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        location={expenses[2].location}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        location={expenses[3].location}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
