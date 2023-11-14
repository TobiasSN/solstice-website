import { defineConfig, presetIcons, presetWind, presetAttributify, transformerDirectives } from "unocss";

export default defineConfig({
	presets: [presetAttributify(), presetIcons({
		scale: 1.25,
		extraProperties: {
			"display": "inline-block",
			"vertical-align": "text-bottom"
		}
	}), presetWind()],
	transformers: [transformerDirectives()]
});
