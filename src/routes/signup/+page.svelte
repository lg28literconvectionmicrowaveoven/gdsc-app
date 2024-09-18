<script lang="ts">
	let username = "";
	let errorMessage = "";
	function validateForm(event) {
		if (!username.trim()) {
			event.preventDefault();
			errorMessage = "Please enter a valid username.";
		} else {
			errorMessage = "";
		}
		console.log(errorMessage);
	}
</script>

<div class="main-container">
	<form method="POST" on:submit={validateForm} action="?/register_user">
		<h1>Create a new account</h1>
		<div style:padding-bottom="1%">
			<input
				placeholder="Type in your new username"
				name="Username"
				type="text"
				bind:value={username}
			/>
			{#if errorMessage}
				<h3 style:color="red">{errorMessage}</h3>
			{/if}
		</div>
		<button type="submit">Sign up</button>
	</form>
</div>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<style>
	input {
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		border-radius: 8px;
		font-family: "JetBrains Mono", monospace;
		font-optical-sizing: auto;
		font-style: normal;
		font-size: 90%;
		background-color: #f9f9f9;
		border: 2px solid #ddd;
		padding: 7px;
		width: 60%;
	}
	button {
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		font-weight: bold;
		padding: 10px;
		border-radius: 8px;
		font-size: 80%;
		background-color: #f0f0f0;
		border: 2px solid #ddd;
	}
	.main-container {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 15px;
		background-color: #f7f7f7;
	}
</style>
