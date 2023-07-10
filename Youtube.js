// addButton function to create and style the "Extract Transcript" button
function addButton() {
  const button = document.createElement("button");
  button.innerText = "Extract Transcript";
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.padding = "5px";
  button.style.borderRadius = "5px";
  button.style.transition = "background-color 0.3s";

  button.addEventListener("click", function () {
    extractTranscript(button);
  });

  const targetElement = document.querySelector("ytd-menu-renderer");

  if (targetElement) {
    targetElement.appendChild(button);
  } else {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const targetElement = document.querySelector("ytd-menu-renderer");
          if (targetElement) {
            targetElement.appendChild(button);
            observer.disconnect();
            break;
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
}

// Function to extract the transcript
function extractTranscript(button) {
  const dropdownButton = document.querySelector(
    "ytd-menu-renderer[class='style-scope ytd-watch-metadata'] yt-button-shape[id='button-shape'] div[class='yt-spec-touch-feedback-shape__fill']"
  );

  if (dropdownButton) {
    dropdownButton.click();
    setTimeout(() => {
      const showTranscriptButton = Array.from(
        document.querySelectorAll("yt-formatted-string")
      ).find((item) => item.innerText === "Show transcript");

      if (showTranscriptButton) {
        showTranscriptButton.click();

        setTimeout(() => {
          const transcriptLines = Array.from(
            document.querySelectorAll(
              "yt-formatted-string.segment-text"
            )
          );

          const transcript = transcriptLines.map((line) =>
            line.innerText.trim()
          ).join("\n");

          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = transcript;
          document.body.appendChild(tempTextArea);
          tempTextArea.select();
          document.execCommand("copy");
          document.body.removeChild(tempTextArea);

          // Button feedback animation
          button.style.backgroundColor = "lightblue";
          setTimeout(() => {
            button.style.backgroundColor = "blue";
          }, 200);

          const closeButton = document.querySelector(
            "button[aria-label='Close transcript'] div[class='yt-spec-touch-feedback-shape__fill']"
          );

          if (closeButton) {
            closeButton.click();
          }

          window.open("https://chat.openai.com/", "_blank");
        }, 3000);
      }
    }, 1000);
  }
}

// Call the addButton function to add the "Extract Transcript" button
addButton();
