<script lang='ts'>
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../styles/global.css';

import { ProgressBar } from '@skeletonlabs/skeleton';
</script>

<ProgressBar label="Progress Bar" value={70} max={100} />
