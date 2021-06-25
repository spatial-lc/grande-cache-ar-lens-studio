// ChainedTweenSyncHelper.js
// Version: 0.1.0
// Event: Lens Initialized
// Description: Manually sync multiple tweens to avoid drifting over time
//@ui {"label":"All Tween Objects must have a tween or tween chain with"}
//@ui {"label":"same length (tweenLength) and name (tweenName)"}
//@ui{"widget":"separator"}
//@input bool playAutomatically
//@input string startTrigger{"showIf":"playAutomatically","showIfValue":"false"}
//@input string tweenName {"hint":"all"}
//@input float tweenLength
//@input SceneObject[] tweenObjects


var counter = 0.0;
var tweenStarted = false;

if (script.playAutomatically) {
    onStart();
}


function onStart() {
    
    for (var i=0;i<script.tweenObjects.length;i++) {
        global.tweenManager.startTween(script.tweenObjects[i], script.tweenName);
    }
    tweenStarted = true;

}


function onUpdate() {

    if (tweenStarted) {
        counter += getDeltaTime();
        if (counter > script.tweenLength) {
            onStart();
            counter = 0;
        }
    }
}

script.createEvent("UpdateEvent").bind(onUpdate);
