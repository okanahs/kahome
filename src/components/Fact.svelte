<script lang="ts">
	export let facts:string[];
	const randomFact = facts[Math.floor(Math.random() * facts.length)];
	// console.log(facts)
</script>
<p class="text-center text-white font-medium">{randomFact}</p>
