const mainDiv = document.getElementById("whole-page")
// const pageHead = document.querySelector("head")
// const styleLink = document.createElement("link")
// styleLink.setAttribute("href", "rap-sheet/rs-page-layout.css")
// styleLink.setAttribute("rel", "stylesheet")
const mainFragment = document.createDocumentFragment()

// const crimesContainerDiv = document.createElement("div")
// crimesContainerDiv.className = "crimes-container-div"

// const witVicContainerDiv = document.createElement("div")
// witVicContainerDiv.className = "witness-victim-container"

// const buildContainerDivs = (containerDivName) => {
//     for (let taco in containers)
//     containerDivName = document.createElement("div")
//     containerDivName.className = containerClassName
//     mainFragment.appendChild(containerDivName)
// }

const buildDivAndList = (containerDivName, innerDivName, headlineName, headlineContent, arrayList, listName) => {
    mainFragment.appendChild(containerDivName)

    innerDivName = document.createElement("div")
    containerDivName.appendChild(innerDivName)

    headlineName = document.createElement("h2")
    headlineName.innerHTML = headlineContent
    innerDivName.appendChild(headlineName)

    listName = document.createElement("ul")
    innerDivName.appendChild(listName)
    for (let taco in arrayList) {
        let li = document.createElement("li")
        li.innerHTML = arrayList[taco]
        listName.appendChild(li)
    }

}


