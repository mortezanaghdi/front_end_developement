import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {getDatabase,
        ref,
        push,
        onValue,
        remove
        } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-c4c8e-default-rtdb.europe-west1.firebasedatabase.app/"
    // databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick", function() {
   remove(referenceInDB)
   ulEl.innerHTML = ""
})

onValue(referenceInDB, function(snapshot) {
    const snapshotExist = snapshot.exists()
    if (snapshotExist) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href='https://${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>`
    }

    ulEl.innerHTML = listItems
}






