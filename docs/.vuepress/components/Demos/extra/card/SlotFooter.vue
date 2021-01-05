<template>
	<vx-card title="Card Title">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

		<template slot="footer">
			<div class="flex justify-between">
				<router-link to="/">Link 1</router-link>
				<router-link to="/">Link 2</router-link>
			</div>
		</template>
	</vx-card>
</template>