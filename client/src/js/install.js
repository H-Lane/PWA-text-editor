const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container.
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    const prompt = window.deferredPrompt;

    if (!prompt) return

    //Display the prompt
    prompt.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    console.log('App installed')

    window.deferredPrompt = null;

});
