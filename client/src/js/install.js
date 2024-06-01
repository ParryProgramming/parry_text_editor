const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Adding an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //Stashes the event so it can be triggered later
    window.deferredPrompt = event;

    //Updating UI to show the install button
    butInstall.classList.toggle('hidden', false);

    console.log('beforeinstallprompt event was fired');
});

// Implementing a click event handler on the `butInstall` element (button)
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.deferredPrompt
    if (!eventPrompt) {
        //The deferred prompt is not available
        console.log("Hello")
        return;
    }
    // Showing the install prompt
    eventPrompt.prompt();

    // Waiting for the user to respond to the prompt
    window.deferredPrompt = null
    butInstall.classList.toggle('hidden', true)
});

// Adding a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed', event);
    window.deferredPrompt = null;
});