chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  return true; // 비동기 응답 가능성 대비
});