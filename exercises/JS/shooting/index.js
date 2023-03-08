const getFiringBoard = () => {
  const firingBoardImageLink =
    "https://previews.123rf.com/images/mholka/mholka1202/mholka120200055/12442011-shooting-board.jpg";
  const imageTag = document.createElement("img");
  imageTag.src = firingBoardImageLink;
  imageTag.classList.add("w-40");
  imageTag.classList.add("h-auto");
  //   imageTag.addEventListener("click", (ele) => {
  //     console.log(ele);
  //   });
  return imageTag;
};

const moveFrame = (firingBoard) => {
    firingBoard.classList.add('right-0');
  const move = () => {
    // firingBoard.
  };
  const boardInterval = setInterval(move, 100);
};

const gameContainer = document.getElementById("game-container");
const firingBoard = getFiringBoard();
moveFrame(firingBoard);

gameContainer.appendChild(firingBoard);
