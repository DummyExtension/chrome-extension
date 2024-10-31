chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const getData = async () => {
    try {
      const result = await fetch("https://swapi.dev/api/people/1", {
        method: "GET",
      });
      if (result.ok) {
        const data = await result.json();
        sendResponse(`Hello ${data?.name}!`);
      } else {
        sendResponse("There was an issue calling the API!");
      }
    } catch (error) {
      sendResponse("An error occurred while fetching data.");
    }
  };

  getData();
  return true;
});
