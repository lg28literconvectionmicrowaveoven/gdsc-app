<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<form method="POST" action="?/post_comment">
	<label>
		User ID {data.current_user_id}
	</label>
	<label>
		Comment
		<input name="Comment" type="text" />
	</label>
</form>

<ul>
	{#each data.comments as comment}
		<li>{comment.comment_id} - {comment.comment}</li>
	{/each}
</ul>
