var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "start again" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "previous scene" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit story" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit story" )
	},
	"PositiveIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "positive" )
	},
	"NegativeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "negative" )
	},
	"OpenTheRedDoorIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open the red door" )
	},
	"OpenTheGreenDoorIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open the green door" )
	},
	"OpenTheHiddenDoorIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open the hidden door" )
	},
	"LookAroundIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "look around" )
	},
	"StartPlayingIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "start playing" )
	},
	"OpenTheBoxIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open the box" )
	},
}