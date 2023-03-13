const {toTelegramSafeString} = require('./utils.js')

console.log(toTelegramSafeString(
    'asfdasdf \r\n\
* asterisk \r\n\
` test \r\n\
[ test \r\n\
aaa \r\n\r\n\
_ underline'))
