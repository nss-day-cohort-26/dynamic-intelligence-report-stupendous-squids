const execSumBtn = document.getElementById("execSum")
const rapSheetBtn = document.getElementById("rapSheet")
const newsFeedBtn = document.getElementById("newsFeed")
const finIntBtn = document.getElementById("finInt")
const pageHead = document.querySelector("head")

execSumBtn.addEventListener("click", buildExecSum)
rapSheetBtn.addEventListener("click", buildRapSheet)
newsFeedBtn.addEventListener("click", buildNewsFeed)
finIntBtn.addEventListener("click", buildFinInt)

buildExecSum()