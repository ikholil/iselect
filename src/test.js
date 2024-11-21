import { Iselect } from "iselect"

const selects = document.querySelectorAll("select")
selects.forEach((select) => {
    new Iselect(select)
})