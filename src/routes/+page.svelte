<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>Comments</title>
</svelte:head>

<h1>Post Comment as {data.username}</h1>
<form method="POST" action="?/post_comment">
	<label>
		<textarea
			style:min-height="100px"
			style:min-width="40%"
			class="commentBox"
			name="Comment"
			type="text"
			placeholder="Type your comment"
		/>
		<br />
		<button type="submit">Comment</button>
	</label>
</form>
<br />
<h1>Comments</h1>
<ul>
	{#each data.comments as comment}
		<li>{comment.comment_id} - {comment.comment}</li>
	{/each}
</ul>
