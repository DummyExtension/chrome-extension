import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `<button id="call-api-button">Call API</button>`;

document.addEventListener("DOMContentLoaded", () => addEventListener("click", "call-api-button"));

function addEventListener(eventName: string, elementId: string) {
  if (!eventName || !elementId) return;

  const htmlElement = document.getElementById(elementId);

  if (!htmlElement) {
    console.log("error", `${elementId} element is not available`);
    return;
  }

  htmlElement?.addEventListener(eventName, handleButtonClick);
}

async function handleButtonClick() {
  try {
    // TODO: Scenario 01
    // chrome.runtime.sendMessage('call-api', (response: string) => {
    //   alert(response);
    // });

    // TODO: Scenario 02
    const response = await sendWrappedMessage({ action: "call-api" });
    alert(response);
  } catch (error) {
    console.error("Error calling API:", error);
  }
}

function sendWrappedMessage(message: any): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Chrome runtime error:", chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
}
