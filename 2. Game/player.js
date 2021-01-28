const player = {
	x: 2,
	y: 2,

	move(nextPoint){
		this.x = nextPoint.x;
		this.y = nextPoint.y;
	},
};