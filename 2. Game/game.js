let game = {
	run(){
		while (true) {
			const direction = mover.getDirection();
			if (direction === null) {
				console.log("Игра окончена");
				return;
			}
			const nextPoint = mover.getnextPosition(direction);
			renderer.clear();
			player.move(nextPoint);
			renderer.render();
		}
	},

	init() {
		console.log("Ваше положение на поле в виде X.");
		renderer.render();
		console.log("Чтобы начать игру наберите game.run() и нажмите Enter");
	}
};
game.init();