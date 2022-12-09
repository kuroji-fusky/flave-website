<script lang="ts" setup>
interface ContainerProps {
	title?: string
	description?: string
	class?: string
}

const props = defineProps<ContainerProps>()

const url = ""

useHead({
	title: props.title,
	meta: [
		{ name: "description", content: props.description },
		{ property: "og:title", content: props.title },
		{ property: "og:description", content: props.description },
		{ property: "og:url", content: `${url}/` },
		{ property: "og:type", content: "website" },
		{ name: "twitter:title", content: props.title },
		{ name: "twitter:description", content: props.description },
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:url", content: `${url}/` },
	]
})
</script>

<template>
	<main :class="class">
		<slot />
	</main>
</template>