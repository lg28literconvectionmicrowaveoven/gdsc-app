<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>Comments</title>
</svelte:head>

<h2>Post Comment as {data.username}</h2>
<form method="POST" action="?/post_comment">
	<label>
		<div class="text-holder">
			<textarea name="Comment" type="text" placeholder="Type your comment" />
		</div>
		<button type="submit">Comment</button>
	</label>
</form>
<br />
<h2>Comments</h2>
<div>
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
		border: solid;
		font-family: "JetBrains Mono", monospace;
		font-optical-sizing: auto;
		font-style: normal;
	}
	button {
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		padding: 10px;
		border-radius: 10px;
		border: solid;
		font-weight: bold;
		font-size: 90%;
	}
	.text-holder {
		padding-bottom: 1%;
	}
	.comment-container {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 12px;
		margin-bottom: 10px;
		background-color: #f9f9f9;
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
