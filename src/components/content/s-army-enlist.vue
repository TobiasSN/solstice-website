<template>
	<form flex flex-col gap-2>
		<s-input label="Minecraft username" type="text" v-model="info.username" />
		<s-input label="ID Number" type="text" v-model="info.idNumber" />
	</form>
</template>
<script setup lang="ts">
const info = reactive({
	username: "",
	idNumber: ""
});

watch(() => info.idNumber, () => {});
</script>
