import { Form, useFetcher } from "react-router-dom";
import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../helpers";
import { TrashIcon } from "@heroicons/react/24/solid";

const BudgetItem = ({budget, expense, showDelete = true}) => {
  const {id, name, amount, color} = budget;
  const spent = calculateSpentByBudget(id);
  const fetcher = useFetcher()

    return (
    <div className="budget" style={{"--accent": color}}>
        <div className="progress-text">
            <h3>{name}</h3>
            <p>{formatCurrency(amount)} Budgeted</p>
        </div>
        <progress max={amount} value={spent}>
            {formatPercentage(spent/amount)}
        </progress>
        <div className="progress-text">
            <small>{formatCurrency(spent)}{" "}spent</small>
            <small>{formatCurrency(amount - spent)}{" "}remaining</small>
        </div>
        <div className="flex-sm">
          {
            showDelete && (
            <fetcher.Form
              method="post"
              onSubmit={(event) => {
                if (!confirm("Are you sure you want to delete this budget?")) {
                  event.preventDefault()
                }
              }}>
                <input type="hidden" name="_action" value="deleteBudget" />
                <input type="hidden" name="budgetId" value={budget.id} />
              <button type="submit" className="btn btn--warning">
                <span>Delete Budget</span>
                <TrashIcon width={20} />
              </button>

            </fetcher.Form>
          )
        }
      </div>
    </div>
  )
}

export default BudgetItem