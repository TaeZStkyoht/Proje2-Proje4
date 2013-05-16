#version 120

uniform sampler2D fbo_texture;
uniform sampler2D CorrectionColor;
varying vec2 f_texcoord;

void main(void) {
	vec3 InColor = texture2D(fbo_texture, f_texcoord).xyz;
	vec3 OutColor;
	OutColor.x = texture2D(CorrectionColor, vec2(InColor.x, 1)).r;
	OutColor.y = texture2D(CorrectionColor, vec2(InColor.y, 1)).g;
	OutColor.z = texture2D(CorrectionColor, vec2(InColor.z, 1)).b;
    gl_FragColor = vec4(OutColor, 1.0);
}