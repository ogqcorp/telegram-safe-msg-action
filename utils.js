
function toTelegramSafeString(str) {
    let res = str.replaceAll("*", "\\*")
    res = res.replaceAll("[", "\\[")
    res = res.replaceAll("_", "\\_")
    res = res.replaceAll("`", "\\`")
    res = res.replaceAll(/(\r\n|\r|\n){2,}/g, "\r\n")
    return res
}

module.exports = {toTelegramSafeString}