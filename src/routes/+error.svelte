<script>
	import { page } from "$app/stores";
	let errorMessage = "And we have no idea what went wrong...";
	if ($page.status == 404) {
		errorMessage = "You're not supposed to be here!";
	} else if ($page.status == 500) {
		errorMessage = "You see a wrench in the works. You should probably tell someone.";
	}
</script>

<h1>Something went wrong!</h1>
<p>{errorMessage}</p>
