<template>
	<vx-card class="overlay-card overflow-hidden w-1/3">
		<template slot="no-body">
			<img :src="$withBase('/cardOverlay.jpg')" alt="user-profile-cover" class="responsive">
			<div class="card-overlay text-white flex flex-col justify-between">
				<h4 class="text-white mb-4">Beautiful Overlay</h4>
				<p>Cake sesame snaps cupcake gingerbread danish I love gingerbread.</p>
			</div>
		</template>
	</vx-card>
</template>