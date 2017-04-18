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
		processUtterance( intent, session, request, response, "this should never be invoked" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit story" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit story" )
	},
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yes" )
	},
	"NoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "no" )
	},
	"HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AnythingElseIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "anything else" )
	},
	"ZeroIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "zero" )
	},
	"OneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "one" )
	},
	"TwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "two" )
	},
	"ThreeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "three" )
	},
	"SevenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "seven" )
	},
	"EightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "eight" )
	},
	"WrongAnswerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "wrong answer" )
	},
	"NoIdeaIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "no idea" )
	},
	"TodayAndTomorrowIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "today and tomorrow" )
	},
}