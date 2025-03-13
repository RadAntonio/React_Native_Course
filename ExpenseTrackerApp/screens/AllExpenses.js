import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);

  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No register expanses found"/>
}
export default AllExpenses;
