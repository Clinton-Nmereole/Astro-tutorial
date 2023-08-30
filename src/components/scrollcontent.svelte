<script lang='ts'>
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../styles/global.css';

import { ProgressBar } from '@skeletonlabs/skeleton';

let projects = ["Rust Todo App", "GoWiki", "Svelte Authentication", "LinkedIn Bot"]

</script>

<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
	  {#each projects as project}
		  <div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{project}</div>
	  {/each}
</div>
