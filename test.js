const {toTelegramSafeString} = require('./utils.js')

console.log(toTelegramSafeString(
    'asfdasdf \r\n\
* asterisk \r\n\
` test \r\n\
[ test \r\n\
_ underline'))
