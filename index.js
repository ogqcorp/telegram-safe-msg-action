const core = require('@actions/core');
const {toTelegramSafeString} = require('./utils.js')

try {
    const originString = core.getInput('origin_string');
    let env_name = core.getInput('env_output_name');
    if(!env_name)
        env_name = "TELEGRAM_SAFE_STRING"
    const safeStr = toTelegramSafeString(originString)
    core.exportVariable(env_name, safeStr)
} catch (error) {
    core.setFailed(error.message);
}