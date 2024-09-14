<script>
	import { page } from '$app/stores';
	let errorMessage = 'And we have no idea what went wrong...';
	if ($page.status == 404) {
		errorMessage = "You're not supposed to be here!";
	}
</script>

<h1>Something went wrong!</h1>
<p>{errorMessage}</p>
