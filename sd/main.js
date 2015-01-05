/*
* NOTE: This script was forked from [github.com/dvera123/bulb-project]. All credits belong only to the author.
* autor/author		:	Diego Vera Jimenez
* link to original code	:	github.com/dvera123/bulb-project
* tradução/translate	:	Victor Ribeiro - github.com/JVRibeiro
*/

$(document).ready(function() {


	if (annyang) {

		var ligar = function() {
	      $.ajax({
			  type: 'GET',	
			  data: { do: "ligar"}
			}).done(function(content) {
				$('body').addClass('night');
				console.log("ligar");
			});
	      
	    };

	    var desligar = function() {
	      $.ajax({
			  type: 'GET',	
			  data: { do: "desligar"}
			}).done(function(content) {
				$('body').removeClass('night');
				console.log("desligar");
			});
	      
	    };

		var commands = {
	     'ligar': ligar,
	     'desligar': desligar
	    };

	    
	    annyan