const createCrimesDiv = () => {
    const crimesContainerDiv = document.createElement("div")
    crimesContainerDiv.className = "crimes-container-div"
    mainFragment.appendChild(crimesContainerDiv)

    const allegedCrimesDiv = document.createElement("div")
    crimesContainerDiv.appendChild(allegedCrimesDiv)
    
    const allegedCrimesHeadline = document.createElement("h2")
    allegedCrimesHeadline.innerHTML = "Alleged Crimes"
    allegedCrimesDiv.appendChild(allegedCrimesHeadline)

    const allegedCrimesList = ["Assualt","Breaking and Entering","Industrial Espionage"]
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

const createLocationsDiv = () => {
    const locationsDiv = document.createElement("div")
    locationsDiv.className = "locations-container-div"
    mainFragment.appendChild(locationsDiv)

    const locationsHeadline = document.createElement("h2")
    locationsHeadline.innerHTML = "Locations of Incarceration"
    locationsDiv.appendChild(locationsHeadline)

    const locationsUL = document.createElement("ul")
    locationsDiv.appendChild(locationsUL)

    for (let i=0; i<3; i++) {
        const locationsLiDiv = document.createElement("div")
        locationsLiDiv.className = "shadow-box"
        locationsUL.appendChild(locationsLiDiv)
    }
    const locationsArray = ["Bang Kwang Central Prison, Thailand","Washington State Pennetentiary, USA","Topo Chico, Mexico"]
    const imagesArray = ["rap-sheet/images/bang_kwan_central.png","rap-sheet/images/washing_state_penn.png","rap-sheet/images/topo-chico.png"]
    const imageLinksArray = ["https://goo.gl/maps/AZzyRAU3UZ52","https://goo.gl/maps/1DTYdXDggSt","https://goo.gl/maps/zk4yQGXPBq72"]
    const convictionsArray = ["Conviction: Maple Syrup Laundering","Conviction: Grand Theft Auto","Conviction: Murder"]
    const IncarcerationDatesArray = ["Entered: 01/1987 ~ Released under mysterious circumstance 07/1995","Entered: 03/2010 ~ Released: 05/2011","Entered: 11/2011 ~ escaped: 05/2012"]
    for (let i=0; i<locationsUL.childNodes.length; i++){
        const locationsLi = document.createElement("li")
        const locationsPic = document.createElement("img")
        locationsPic.setAttribute("src", imagesArray[i])
        const locationsLink = document.createElement("a")
        locationsLink.setAttribute("href", imageLinksArray[i])
        locationsLink.setAttribute("target", "_blank")
        const locationsInnerHeadline = document.createElement("h3")
        locationsInnerHeadline.innerHTML = `${locationsArray[i]}`
        const locationsNestedUL = document.createElement("ul")
        locationsUL.childNodes[i].appendChild(locationsNestedUL)
        const locationsNestedLI1 = document.createElement("li")
        locationsNestedLI1.innerHTML = convictionsArray[i]
        const locationsNestedLI2 = document.createElement("li")
        locationsNestedLI2.innerHTML = IncarcerationDatesArray[i]
        locationsUL.childNodes[i].appendChild(locationsLi).appendChild(locationsInnerHeadline)
        locationsUL.childNodes[i].appendChild(locationsLink).appendChild(locationsPic)
        locationsUL.childNodes[i].appendChild(locationsNestedUL).appendChild(locationsNestedLI1)
        locationsUL.childNodes[i].appendChild(locationsNestedUL).appendChild(locationsNestedLI2)
    }

}

const createWitVicDiv = () => {
    const witVicContainerDiv = document.createElement("div")
    witVicContainerDiv.className = "witness-victim-container"
    mainFragment.appendChild(witVicContainerDiv)

    const witnessDiv = document.createElement("div")
    witVicContainerDiv.appendChild(witnessDiv)
    
    const witnessHeadline = document.createElement("h2")
    witnessHeadline.innerHTML = "Witnesses To Crimes"
    witnessDiv.appendChild(witnessHeadline)

    const witnessList = ["Samantha Vo - Witness to Maple Syrup Laundering","Travers - Witness to Armed Robbery","Siddarth Best - Witness to Hit and Run","Henry Fairclaw - Witness to Murder"]
    const witnessUL = document.createElement("ul")
    witnessDiv.appendChild(witnessUL)
    for (let crime in witnessList) {
        let li = document.createElement("li")
        li.innerHTML = witnessList[crime]
        witnessUL.appendChild(li)
    }

    const victimDiv = document.createElement("div")
    witVicContainerDiv.appendChild(victimDiv)
    
    const victimHeadline = document.createElement("h2")
    victimHeadline.innerHTML = "Witnesses To Crimes"
    victimDiv.appendChild(victimHeadline)

    const victimList = ["Izacc Robertson - Victim of Breaking and Entering","Bobby Curtis - Murdered","Tori Murray - Victim of Grand Theft Auto","Leslie Grieg - Victim of Armed Robbery"]
    const victimeUL = document.createElement("ul")
    victimDiv.appendChild(victimeUL)
    for (let crime in victimList) {
        let li = document.createElement("li")
        li.innerHTML = victimList[crime]
        victimeUL.appendChild(li)
    }
}

const crimesContainerDiv = document.createElement("div")
crimesContainerDiv.className = "crimes-container-div"

const witVicContainerDiv = document.createElement("div")
witVicContainerDiv.className = "witness-victim-container"

const allegedCrimesList = ["Assualt","Breaking and Entering","Industrial Espionage"]
const convictionsList = ["Syrup Laundering","Armed Robbery","Grand Theft Auto","Hit and Run","Murder"]
const witnessList = ["Samantha Vo - Witness to Maple Syrup Laundering","Travers - Witness to Armed Robbery","Siddarth Best - Witness to Hit and Run","Henry Fairclaw - Witness to Murder"]
const victimList = ["Izacc Robertson - Victim of Breaking and Entering","Bobby Curtis - Murdered","Tori Murray - Victim of Grand Theft Auto","Leslie Grieg - Victim of Armed Robbery"]

const buildRapSheet = () => {
    while (mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
    }
    // createCrimesDiv()
    // createLocationsDiv()
    // createWitVicDiv()
    
    buildDivAndList(crimesContainerDiv, "alleged-crimes-div", "allegedCrimesHeadline", "Alleged Crimes:", allegedCrimesList, "allegedCrimesUL")
    buildDivAndList(crimesContainerDiv, "convictions-div", "convictionsHeadline", "Convicted Crimes:", convictionsList, "convictionsUL")
    createLocationsDiv()
    buildDivAndList(witVicContainerDiv, "witness-div", "witnessHeadline", "Witnesses To Crimes:", witnessList, "witnessUL")
    buildDivAndList(witVicContainerDiv, "victims-div", "victimsHeadline", "Victims Of Crimes:", victimList, "victimUL")
    mainDiv.appendChild(mainFragment)
}

