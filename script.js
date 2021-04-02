let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let leftColumn = document.querySelector(".left")
let middleColumn = document.querySelector(".middle")
let rightColumn = document.querySelector(".right")
let squares = document.querySelectorAll(".square")
let blocks = document.querySelectorAll(".block")
let restart = document.querySelector("#restart")
let moves = document.querySelector("#moves")
let wins = document.querySelector("#wins")
let topScore = document.querySelector("#topScore")
let selectedBlock = null

one.addEventListener("click", () => selectedBlock = one)
two.addEventListener("click", () => selectedBlock = two)
three.addEventListener("click", () => selectedBlock = three)
four.addEventListener("click", () => selectedBlock = four)
five.addEventListener("click", () => selectedBlock = five)

console.log(selectedBlock)

leftColumn.addEventListener("click", function() {
    if (selectedBlock !== null && selectedBlock === squares[selectedBlock.dataset.location].firstElementChild) {
        if (leftColumn.firstElementChild === null || selectedBlock.dataset.size < leftColumn.firstElementChild.dataset.size) {
            leftColumn.insertBefore(selectedBlock, leftColumn.firstElementChild)
            selectedBlock.dataset.location = 0
            selectedBlock = null
            moves.innerHTML = Number(moves.innerHTML)+1
        }
    }
})

middleColumn.addEventListener("click", function() {
    if (selectedBlock !== null && selectedBlock === squares[selectedBlock.dataset.location].firstElementChild) {
        if (middleColumn.firstElementChild === null || selectedBlock.dataset.size < middleColumn.firstElementChild.dataset.size) {
            middleColumn.insertBefore(selectedBlock, middleColumn.firstElementChild)
            selectedBlock.dataset.location = 1
            selectedBlock = null
            moves.innerHTML = Number(moves.innerHTML)+1
        }
    }
})

rightColumn.addEventListener("click", function() {
    if (selectedBlock !== null && selectedBlock === squares[selectedBlock.dataset.location].firstElementChild) {
        if (rightColumn.firstElementChild === null || selectedBlock.dataset.size < rightColumn.firstElementChild.dataset.size) {
            rightColumn.insertBefore(selectedBlock, rightColumn.firstElementChild)
            selectedBlock.dataset.location = 2
            selectedBlock = null
            moves.innerHTML = Number(moves.innerHTML)+1
        }
    }
})

