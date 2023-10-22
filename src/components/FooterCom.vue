<script setup lang="ts">
import { getTotalCall } from '../http';
import { ref } from 'vue';

const totalCall = ref(0);
(async () => {
	totalCall.value = await getTotalCall();
})();
</script>

<template>
	<div class="footer mdui-typo-caption mdui-p-b-2 mdui-text-color-white-secondary mdui-text-center">
		Made By
		<a target="_blank" class="mdui-text-color-theme" style="text-decoration: none" href="https://github.com/biyuehu"
			>Hotaru</a
		>
		<br />
		<a href="https://hotaru.icu" target="_blank">HotaruBlog</a> | Api Calls {{ totalCall }} times
	</div>
</template>
