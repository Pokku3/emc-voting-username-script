// ==UserScript==
 // @name        Autofill username in EMC vote forms
 // @version      1.04
 // @description  Autofill your Minecraft username in the forms of websites when voting for Empire Minecraft
 // @author      Pokku8
 // By class:
 // @match        https://topg.org/Minecraft/in-355353*
 // @match        https://minecraft-server.net/vote/Aikar/
 // @match        https://minecraftservers100.com/vote/112*
 // @match        https://minecraftservers.biz/empire-minecraft/
 // @match        https://minecraftservers.org/vote/134885
 // By name:
 // @match        https://www.planetminecraft.com/server/empire-minecraft-2906938/vote/
 // @match        https://minecraft-server-list.com/server/240530/vote/
 // @grant        none
 // ==/UserScript==
 
 (function() {
     'use strict';
     // Fill username
     var usernameForm = document.querySelectorAll('.form-control, .sm-form-control, .form-input, [name="mcname"], [name="ignn"]');
     for (var i = 0; i < usernameForm.length; i++) {
         usernameForm[i].value = 'YOURNAME'; // <--- CHANGE YOUR NAME
     }
 
     // Rate 5/5 on Minecraft-Server.net
     document.getElementById('rate-10').click();
 })();
