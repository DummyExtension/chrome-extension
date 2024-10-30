chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  const result = await fetch('https://swapi.dev/api/people/1', {method: 'GET'});

  if (result.ok) {
    const data = await result.json();
    sendResponse(`Hello ${data?.name}!`);
    return true;
  }
  
  sendResponse('There was an issue calling the API!');
});
