<template>
	<div class="prose">
		<h1>Travel advisories</h1>
		<section>
			<h2>Levels</h2>
			<h3>{{ labels["normal"] }}</h3>
			<p>Take similar security precautions to those you normally do within Solstice.</p>
			<h3>{{ labels["caution"] }}</h3>
			<p>
				The security situation in this country may change quickly and
				unexpectedly. Be cautious, monitor local media, and be prepared to
				exit the country early if necessary.
			</p>
			<h3>{{ labels["necessary"] }}</h3>
			<p>
				The risk associated	with travel may be so great, that you should
				reconsider if your trip is really necessary. Necessary travel
				may include funerals, court cases and important business travel.
				Regular tourism is not considered necessary. If you are in the
				country and your trip is not necessary, you should attempt to
				leave at the earliest possible safe opportunity.
			</p>
			<h3>{{ labels["avoid"] }}</h3>
			<p>
				Avoid all travel to this country. If you decide to travel
				anyway, seek professional security advice. If you are already
				within the country, you should attempt to leave at the earliest
				possible safe opportunity.
			</p>
		</section>
		<section>
			<h2>Advisories</h2>
			<p>
				<ul>
					<li v-for="(advisory, name) in advisories">
						<b>{{ name }}: </b>{{ labels[advisory] }}
					</li>
				</ul>
			</p>
		</section>
	</div>
</template>
<script setup lang="ts">
type Advisory = "normal" | "caution" | "necessary" | "avoid";

const labels: Record<Advisory, string> = {
	normal: "Exercise a standard degree of caution",
	caution: "Exercise a high degree of caution",
	necessary: "Avoid all unnecessary travel",
	avoid: "Avoid all travel"
};

const advisories: Record<string, Advisory> = {
	"Aura Regions": "normal",
	"TAY": "caution",
	"KR": "avoid"
};
</script>
