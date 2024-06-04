const butInstall = document.getElementById('buttonInstall');

//add event listener for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
    //staches the event to be used later
    window.deferredPrompt = event;
    //removes the hidden class from the install button
    butInstall.classList.toggle('hidden', false);
});

//add event listener for the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  //shows the prompt
    promptEvent.prompt();
    //waits for the user to respond to the prompt
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

//add event listener for appinstalled
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});