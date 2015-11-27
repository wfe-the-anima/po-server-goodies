exports.handleCommand = function (src, command, commandData, tar, channel) {
    if (command == "dev") {
        normalbot.sendAll(sys.name(src) + " is a fake developer now!", channel);
        return;
    }
    if (command == "slap") {
        if (commandData === undefined) {
            normalbot.sendAll(src, "You can't slap somebody who don't exist!", channel);
        } else {
            normalbot.sendAll(sys.name(src) + " slapped " + commandData + " for being somewhat of a b****!", channel);
            return;
	    }
    }
    if (command == "gimmeowner") {
    	normalbot.sendMessage(src, "You actual dumbshit...", channel);
    	normalbot.sendAll(sys.name(src) + "wanted owner but failed!", channel);
    	sys.kick(src);
    	return;
    }
    return "no command";
};
exports.help = 
    [
        "/dev: Become a fake developer!",
        "/slap [Name]: Slap [Name] for being a bitch!",
        "/gimmeowner: Owner yourself"
    ];
