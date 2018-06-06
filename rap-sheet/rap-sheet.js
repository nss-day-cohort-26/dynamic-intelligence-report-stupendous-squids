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
    const imagesArray = ["../rs-images/bang_kwan_central.png","../rs-images/washing_state_penn.png","../rs-images/topo-chico.png"]
    const imageLinksArray = ["https://goo.gl/maps/AZzyRAU3UZ52","https://goo.gl/maps/1DTYdXDggSt","https://goo.gl/maps/zk4yQGXPBq72"]
    for (let i=0; i<locationsUL.childNodes.length; i++){
        const locationsLi = document.createElement("li")
        const locationsPic = document.createElement("img")
        locationsPic.setAttribute("src", imagesArray[i])
        const locationsLink = document.createElement("a")
        locationsLink.setAttribute("href", imageLinksArray[i])
        locationsLink.setAttribute("target", "_blank")
        const locationsInnerHeadline = document.createElement("h3")
        locationsInnerHeadline.innerHTML = `${locationsArray[i]}`
        locationsUL.childNodes[i].appendChild(locationsLi).appendChild(locationsInnerHeadline)
        locationsUL.childNodes[i].appendChild(locationsLink).appendChild(locationsPic)
    }

}

createCrimesDiv()
createLocationsDiv()

mainDiv.appendChild(mainFragment)

