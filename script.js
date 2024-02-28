async function msg(id) {
    event.preventDefault();
    //console.log("clicado",id.replace("_"," "));
    await fetch('/send-gsheet',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id})
    })
}