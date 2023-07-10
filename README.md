# Youtube video to ChatGPT
 Extension to download a Youtube transcript and submit it to ChatGPT to make a summary

This repository contains a JavaScript code snippet that adds a button to extract the transcript from a YouTube video and automatically paste it into a chat conversation.

## Functionality

The code provides two main functions:

### `addButton`

This function creates and styles a button labeled "Extract Transcript" on a YouTube video page. The button is appended to the `ytd-menu-renderer` element. If the target element is not found initially, a `MutationObserver` is used to wait for the element to become available.

When the button is clicked, it triggers the `extractTranscript` function.

### `extractTranscript`

This function is responsible for extracting the transcript from the YouTube video. It performs the following steps:

1. Finds the dropdown button on the YouTube video page.
2. Clicks the dropdown button to reveal the menu options.
3. Searches for the "Show transcript" button within the revealed menu options.
4. Clicks the "Show transcript" button to display the transcript lines.
5. Retrieves the transcript lines from the page and joins them into a single string.
6. Creates a temporary textarea element, sets its value to the transcript, and appends it to the document body.
7. Copies the contents of the textarea to the clipboard.
8. Resets the button's background color and provides feedback to the user.
9. Finds the "Close transcript" button and clicks it to hide the transcript.
10. Opens a new tab with the URL "https://chat.openai.com/".

### `pasteToChat`

This function automatically pastes the clipboard contents and submits the conversation in a chat interface. It performs the following steps:

1. Sets the value of the textarea element with a predefined prompt and the contents of the clipboard.
2. Dispatches an input event on the textarea element to trigger any associated listeners.
3. Waits for a short delay.
4. Finds the submit button container and the submit button within it.
5. Checks if the submit button is disabled and enables it if necessary.
6. Submits the conversation by clicking the submit button.



**Note:** This code assumes the presence of specific HTML elements and CSS selectors on the YouTube video page. If the YouTube page structure or elements change, this code may need to be modified accordingly.


