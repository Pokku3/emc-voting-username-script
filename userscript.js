// ==UserScript==
// @name         Autofill username in EMC vote forms
// @version      2.04
// @description  Autofill your Minecraft username in the forms of websites when voting for Empire Minecraft
// @author       Pokku8
// @match        https://empireminecraft.com/wiki/vote/
// By name:
// @match        https://topg.org/minecraft-servers/server-355353*
// @match        https://minecraft-mp.com/server/4659/vote/
// @match        https://minestatus.net/server/vote/play.emc.gs
// @match        https://minecraft-server-list.com/server/240530/vote/
// @match        https://minecraftservers.org/vote/2
// @match        https://www.planetminecraft.com/server/empire-minecraft-2906938/vote/
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    var DEFAULT_USERNAME = ''; // <--- Feel free to add a default username wihin the quotes

    try {
        if (EMC_USERNAME !== undefined) {
            // On EMC voting page: save username and exit
            GM_setValue('LAST_EMC_USERNAME', EMC_USERNAME);
            return;
        }
    } catch (e) {
        if (e instanceof ReferenceError) {
            // EMC_USERNAME not defined: expected on voting websites
        } else {
            console.error(e); // Other type of error
        }
    }

    // On voting websites: attempt to read the stored value or use the default
    var username = GM_getValue('LAST_EMC_USERNAME', '');
    if (username === '') { // Not logged in or stored value not set
        username = DEFAULT_USERNAME;
    }

    // Fill username
    var usernameForm = document.querySelectorAll('[name="mcname"], [name="ignnn"], [name="nickname"], [name="username"]');
    for (var i = 0; i < usernameForm.length; i++) {
        usernameForm[i].value = username;
    }
})();
