<script language="ts">
	import { page } from "$app/stores";
	let errorMessage = "And we have no idea what went wrong...";
	if ($page.status == 404) {
		errorMessage = "You're not supposed to be here!";
	} else if ($page.status == 500) {
		errorMessage = "You see a wrench in the works. You should probably tell someone.";
	}
	errorMessage += ` (error code: ${$page.status})`;
</script>

<div class="main-container">
	<h1>Something went wrong!</h1>
	<p>{errorMessage}</p>
</div>

<style>
	.main-container {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 15px;
		background-color: #f7f7f7;
	}
	h1,
	p {
		text-align: center;
	}
</style>
