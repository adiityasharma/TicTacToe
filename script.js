const tictac = document.querySelector(".tic-tac")
const boxes = document.querySelectorAll('.box')
const container = document.querySelector(".container")
const relaodbtn = document.querySelector(".reloadbtn")
const restartBtn = document.querySelector(".restartBtn")

let currentPlayer = "X"

let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

tictac.addEventListener("click", (e) => {

  if (e.target.className !== "tic-tac") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer
      winner()
      currentPlayer = (currentPlayer === "X") ? "O" : "X"
    }
  }

})

function winner() {
  winningCondition.forEach((item) => {
    let index0 = item[0]
    let index1 = item[1]
    let index2 = item[2]

    let val0 = boxes[index0].innerText
    let val1 = boxes[index1].innerText
    let val2 = boxes[index2].innerText

    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val1 === val2) {

        tictac.innerText = `Winner is: ${val0}`
        tictac.style.fontSize = "50px"
      }
    }
  })
}

relaodbtn.addEventListener("click", () => {
  window.location.reload()
})
restartBtn.addEventListener("click",()=>{
  boxes.forEach((item)=>{
    item.innerText = ""
  })
})


