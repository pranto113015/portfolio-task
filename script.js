// Select elements
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("videoPopup");
const video = document.getElementById("youtubeVideo");

// Show popup
openBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

// Close popup when "×" is clicked
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  stopVideo();
});

// Close popup when clicking outside the popup box
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    stopVideo();
  }
});

// Function to stop the video when popup closes
function stopVideo() {
  const videoSrc = video.src;
  video.src = "";
  video.src = videoSrc;
}
