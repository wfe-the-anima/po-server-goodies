exports.handleCommand = function(src, command, commandData, tar, channel) {
    if (command == "dev") {
        normalbot.sendAll("" + sys.name(src) + " is a fake developer now!", channel);
        return;
    }
    if (command == "slap") {
        if (commandData == undefined) {
            normalbot.sendAll("You can't slap somebody which don't exist!");
        } else {
        normalbot.sendAll("" + sys.name(src) + " slapped " + commandData + " for being somewhat of a b****!", channel);
        return;
    }
    return "no command";
};
exports.help = 
    [
        "/dev: Become a fake developer!",
        "/slap [Name]: Slap [Name] for being a bitch!"
    ];
