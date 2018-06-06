const centralDiv = document.getElementById("whole-page")
const centralFragment = document.createDocumentFragment()

const executiveDiv = document.createElement("div")
executiveDiv.setAttribute("id", "executiveReport")
executiveDiv.setAttribute("class", "tabcontent")
centralFragment.appendChild(executiveDiv)

const createSummaryDiv = () => {
    const summaryContainerDiv = document.createElement("div")
    summaryContainerDiv.className = "summary-container-div"
    executiveDiv.appendChild(summaryContainerDiv)

    const summaryDiv = document.createElement("div")
    summaryContainerDiv.appendChild(summaryDiv)

    const summaryHeadline = document.createElement("h1")
    summaryHeadline.innerHTML = "The Joker"
    summaryDiv.appendChild(summaryHeadline)

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Comics_character%29.jpg";
    summaryDiv.appendChild(img);

    executiveDiv.appendChild(summaryContainerDiv)
}



const createAliasesDiv = () => {
   const aliasesContainerDiv = document.createElement("div")
   aliasesContainerDiv.className = "aliases-container-div"
   executiveDiv.appendChild(aliasesContainerDiv)

   const aliasesDiv = document.createElement("div")
   aliasesContainerDiv.appendChild(aliasesDiv)
   
   const aliasesHeadline = document.createElement("h2")
   aliasesHeadline.innerHTML = "Known Aliases"
   aliasesDiv.appendChild(aliasesHeadline)

   const aliasesList = ["Jack Napier","Red Hood"]
   const aliasesUL = document.createElement("ul")
   aliasesDiv.appendChild(aliasesUL)
   for (let name in aliasesList) {
       let li = document.createElement("li")
       li.innerHTML = aliasesList[name]
       aliasesUL.appendChild(li)
   }

   executiveDiv.appendChild(aliasesContainerDiv)
}


const createAssociatesDiv = () => {
    const associatesContainerDiv = document.createElement("div")
    associatesContainerDiv.className = "associates-container-div"
    executiveDiv.appendChild(associatesContainerDiv)

    const associatesDiv = document.createElement("div")
    associatesContainerDiv.appendChild(associatesDiv)

    const associatesHeadline = document.createElement("h2")
    associatesHeadline.innerHTML = "Known Associates"
    associatesDiv.appendChild(associatesHeadline)

    const associatesList = ["Harvey Dent", "Oswald Cobblepot", "Pamela Isley"]
    const associatesUL = document.createElement("ul")
    associatesDiv.appendChild(associatesUL)
    for (let name2 in associatesList) {
        let li2 = document.createElement("li")
        li2.innerHTML = associatesList[name2]
        associatesUL.appendChild(li2)
    }
    executiveDiv.appendChild(associatesContainerDiv)
}



const createPlaceDiv = () => {
    const placeContainerDiv = document.createElement("div")
    placeContainerDiv.className = "place-container-div"
    executiveDiv.appendChild(placeContainerDiv)

    const placeDiv = document.createElement("div")
    placeContainerDiv.appendChild(placeDiv)

    const placeHeadline = document.createElement("h2")
    placeHeadline.innerHTML = "Country of Origin"
    placeDiv.appendChild(placeHeadline)

    const placeName = ["USA"]
    const placeUL = document.createElement("ul")
    placeDiv.appendChild(placeUL)
    for (let name3 in placeName) {
        let li3 = document.createElement("li")
        li3.innerHTML = placeName[name3]
        placeUL.appendChild(li3)
    }
    executiveDiv.appendChild(placeContainerDiv)
}



// centralDiv.appendChild(centralFragment)

const buildExecSum = () => {
    while (centralDiv.firstChild){
        centralDiv.removeChild(centralDiv.firstChild)
    }
    createSummaryDiv()
    createAliasesDiv()
    createAssociatesDiv()
    createPlaceDiv()
    centralDiv.appendChild(centralFragment)
}

