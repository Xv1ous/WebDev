// Get all the cells
const cells = document.querySelectorAll(".cell");

// Variable to keep track of the current player
let currentPlayer;

// Get the reset button
const resetButton = document.querySelector("#reset-button");

// Add click event listener to the reset button
resetButton.addEventListener("click", () => {
  // Clear the text content of all cells
  cells.forEach((cell) => {
    cell.textContent = "";
  });

  // Reset the current player
  currentPlayer = null;
  console.log("after reset " + currentPlayer);
});
// Get the select buttons
const selectButtons = document.querySelectorAll(".select-button");

// Add click event listener to each select button
selectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Set the current player based on the button's value
    currentPlayer = button.value;
    console.log("current player : " + currentPlayer);

    // Disable all cells if the player did not choose 'X' or 'O'
    if (currentPlayer !== "X" && currentPlayer !== "O") {
      cells.forEach((cell) => {
        cell.disabled = true;
      });
    } else {
      cells.forEach((cell) => {
        cell.disabled = false;
      });
    }
  });
});


// Add click event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Check if the cell is already filled
    if (cell.textContent !== "") {
      return;
    }

    // Set the text content of the cell to the current player
    cell.textContent = currentPlayer;

    // Toggle the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(currentPlayer);

  });
});
