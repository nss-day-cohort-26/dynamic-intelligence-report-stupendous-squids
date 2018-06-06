const centralDiv = document.getElementById("whole-page")
const centralFragment = document.createDocumentFragment()

const createAliasesDiv = () => {
   const aliasesContainerDiv = document.createElement("div")
   aliasesContainerDiv.className = "aliases-container-div"
   centralFragment.appendChild(aliasesContainerDiv)

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

   centralFragment.appendChild(aliasesContainerDiv)
}
createAliasesDiv()

const createAssociatesDiv = () => {
    const associatesContainerDiv = document.createElement("div")
    associatesContainerDiv.className = "associates-container-div"
    centralFragment.appendChild(associatesContainerDiv)

    const associatesDiv = document.createElement("div")
    
}


centralDiv.appendChild(centralFragment)

