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

const bankAccountsDiv = document.createElement("div")
bankAccountsDiv.className = "bank-list-div"
mainFragment.appendChild(bankAccountsDiv)

