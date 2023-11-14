<template>
	<div>
		<label flex flex-col>
			<div><b>{{ label }}</b></div>
			<input :placeholder="placeholder" :required="required" :type="type" :value="modelValue"
				@input="$emit('update:modelValue', $event?.target?.value)">
		</label>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	label: string;
	type: string;
	modelValue?: string;
	required?: boolean;
	placeholder?: string;
}>();

defineEmits(["update:modelValue"])
</script>
