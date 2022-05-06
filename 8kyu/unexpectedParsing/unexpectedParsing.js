function getStatus(isBusy) {
    let msg = (isBusy) ? "busy" : "available";
    console.log({status: msg})
    return {status: msg}

}


// function tests

getStatus(true).status // "busy");
