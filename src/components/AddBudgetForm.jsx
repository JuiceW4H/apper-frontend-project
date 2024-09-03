import { useEffect, useRef } from "react";

import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const pointerRef = useRef();

    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            pointerRef.current.focus()
        }
    }, [isSubmitting])

  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Create Budget
        </h2>
        <fetcher.Form method="post" className="grid-sm" ref={formRef}>
           <div className="grid-sm">
            <label htmlFor="newBudget">
                Budget Name
            </label>
            <input type="text" name="newBudget" id="newBudget" placeholder="e.g., Food" required ref={pointerRef}/>
           </div>
           <div className="grid-xs">
                <label htmlFor="newBudgetAmount">Amount</label>
                <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., $350" required inputMode="decimal" />
           </div>
           <input type="hidden" name="_action" value="createBudget" />
           <button type="submit" className="btn btn--dark" disable={isSubmitting}>
           {
            isSubmitting ? <span>Submitting…</span> : (
              <>
                <span>Create Budget</span>
                <CurrencyDollarIcon width={20} />
              </>
            )
          }
           </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm