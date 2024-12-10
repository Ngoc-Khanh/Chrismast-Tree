// Messages and colors
const messages = ["Merry Christmas !"];
const colors = ["white"];

// Function to create a single popup
function createPopup(screenWidth, screenHeight) {
  // Create popup div
  const popup = document.createElement("div");
  popup.classList.add("popup");
  
  // Set random message and color
  const message = messages[Math.floor(Math.random() * messages.length)];
  popup.textContent = message;
  popup.style.color = colors[Math.floor(Math.random() * colors.length)];
  
  // Set random position
  const randomX = Math.random() * (screenWidth - 210);
  const randomY = Math.random() * (screenHeight - 50);
  popup.style.left = `${randomX}px`;
  popup.style.top = `${randomY}px`;

  // Add popup to the body
  document.body.appendChild(popup);

  // Remove popup after 10 seconds
  setTimeout(() => {
    popup.remove();
  }, 5000);
}

// Function to create multiple popups
function createMultiplePopups(num) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  for (let i = 0; i < num; i++) {
    setTimeout(() => {
      createPopup(screenWidth, screenHeight);
    }, i * 30); // Delay between each popup
  }
}

// Add event listener to the gift element
document.querySelector('.gift').addEventListener('click', () => {
  createMultiplePopups(200);
});
