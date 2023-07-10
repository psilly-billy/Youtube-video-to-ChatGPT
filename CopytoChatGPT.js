// Function to automatically paste the clipboard contents and submit the conversation
function pasteToChat() {
  const prompt = "Please provide a formatted summary of this YouTube video transcript, do also a fact checking for the information presented adding your notes as well:\n";
  const textarea = document.querySelector("textarea[tabindex='0']");

   // Set the value of the textarea with the prompt and clipboard contents
  navigator.clipboard.readText().then((clipboardContent) => {
    textarea.value = prompt + clipboardContent;
    textarea.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
  });

  // Submit the conversation
  setTimeout(() => {
    const submitButtonContainer = document.querySelector(".flex.flex-col.w-full.flex-grow.md\\:py-4.md\\:pl-4");

    if (submitButtonContainer) {
      const submitButton = submitButtonContainer.querySelector("button");

      // Check if the submit button is disabled and enable it
      if (submitButton && !submitButton.disabled) {
        submitButton.disabled = false;
        setTimeout(() => {
          submitButton.click();
        }, 1000);
      }
    }
  }, 1000);
}

// Call the pasteToChat function to automatically paste and submit the conversation
pasteToChat();
