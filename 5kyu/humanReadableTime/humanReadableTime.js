function humanReadable (seconds) {

    let hours = Math.floor(seconds / 3600)
    hours = (hours < 10 ? '0' : '') + hours

    let minutes = Math.floor(seconds / 60) % 60
    minutes = (minutes < 10 ? '0' : '') + minutes

    let secs = seconds % 60
    secs = (secs < 10 ? '0' : '') + secs

    console.log(`${hours}:${minutes}:${secs}`)
    return `${hours}:${minutes}:${secs}`
}



// var sec_num = parseInt(secs, 10)
// let hours   = Math.floor(seconds / 3600)
// let minutes = Math.floor(seconds / 60) % 60
// let secs = seconds % 60

humanReadable(0)//, '00:00:00', 'humanReadable(0)');
humanReadable(59)//, '00:00:59', 'humanReadable(59)');
humanReadable(60)//, '00:01:00', 'humanReadable(60)');
humanReadable(90)//, '00:01:30', 'humanReadable(90)');
humanReadable(3599)//, '00:59:59', 'humanReadable(3599)');
humanReadable(3600)//, '01:00:00', 'humanReadable(3600)');
humanReadable(45296)//, '12:34:56', 'humanReadable(45296)');
humanReadable(86399)//, '23:59:59', 'humanReadable(86399)');
humanReadable(86400)//, '24:00:00', 'humanReadable(86400)');
humanReadable(359999)//, '99:59:59', 'humanReadable(359999)');
