async function msg() {
    event.preventDefault();
    console.log("clicado");
    await fetch('/send-gsheet',{
        method: 'POST'
    })
}