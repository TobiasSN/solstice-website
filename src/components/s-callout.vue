<template>
	<div :class="[kind.background, kind.border]" border-solid border-1 border-rounded-2 p-2 gap-1 flex flex-col>
		<div flex gap-1>
			<div :class="kind.icon" />
			<b capitalize>{{ props.kind }}</b>
		</div>
		<div>
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
interface Kind {
	icon: `i-${string}:${string}`
	background: `bg-${string}`
	border: `border-${string}`
}

const kinds = {
	info: {
		icon: "i-carbon:information",
		background: "bg-blue-300",
		border: "border-blue-200"
	}
} satisfies Record<string, Kind>;

const props = defineProps<{
	kind: keyof typeof kinds
}>();

const kind = computed(() => kinds[props.kind])
</script>
