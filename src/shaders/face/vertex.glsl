varying vec2 vUv;
uniform sampler2D uTexture;

float getDisplacement(vec2 uv) {
    return texture2D(uTexture, uv).r * 0.005;
}

void main() {
    vec3 newPosition = position;
    float displacement = getDisplacement(uv);
    csm_Position.z -= displacement;

    float delta = 0.001;
    vec3 positionA = vec3(position.x + delta, position.y, position.z);
    positionA.z -= getDisplacement(uv + vec2(delta, 0.0));
    vec3 toA = positionA - newPosition;
    vec3 positionB = vec3(position.x, position.y - delta , position.z);
    positionB.z -= getDisplacement(uv + vec2(0.0, -delta));
    vec3 toB = positionB - newPosition;
    csm_Normal = normalize(cross(toA, toB));



//    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
//    vec4 viewPosition = viewMatrix * modelPosition;
//    vec4 projectedPosition = projectionMatrix * viewPosition;
//    gl_Position = projectedPosition;

    vUv = uv;
}
