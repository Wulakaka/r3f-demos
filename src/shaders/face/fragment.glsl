varying vec2 vUv;
uniform vec3 uColor;
//uniform sampler2D uTexture;

void main() {
//    vec3 color = texture2D(uTexture, vUv).rgb;
    csm_DiffuseColor = vec4(uColor, 1.0);
//    csm_FragColor = vec4(vUv,1.0, 1.0);
}
