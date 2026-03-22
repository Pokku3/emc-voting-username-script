// ==UserScript==
// @name         Autofill username in EMC vote forms
// @version      1.08
// @description  Autofill your Minecraft username in the forms of websites when voting for Empire Minecraft
// @author       Pokku8
// By name:
// @match        https://topg.org/minecraft-servers/server-355353*
// @match        https://minecraft-mp.com/server/4659/vote/
// @match        https://minestatus.net/server/vote/play.emc.gs
// @match        https://minecraft-server-list.com/server/240530/vote/
// @match        https://minecraftservers.org/vote/2
// @match        https://www.planetminecraft.com/server/empire-minecraft-2906938/vote/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Fill username
    var usernameForm = document.querySelectorAll('[name="mcname"], [name="ignnn"], [name="nickname"], [name="username"]');
    for (var i = 0; i < usernameForm.length; i++) {
        usernameForm[i].value = 'YOURNAME'; // <--- CHANGE YOUR NAME
    }
})();
