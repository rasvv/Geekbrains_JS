let mover = {
	getDirection() {
		const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
		while (true) {
			let direction = parseInt(prompt("Укажите направление: "));
			if (isNaN(direction)) {
				return null;
			}
			if (!availableDirection.includes(direction)) {
				continue;
			}

			return direction;
		}
	},


	checkBorders(x, y){
		let newX = player.x + x;
		let newY = player.y + y;
		if (newX === 0 || newX === config.colCount + 1 || newY === 0 || newY === config.rowCount + 1){
			return true;
		} else {
			return false;
		}

	},


	getnextPosition(direction) {
		const nextPosition = {
			x: player.x,
			y: player.y
		};
		// if (!this.checkBorders(direction)) {
			switch (direction) {
				case 1:
					if (!this.checkBorders(-1, 1)) {
						nextPosition.x--;
						nextPosition.y++;
					};
					break;
				case 2:
					if (!this.checkBorders(0, 1)) {
						nextPosition.y++;
					};
					break;
				case 3:
					if (!this.checkBorders(1, 1)) {
						nextPosition.x++;
						nextPosition.y++;
					};
					break;
				case 4:
					if (!this.checkBorders(-1, 0)) {
						nextPosition.x--;
					};
					break;
				case 6:
					if (!this.checkBorders(1, 0)) {
						nextPosition.x++;
					};
					break;
				case 7:
					if (!this.checkBorders(-1, -1)) {
						nextPosition.x--;
						nextPosition.y--;
					};
					break;
				case 8:
					if (!this.checkBorders(0, -1)) {
						nextPosition.y--;
					};
					break;
				case 9:
					if (!this.checkBorders(1, -1)) {
						nextPosition.x++;
						nextPosition.y--;
					};
					break;
			}
			return nextPosition;	
		// }
		// return nextPosition;	
	}
};