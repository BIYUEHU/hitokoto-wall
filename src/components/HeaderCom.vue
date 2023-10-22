<script setup lang="ts">
import mdui from 'mdui';

const helpTemplate = /* html */ `<div align="center">
    <img src="https://img.shields.io/github/license/biyuehu/hitokoto-wall">
    <img src="https://img.shields.io/github/last-commit/biyuehu/hitokoto-wall">
    <img src="https://img.shields.io/github/commit-activity/t/biyuehu/hitokoto-wall">
    <br />
    ⚡个人语录墙⚡
    <br />
    <a href="https://github.com/BIYUEHU/hitokoto-wall" target="_blank">Github🔗</a>
    </div>`;
</script>

<template>
	<div id="body" class="mdui-theme-primary-pink mdui-loaded">
		<div class="mdui-progress" style="position: fixed" v-show="false">
			<div class="mdui-progress-indeterminate"></div>
		</div>
		<div style="position: fixed" class="mdui-toolbar mdui-text-color-white-icon">
			<div class="mdui-toolbar-spacer"></div>
			<span
				@click="mdui.alert(helpTemplate)"
				target="_blank"
				class="mdui-btn mdui-btn-icon"
				mdui-tooltip="{content:'Help'}"
				><i class="mdui-icon material-icons">info</i></span
			>
			<a
				href="https://hotaru.icu/archives/129/"
				target="_blank"
				class="mdui-btn mdui-btn-icon"
				mdui-tooltip="{content:'Doc'}"
				><i class="mdui-icon material-icons">book</i></a
			>
			<a
				href="https://github.com/biyuehu/hitokoto-wall"
				target="_blank"
				class="mdui-btn mdui-btn-icon"
				mdui-tooltip="{content:'Github'}"
				><i class="mdui-icon material-icons">code</i></a
			>
		</div>
	</div>
</template>
