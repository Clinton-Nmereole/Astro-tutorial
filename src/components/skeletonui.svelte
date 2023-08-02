<script lang='ts'>
// Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../styles/global.css';

  import { AppShell, Appbar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-3xl uppercase text-secondary-400">Test</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
</AppShell>
