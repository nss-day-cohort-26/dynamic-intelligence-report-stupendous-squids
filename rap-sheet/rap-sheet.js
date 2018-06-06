const mainDiv = document.getElementById("whole-page")
const mainFragment = document.createDocumentFragment()

// const createUL = (arrayList, nameOfUl, varToAppendTo) => {
//     nameOfUl = document.createElement("ul")
//     varToAppendTo.appendChild(nameOfUl)
//     for (let taco in arrayList) {
//         let li = document.createElement("li")
//         li.innerHTML = arrayList[taco]
//         nameOfUl.appendChild(li)
//     }
// }

const createCrimesDiv = () => {
    const crimesContainerDiv = document.createElement("div")
    crimesContainerDiv.className = "crimes-container-div"
    mainFragment.appendChild(crimesContainerDiv)

    const allegedCrimesDiv = document.createElement("div")
    crimesContainerDiv.appendChild(allegedCrimesDiv)
    
    const allegedCrimesHeadline = document.createElement("h2")
    allegedCrimesHeadline.innerHTML = "Alleged Crimes"
    allegedCrimesDiv.appendChild(allegedCrimesHeadline)

    const allegedCrimesList = ["assualt","breaking and entering","industrial espionage"]
    const allegedCrimesUL = document.createElement("ul")
    allegedCrimesDiv.appendChild(allegedCrimesUL)
    for (let crime in allegedCrimesList) {
        let li = document.createElement("li")
        li.innerHTML = allegedCrimesList[crime]
        allegedCrimesUL.appendChild(li)
    }

    const convictionsDiv = document.createElement("div")
    crimesContainerDiv.appendChild(convictionsDiv)
    
    const convictionsHeadline = document.createElement("h2")
    convictionsHeadline.innerHTML = "Convictions"
    convictionsDiv.appendChild(convictionsHeadline)

    const convictionsList = ["Syrup Laundering","Armed Robbery","Grand Theft Auto","Hit and Run","Murder"]
    const convictionsUL = document.createElement("ul")
    convictionsDiv.appendChild(convictionsUL)
    for (let crime in convictionsList) {
        let li = document.createElement("li")
        li.innerHTML = convictionsList[crime]
        convictionsUL.appendChild(li)
    }

    mainFragment.appendChild(crimesContainerDiv)
}


createCrimesDiv()

mainDiv.appendChild(mainFragment)

