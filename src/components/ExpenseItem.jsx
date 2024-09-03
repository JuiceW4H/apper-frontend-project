import { useFetcher } from "react-router-dom"
import { formatCurrency, formatDate, getAllMatchingItems } from "../helpers"
import { TrashIcon } from "@heroicons/react/24/solid"

const ExpenseItem = ({ expense }) => {
  const fetcher = useFetcher()

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDate(expense.createAt)}</td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button type="submit" className="btn btn--warning" aria-label={`Delete ${expense.name} expense`}>
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  )
}
export default ExpenseItem