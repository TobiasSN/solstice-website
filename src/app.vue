<template>
	<div class="container" my-4>
		<header mb-4>
			<nav flex h-12 justify-between>
				<nuxt-link to="/" flex items-center gap-4>
					<img h-12 src="/flag.svg">
					<div>Solstice</div>
				</nuxt-link>

				<ul flex gap-4 items-center>
					<li v-for="item in navbarLinks" :key="item.name" flex>
						<nuxt-link :to="item.to"> {{ item.name }}</nuxt-link>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<router-view />
		</main>
		<footer class="callout">
			<s-callout kind="info">
				This website is for a fictional country on the
				<a href="https://aircs.racing">
					bits & Bytes Minecraft server
				</a>
			</s-callout>
		</footer>

	</div>
</template>
<script setup lang="ts">
const navbarLinks = [
	{
		name: "Home",
		to: "/"
	},
	{
		name: "Travel advisories",
		to: "/travel-advisories"
	}
];
</script>
<style>
.container {
	max-width: 768px;
	margin-left: auto;
	margin-right: auto;
}



/*.callout {
	--alert-secondary-color: theme("colors.yellow.300");
	border: 0.125rem solid theme('colors.yellow.500');
	border-radius: 0.5rem;
	padding: 0.5rem;
}*/
</style>
