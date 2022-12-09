<template>
	<section class="wrapper gradient-filler">
		<img src="/flave-static.jpg" class="responsive" />
		<article>
			<h2>Flave</h2>
			<p>stuff</p>
		</article>
	</section>
</template>

<style scoped>
.wrapper {
	@apply dark:text-gray-200 flex flex-col items-center py-20 gap-y-12;
}

.gradient-filler {
	background-image: ;
}

.responsive {
	@apply rounded-full
		w-[18rem] h-[18rem]
		md:w-1/3 md:h-1/3
		lg:w-1/4 lg:h-1/4
		2xl:w-1/5 2xl:h-1/5;
}

article {
	@apply text-center flex flex-col gap-y-2 lg:gap-y-5;
}

h2 {
	@apply font-bold text-[2.15rem] lg:text-5xl;
}

p {
	@apply text-xl lg:text-2xl;
}
</style>