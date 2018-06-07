const firstDiv = document.getElementById("whole-page")
const myFragment = document.createDocumentFragment()

// main financials div
const financialsDiv = () => {
const financialsContainerDiv = document.createElement("div")
financialsContainerDiv.className = "financials-container-div"
myFragment.appendChild(financialsContainerDiv)

// bank accounts list
const bankAccountsDiv = document.createElement("div")
financialsContainerDiv.appendChild(bankAccountsDiv)

const bankAccountsHeadline = document.createElement("h2")
bankAccountsHeadline.innerHTML = "Bank Accounts"
bankAccountsDiv.appendChild(bankAccountsHeadline)

const bankAccountList = ["Gotham City Central Bank - Account #89034593", "HSBC New York - Account #05529588", "UBS        Group AG - Account #376408365", "CIM Bank - Account #058988324"]
const bankAccountsListUl = document.createElement("ul")
bankAccountsDiv.appendChild(bankAccountsListUl)

for (let banks in bankAccountList) {
    let li = document.createElement("li")
    li.innerHTML = bankAccountList[banks]
    bankAccountsListUl.appendChild(li)
}

// businesses list
const businessesDiv = document.createElement("div")
financialsContainerDiv.appendChild(businessesDiv)

const businessesHeadline = document.createElement("h2")
businessesHeadline.innerHTML = "Businesses"
businessesDiv.appendChild(businessesHeadline)

const businessesList = ["Landmark Financial", "RPM Consulting", "Blue Wave Investments"]
const businessesListUl = document.createElement("ul")
businessesDiv.appendChild(businessesListUl)

for (let businesses in businessesList) {
    let li = document.createElement("li")
    li.innerHTML = businessesList[businesses]
    businessesListUl.appendChild(li)
}

// officials blackmailed list
const officialsBlackmailedDiv = document.createElement("div")
financialsContainerDiv.appendChild(officialsBlackmailedDiv)

const officialsBlackmailedHeadline = document.createElement("h2")
officialsBlackmailedHeadline.innerHTML = "Officials Blackmailed"
officialsBlackmailedDiv.appendChild(officialsBlackmailedHeadline)

const officialsBlackmailedList = ["Harvey Dent", "Theodore Cobblepot", "Edward Elliot", "Alan Wayne"]
const officialsBlackmailedListUl = document.createElement("ul")
officialsBlackmailedDiv.appendChild(officialsBlackmailedListUl)

for (let officials in officialsBlackmailedList) {
    let li = document.createElement("li")
    li.innerHTML = officialsBlackmailedList[officials]
    officialsBlackmailedListUl.appendChild(li)
}

// money-laundering businesses list
const moneyLaunderingDiv = document.createElement("div")
financialsContainerDiv.appendChild(moneyLaunderingDiv)

const moneyLaunderingHeadline = document.createElement("h2")
moneyLaunderingHeadline.innerHTML = "Money-Laundering Businesses"
moneyLaunderingDiv.appendChild(moneyLaunderingHeadline)

const moneyLaunderingList = ["Red Hood Spirts", "Gotham City Auto", "Soloman Real Estate", "Maple Syrup Brokering"]
const moneyLaunderingListUl = document.createElement("ul")
moneyLaunderingDiv.appendChild(moneyLaunderingListUl)

for (let moneyLaundering in moneyLaunderingList) {
    let li = document.createElement("li")
    li.innerHTML = moneyLaunderingList[moneyLaundering]
    moneyLaunderingListUl.appendChild(li)
}



myFragment.appendChild(financialsContainerDiv)

}
const buildFinInt = () => {


while (firstDiv.firstChild){
    firstDiv.removeChild(mainDiv.firstChild)
}

financialsDiv()
firstDiv.appendChild(myFragment)
}
