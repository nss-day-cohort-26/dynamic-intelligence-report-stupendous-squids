const mainDiv = document.getElementById("whole-page")
const mainFragment = document.createDocumentFragment()

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
    buildDivAndList(crimesContainerDiv, "alleged-crimes-div", "allegedCrimesHeadline", "Alleged Crimes:", allegedCrimesList, "allegedCrimesUL")
    buildDivAndList(crimesContainerDiv, "convictions-div", "convictionsHeadline", "Convicted Crimes:", convictionsList, "convictionsUL")
    createLocationsDiv()
    buildDivAndList(witVicContainerDiv, "witness-div", "witnessHeadline", "Witnesses To Crimes:", witnessList, "witnessUL")
    buildDivAndList(witVicContainerDiv, "victims-div", "victimsHeadline", "Victims Of Crimes:", victimList, "victimUL")
    mainDiv.appendChild(mainFragment)
}

