// Event listener for when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  // Set up the context menu item for pasting to chat
  chrome.contextMenus.create({
    id: "CopytoChatGPT",
    title: "Paste Transcript to Chat",
    contexts: ["page"],
  });
});

// Event listener for context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "CopytoChatGPT") {
    // Execute the content script to paste the transcript to chat
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["CopytoChatGPT.js"],
    });
  }
});
