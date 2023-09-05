<script lang='ts'>
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../styles/global.css';

import { ProgressBar } from '@skeletonlabs/skeleton';

import img1 from '../assets/AxumTodoScreenshot.png';

import img2 from '../assets/GowikiScreenshot.png';

import img3 from '../assets/Newsbites_createAcc.png';

import img4 from '../assets/stockdata.png';

let projects = ["Rust Todo App", "GoWiki", "Svelte Authentication", "Stock Data Analysis"]

let urls = ["https://github.com/Clinton-Nmereole/AxumTodo", "https://github.com/Clinton-Nmereole/GoWiki", "https://github.com/Clinton-Nmereole/SvelteCreateAccountPage", "https://github.com/Clinton-Nmereole/LinkedInBot"]

let images = [img1, img2, img3, img4]

</script>

<div class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
		{#each images as image, i}
			<a class="shrink-0 w-[28%] snap-start hover:scale-110" href={urls[i]} target="_blank">
				<img
					class="rounded-container-token hover:brightness-125 hover:contrast-125"
					src={image}
					alt="project name"
					title={projects[i]}
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
