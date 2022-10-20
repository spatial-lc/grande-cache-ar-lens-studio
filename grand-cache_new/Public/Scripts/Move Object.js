// @input SceneObject sceneObject
// @input vec3 movement
// @input bool useLocalSpace
// @input bool useDeltaTime

var tr = script.sceneObject.getTransform();

var offset = script.movement;
if (script.useDeltaTime) {
    offset = offset.uniformScale(getDeltaTime());
}

if (script.useLocalSpace) {
    tr.setLocalPosition(tr.getLocalPosition().add(offset));
} else {
    tr.setWorldPosition(tr.getWorldPosition().add(offset));
}
