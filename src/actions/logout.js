import { toast } from "react-toastify";

import { redirect } from "react-router-dom";

import { deleteItem } from "../helpers";

export async function logoutAction() {
  deleteItem({
    key: "userName"
  })
  toast.success("You're account has been deleted.")
  return redirect("/")
}