varying vec2 vUv;
uniform sampler2D uTexture;

float getElevation(vec2 uv) {
    return (1.0 - texture2D(uTexture, uv).r) * 0.05;
}

vec2 getUvFromPosition(vec3 position) {
    return position.xy + 0.5;
}

void main() {
    vec3 newPosition = position;
    float displacement = getElevation(uv);
    csm_Position.z += displacement;

    float shift = 0.001;
    vec3 positionA = position + vec3(shift, 0.0, 0.0);
    vec3 positionB = position + vec3(0.0, shift, 0.0);
    positionA.z += getElevation(getUvFromPosition(positionA));
    positionB.z += getElevation(getUvFromPosition(positionB));
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    vUv = getUvFromPosition(csm_Position.xyz);
}
