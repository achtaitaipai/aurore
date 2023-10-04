<script lang="ts">
	import Menu from "./menu.svelte"
</script>

<header class="h-header grid grid-cols-[21fr_13fr] px-9 top-0 bg-white z-10">
	<div class="col-start-2 flex items-center justify-between">
		<a href="/" class="mr-48">
			<img
			src="images/logo.jpg"
			alt="logo Aurore de la Morinerie"
			class="h-20"
			/>
		</a>
		<Menu/>
	</div>
</header>
