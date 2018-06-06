// const mainDiv = document.getElementById("whole-page")
// const mainFragment = document.createDocumentFragment()

// const createCrimesDiv = () => {
//    const crimesContainerDiv = document.createElement("div")
//    crimesContainerDiv.className = "crimes-container-div"
//    mainFragment.appendChild(crimesContainerDiv)   

//    const allegedCrimesDiv = document.createElement("div")
//    crimesContainerDiv.appendChild(allegedCrimesDiv)
   
//    const allegedCrimesHeadline = document.createElement("h2")
//    allegedCrimesHeadline.innerHTML = "Alleged Crimes"
//    allegedCrimesDiv.appendChild(allegedCrimesHeadline)

//    const allegedCrimesList = ["assualt","breaking and entering","industrial espionage"]
//    const allegedCrimesUL = document.createElement("ul")
//    allegedCrimesDiv.appendChild(allegedCrimesUL)
//    for (let crime in allegedCrimesList) {
//        let li = document.createElement("li")
//        li.innerHTML = allegedCrimesList[crime]
//        allegedCrimesUL.appendChild(li)
//    }

//    mainFragment.appendChild(crimesContainerDiv)
// }
// createCrimesDiv()
// mainDiv.appendChild(mainFragment)

const mainDiv = document.getElementById("whole-page")
const mainFragment = document.createDocumentFragment()

const financialsDiv = () => {
const financialsDiv = document.createElement("div")
financials.className = "financials-div"
mainFragment.appendChild(financialsDiv)

const bankAccountsDiv = document.createElement("div")
financialsDiv.appendChild(bankAccountsDiv)

const bankAccountsHeadline = document.createElement("h2")
bankAccountsHeadline.innerHTML = "Bank Accounts"
bankAccountsDiv.appendChild(bankAccountsHeadline)

const bankAccountList = ["Royal Bank of Canada - Account #89034593", "HSBC Canada - Account #05529588", "UBS        Group AG - Account #376408365, "]
const bankAccountsListUl = document.createAttribute("ul")
bankAccountsDiv.appendChild(bankAccountsListUL)

for (let banks in bankAccountList) {
    let li = document.createElement("li")
    li.innerhtml = bankAccountList[banks]
    bankAccountsListUL.appendChild(li)
}

mainFragment.appendChild(financialsDiv)
}

createFinancialsDiv()
mainDiv.appendChild(mainFragment)

