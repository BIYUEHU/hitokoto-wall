<script setup lang="ts">
import { computed, ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { getHitokotoDefault, likeHitokoto } from '../http';
import store from '../store';
import { hitokotoData, hitokotoDefault, getHitokotoId, spawnHitokotoId } from '../func';
import mdui from 'mdui';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const Store = store();
const hitokotoRes = ref<null | hitokotoData<hitokotoDefault>>(null);

const hitokotoHandle = computed(() => {
	if (!hitokotoRes.value) return '';
	const data = hitokotoRes.value.data;
	data.from = data.from?.trim();
	return `${data.msg}${data.from ? ` ——${data.from}` : ''}`;
});

const isLike = computed(() => {
	if (!hitokotoRes.value) return false;
	return Store.likes.includes(hitokotoRes.value.data.id);
});

const getHitokoto = async (id?: number) => {
	hitokotoRes.value = await getHitokotoDefault(id);
};

const likeThisHitokoto = async () => {
	if (isLike.value) {
		mdui.snackbar(/* html */ `<span style="color: deepskyblue">已赞过该语录</span>`);
		return;
	}
	if (!hitokotoRes.value) return;
	const id = hitokotoRes.value.data.id;
	await likeHitokoto(id);
	Store.newLike(id);
	mdui.snackbar(/* html */ `<span style="color: pink">点赞成功</span>`);
	hitokotoRes.value.data.likes += 1;
};

const shareHitokoto = () => {
	if (!hitokotoRes.value || typeof proxy !== 'object' || !('$copyText' in (proxy as object))) return;
	const content = `${window.location.href.split('?')[0]}?id=${spawnHitokotoId(hitokotoRes.value.data.id)}`;
	(proxy as any).$copyText(content).then(
		() => {
			mdui.snackbar(/* html */ `<span style="color: lightgreen">复制成功 ${content}</span>`);
		},
		() => {
			mdui.snackbar(/* html */ `<span style="color: red">复制失败</span>`);
		},
	)(proxy, content);
};

getHitokoto(getHitokotoId() ?? undefined);
</script>

<template>
	<div>
		<div style="padding-top: 20vh">
			<div class="mdui-container-fluid mdui-typo">
				<h1 class="app-title mdui-typo-display-3 mdui-text-center mdui-text-color-white mdui-hidden-sm-down">
					<strong>蛍の一言ひとこと</strong>
				</h1>
			</div>
		</div>
		<div style="padding-top: 15vh">
			<div class="mdui-container-fluid mdui-typo">
				<div
					class="app-title mdui-typo-display-3 mdui-text-center mdui-text-color-white"
					style="font-size: 1.5rem"
					v-if="hitokotoRes"
				>
					{{ hitokotoHandle }}
					<br />
					<small
						><strong>
							<span style="color: rgb(151, 219, 177)">Type: {{ hitokotoRes.data.type }}</span> |
							<span style="color: rgb(245, 184, 184)">Likes: {{ hitokotoRes.data.likes }}</span>
						</strong>
					</small>
					<br />
					<button class="mdui-btn mdui-btn-raised mdui-ripple" @click="likeThisHitokoto">
						<i class="mdui-icon material-icons">{{ isLike ? 'favorite' : 'favorite_border' }}</i>
					</button>
					<button
						style="margin-left: 10px"
						class="mdui-btn mdui-btn-raised mdui-ripple"
						@click="getHitokoto()"
					>
						<i class="mdui-icon material-icons">skip_next</i>
					</button>
					<button
						style="margin-left: 10px"
						class="mdui-btn mdui-btn-raised mdui-ripple"
						@click="shareHitokoto"
					>
						<i class="mdui-icon material-icons">share</i>
					</button>
				</div>
				<div class="mdui-row mdmdui-textfield-invalidui-row-gapless mdui-m-t-5">
					<div
						id="pixiv-div"
						class="mdui-textfield-has-bottom mdui-center mdui-col-lg-5 mdui-col-md-6 mdui-col-sm-10 mdui-col-xs-11"
						style="float: none"
					>
						<!-- 						<input
							@blur="keyword && getImgsData()"
							v-model="keyword"
							class="mdui-textfield-input mdui-text-color-white mdui-p-r-4"
							type="text"
							placeholder="Seach Pixiv images"
						/>
						<div class="mdui-textfield-error" style="text-shadow: 1px 1px 2px #bbb">
							Cannot find in need
						</div>
						<button
							style="position: absolute; right: 0; top: 0"
							@click="keyword = ''"
							class="mdui-btn mdui-btn-icon mdui-ripple mdui-btn-dense"
						>
							<i class="mdui-icon material-icons mdui-text-color-white-icon">close</i>
						</button> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
