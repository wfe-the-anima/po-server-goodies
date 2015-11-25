exports.handleCommand = function(src, command, commandData, tar, channel) {
    if (command == "dev") {
        normalbot.sendAll("" + sys.name(src) + " is a fake developer now!", channel);
        return;
    }
    return "no command";
};
exports.help = 
    [
        "/dev: Become a fake developer!"
    ];
