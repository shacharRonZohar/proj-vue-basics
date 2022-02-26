export const utilService = {
    formatTime,
    makeId,
    getRandomColor,
    getRandomInt

}

function formatTime(time, opts) {
    return new Intl.DateTimeFormat('default', opts).format(time)
}

function makeId(startSymb = '', length = 9) {
    let text = startSymb;
    const possible = '0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getRandomColor() {
    const opts = ['red', 'yellow']
    return opts[getRandomInt(0, opts.length)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
