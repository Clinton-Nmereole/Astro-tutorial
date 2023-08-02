<script lang="ts">
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

import '@skeletonlabs/skeleton/styles/skeleton.css';

import '../styles/global.css'


import '../components/Navigation.astro';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-3xl uppercase text-secondary-400">Portfolio</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
