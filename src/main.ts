import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `<button id="call-api-button">Call API</button>`;

document.addEventListener('DOMContentLoaded', () => addEventListener('click', 'call-api-button'));

function addEventListener(eventName: string, elementId: string) {
  if (!eventName || !elementId) return;

  const htmlElement = document.getElementById(elementId);
  
  if (!htmlElement){
    console.log('error', `${elementId} element is not available`);
    return;
  }

  htmlElement?.addEventListener(eventName, () => {
    chrome.runtime.sendMessage('call-api', (response: string) => alert(response));
  });
}