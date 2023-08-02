<script lang="ts">
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

import '@skeletonlabs/skeleton/styles/skeleton.css';

import '../styles/global.css'


import '../components/Navigation.astro';
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
	<body>
    <Navigation />
  </body>
</html>

