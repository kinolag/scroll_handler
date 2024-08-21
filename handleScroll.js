let offset = 0;
const infoElement = document.getElementById("infoElement");

const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");

const thresholds = [25, 50, 100];
const sent = {};
thresholds.forEach((t) => (sent[t] = false));

const handleProgressInUI = () => {
  progressBar.style.width = `${offset}%`;
  infoElement.innerHTML = `Y Scroll: ${offset.toFixed(1)}%`;

  /* display at every 25% */
  if (offset < 25) {
    progressLabel.style.right = "100%";
    progressLabel.textContent = "";
  } else if (offset >= 25 && offset < 50) {
    progressLabel.style.right = "75%";
    progressLabel.textContent = "25%";
  } else if (offset >= 50 && offset < 75) {
    progressLabel.style.right = "50%";
    progressLabel.textContent = "50%";
  } else if (offset >= 75 && offset < 100) {
    progressLabel.style.right = "25%";
    progressLabel.textContent = "75%";
  } else if (offset === 100) {
    progressLabel.style.right = "0%";
    progressLabel.textContent = "100%";
  }
};

const handleScroll = (updateUI) => {
  const { scrollHeight, clientHeight } = document.documentElement;
  const scrolledY = window.scrollY;
  /* scrolledY : diff = x : 100 */
  offset = (scrolledY / (scrollHeight - clientHeight)) * 100;

  const threshold = Object.keys(sent).find((n) => !sent[n]);

  if (offset >= threshold) {
    /* create the event */
    const progressEvent = new CustomEvent("scrollProgress", {
      detail: {
        threshold,
        yScrolled: offset.toFixed(1),
      },
    });

    /* dispatch the event  */
    window.dispatchEvent(progressEvent);

    /* prevent re-sending */
    sent[threshold] = true;
  }

  /* conditional: display scroll progress in UI */
  if (updateUI) handleProgressInUI();
};
/* pass true to update UI */
document.addEventListener("scroll", () => handleScroll(true));

/* listen to custom event, log event detail or alert user */
function listenToProgress(e) {
  console.log(e.detail);
  // alert(`${e.detail.threshold}% scrolled`);
}

window.addEventListener("scrollProgress", listenToProgress);
