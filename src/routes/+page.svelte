<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	let comment = "";
	let errorMessage = "";
	function validateForm(event) {
		if (!comment.trim()) {
			event.preventDefault();
			errorMessage = "Comment cannot be empty.";
		} else {
			errorMessage = "";
		}
	}
</script>

<svelte:head>
	<title>Comments</title>
</svelte:head>

<div class="main-container">
	<h1>Post Comment as {data.current_username}</h1>
	<form method="POST" action="?/post_comment" on:submit={validateForm}>
		<div style:padding-bottom="1%">
			<textarea name="Comment" type="text" placeholder="Type your comment" bind:value={comment} />
			{#if errorMessage}
				<h3 style:color="red">{errorMessage}</h3>
			{/if}
		</div>
		<button type="submit">Comment</button>
	</form>
</div>
<br />
<div class="main-container">
	<h1>Comments</h1>
	{#each data.comments as comment}
		<div class="comment-container">
			<div class="comment-header">
				<span class="comment-username">{comment.username}</span>
				<span class="comment-date"
					>{comment.day}
					{comment.month}
					{comment.year}, {comment.hour}:{comment.minute}:{comment.second}</span
				>
			</div>
			<div class="comment-text">
				{comment.comment}
			</div>
		</div>
	{/each}
</div>

<style>
	textarea {
		min-height: 100px;
		min-width: 70%;
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		border-radius: 8px;
		font-family: "JetBrains Mono", monospace;
		font-optical-sizing: auto;
		font-style: normal;
		background-color: #f9f9f9;
		border: 3px solid #ddd;
		padding: 7px;
	}
	button {
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		padding: 10px;
		border-radius: 8px;
		font-size: 90%;
		background-color: #f0f0f0;
		border: 2px solid #ddd;
	}
	.comment-container {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 15px;
		margin-bottom: 10px;
		background-color: #f0f0f0;
	}
	.main-container {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 15px;
		background-color: #f7f7f7;
	}
	.comment-header {
		font-size: 14px;
		color: #555;
		margin-bottom: 4px;
	}

	.comment-username {
		font-weight: bold;
		margin-right: 5px;
	}

	.comment-text {
		font-size: 16px;
		margin-top: 5px;
	}

	.comment-date {
		color: #999;
		font-size: 12px;
	}
</style>
