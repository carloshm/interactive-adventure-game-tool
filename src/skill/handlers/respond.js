'use strict'

var AlexaSkill = require('../AlexaSkill')
var dynamo = require('./dynamoDB')

module.exports = {

    readSceneWithCardFull: function ( scene, session, response ) {
      readSceneWithCardChecks(scene, session, response, false)
    },

    readSceneWithCard: function ( scene, session, response ) {
      readSceneWithCardChecks(scene, session, response, true)
    },

    exitWithCard: function ( scene, session, response ) {
      if (scene.isEndScene == true) {
        session.attributes.breadcrumbs = []
        delete session.attributes.isAskingToRestoreState
      }
      var json = buildResponse( scene, session, false )
      dynamo.putUserState( session, function ( data ) {
        console.log( data.message )
        response.tellWithCard(
          json.speechOutput,
          json.cardTitle,
          json.cardOutput,
          json.cardImage
        )
      })
    }

}

function readSceneWithCardChecks ( scene, session, response, reentryCheck ) {
    // exit without prompt if end scene
    if (scene.isEndScene == true) {
        session.attributes.breadcrumbs = []
            delete session.attributes.isAskingToRestoreState

            var json = buildResponse( scene, session, false )
            dynamo.putUserState( session, function ( data ) {
                console.log( data.message )
                    response.tellWithCard(
                            json.speechOutput,
                            json.cardTitle,
                            json.cardOutput,
                            json.cardImage
                            )
            })


    } else {

      var json = buildResponse( scene, session, reentryCheck )
      if (scene.readPreviousOptions) {
         console.log('skipping db store for leaf scene')
         response.askWithCard(
                          json.speechOutput,
                          json.repromptOutput,
                          json.cardTitle,
                          json.cardOutput,
                          json.cardImage
                          )
      } else {
          dynamo.putUserState( session, function ( data ) {
              console.log( data.message )
                  response.askWithCard(
                          json.speechOutput,
                          json.repromptOutput,
                          json.cardTitle,
                          json.cardOutput,
                          json.cardImage
                          )
          })
      }
    }
}

function readSceneWithCardChecks ( scene, session, response, reentryCheck ) {
    // exit without prompt if end scene
    if (scene.isEndScene == true) {
        session.attributes.breadcrumbs = []
            delete session.attributes.isAskingToRestoreState

            var json = buildResponse( scene, session, false )
            dynamo.putUserState( session, function ( data ) {
                console.log( data.message )
                    response.tellWithCard(
                            json.speechOutput,
                            json.cardTitle,
                            json.cardOutput,
                            json.cardImage
                            )
            })


    } else {

      var json = buildResponse( scene, session, reentryCheck )
      if (scene.readPreviousOptions) {
         console.log('skipping db store for leaf scene')
         response.askWithCard(
                          json.speechOutput,
                          json.repromptOutput,
                          json.cardTitle,
                          json.cardOutput,
                          json.cardImage
                          )
      } else {
          dynamo.putUserState( session, function ( data ) {
              console.log( data.message )
                  response.askWithCard(
                          json.speechOutput,
                          json.repromptOutput,
                          json.cardTitle,
                          json.cardOutput,
                          json.cardImage
                          )
          })
      }
    }
}

function buildResponse ( scene, session, reentryCheck ){

  var voiceIntro = buildIntro( scene, session, reentryCheck );
  var voicePrompt = buildPrompt( scene, true )
  var cardPrompt = '';
  if (scene.card.prompt) {
    cardPrompt  = scene.card.prompt.trim()
  } else {
    cardPrompt = buildPrompt( scene, false )
  }

  return {

    // initial text spoken by Alexa
    speechOutput: {
      type: AlexaSkill.SPEECH_OUTPUT_TYPE.SSML,
      ssml: '<speak>' +
            voiceIntro +
            '</speak>'
    },

    // reprompt is played if there's 7 seconds of silence
    repromptOutput: {
      type: AlexaSkill.SPEECH_OUTPUT_TYPE.SSML,
      ssml: '<speak>' +
            voicePrompt +
            '</speak>'
    },

    cardTitle:  scene.card.title || config.skillName,
    cardOutput: scene.card.text.trim() +
              ( scene.card.text.trim() && cardPrompt ? '\n\n' : '' ) +
                cardPrompt,

    cardImage: scene.card.image || null

  }

}

function buildIntro ( scene, session, reentryCheck ) {
  var prefix = ''
  if ( session.attributes.outro ) {
    prefix = session.attributes.outro
    session.attributes.outro = null
  }
  var speech = ''
  if ( reentryCheck && scene.voice.reentry && session.attributes.reentryScenes.indexOf(scene.id) > -1 ) {
    speech = scene.voice.reentry.trim()
  } else if ( scene.voice.intro ) {
    speech = scene.voice.intro.trim()
  }
  if (prefix && speech) {
    return prefix + '<break time="200ms" /> ' + speech
  } else if (prefix && !speech) {
    return prefix
  }
  return speech
}

function buildPrompt ( scene, isForSpeech ) {
  var utils = require('./utils')
  var options = []

  if ( scene.voice.prompt ) return scene.voice.prompt.trim()

  if ( scene.options ) {
    options = scene.options.filter( function ( option ) {
      return ! utils.findResponseBySceneId( option.sceneId ).isHidden
    }).map( function ( option ) {
      return option.utterances[0]
    })
  }

  var hasOptions = ( options.length > 0 )
  if ( ! hasOptions) {
    // there are no options on this scene, but we aren't reprompting with the previous scene's options.
    options[0] = 'previous scene';
  }

  var preamble = options.length > 1 ? 'You can say, ' : 'Say, '
  return assemble( preamble, options, isForSpeech )
}

function assemble ( preamble, options, isSpeech ) {
  var options = options.map( function ( option, index, array ) {
    if ( array.length > 1 && index === array.length -1 ) {
      return ( isSpeech ? '<break time="100ms" />' : '' ) + 'or “' + capitalize( option ) + '.”'
    }
    else if ( index == array.length -2 ){
      return '“' + capitalize( option ) + '”'
    }
    else if ( array.length === 1 ) {
      return '“' + capitalize( option ) + '.”'
    }
    else {
      return '“' + capitalize( option ) + ',”'
    }
  })
  return  preamble + options.join(' ')
}

function capitalize ( str ) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
