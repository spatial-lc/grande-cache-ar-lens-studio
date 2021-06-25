var curPos = undefined;

var transform = script.getSceneObject().getTransform();

var speed = 10.0;

script.createEvent("TouchStartEvent").bind(function (eventData) {

    curPos = eventData.getTouchPosition();

});

script.createEvent("TouchMoveEvent").bind(function (eventData) {

    if(!curPos)

        return;

    var nextPos = eventData.getTouchPosition();

    var deltaX = nextPos.x - curPos.x;

    var deltaY = nextPos.y - curPos.y;


    var mat = transform.getInvertedWorldTransform();

    var axisX = mat.multiplyDirection(vec3.up());

    var deltaRotX = quat.angleAxis(deltaX * speed, axisX);

    var axisY = mat.multiplyDirection(vec3.right());

    var deltaRotY = quat.angleAxis(deltaY * speed, axisY);

    var rot = transform.getLocalRotation().multiply(deltaRotX).multiply(deltaRotY);

    transform.setLocalRotation(rot);

    curPos = nextPos;

});