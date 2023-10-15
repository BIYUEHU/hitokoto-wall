<template>
	<div id="body" class="mdui-theme-primary-pink mdui-loaded">
		<div class="mdui-progress" style="position: fixed" v-show="false">
			<div class="mdui-progress-indeterminate"></div>
		</div>
		<div style="position: fixed" class="mdui-toolbar mdui-text-color-white-icon">
			<div class="mdui-toolbar-spacer"></div>
			<span @click="mdui.alert(helpTemplate)" class="mdui-btn mdui-btn-icon" mdui-tooltip="{content:'Help'}"
				><i class="mdui-icon material-icons">info</i></span
			>
			<a href="https://hotaru.icu/archives/129/" class="mdui-btn mdui-btn-icon" mdui-tooltip="{content:'Doc'}"
				><i class="mdui-icon material-icons">book</i></a
			>
			<a
				href="https://github.com/biyuehu/hitokoto-wall"
				class="mdui-btn mdui-btn-icon"
				mdui-tooltip="{content:'Github'}"
				><i class="mdui-icon material-icons">code</i></a
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import mdui from 'mdui';

const helpTemplate = /* html */ `<div align="center">
    <img src="https://img.shields.io/github/license/biyuehu/animewall" />
    <img src="https://img.shields.io/github/last-commit/biyuehu/animewall" />
    <img src="https://img.shields.io/github/commit-activity/t/biyuehu/animewall" />
    <img src="https://img.shields.io/github/commit-activity/t/biyuehu/animewall" />
    <br />
    ⚡番组计划收藏动画&Galgame展示网页，基于<mark>Vue</mark>+<mark>TypeScript</mark>+<mark>Vite</mark>开发⚡
    <br />
    <a href="https://github.com/BIYUEHU/animewall" target="_blank">Github🔗</a>
    </div>`;
</script>
