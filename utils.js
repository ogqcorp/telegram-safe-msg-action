
function toTelegramSafeString(str) {
    let res = str.replaceAll("*", "\\*")
    res = res.replaceAll("[", "\\[")
    res = res.replaceAll("_", "\\_")
    res = res.replaceAll("`", "\\`")
    return res
}

module.exports = {toTelegratemSafeString}