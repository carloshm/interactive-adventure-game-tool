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
		processUtterance( intent, session, request, response, "go back" )
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
	"MyNameIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "my name" )
	},
	"GoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go" )
	},
	"TrueIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "true" )
	},
	"FalseIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "false" )
	},
	"SpannerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "spanner" )
	},
	"BalloonIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "balloon" )
	},
	"PineappleIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "pineapple" )
	},
}