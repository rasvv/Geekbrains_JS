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

			// if ((this.nextPosition.x === 0) || (this.nextPosition.x === config.colCount+1) || (this.nextPosition.y === 0) || (this.nextPosition.y === config.rowCount+1)) {

			// }


			return direction;
		}
	},

	checkBorders(direction) {

		if (player.x === 1 && player.y === 1) {
			if ([1, 4, 7, 8, 9].includes(direction)){
				return true;
			} 
		} else 
		if (player.x === 1 && player.y === config.rowCount) {
			if ([1, 2, 3, 4, 7].includes(direction)){
				return true;
			} 
		} else  
		if (player.x === config.colCount && player.y === 1) {
			if ([3, 6, 7, 8, 9].includes(direction)){
				return true;
			} 
		} else 
		if (player.x === config.colCount && player.y === config.rowCount) {
			if ([1, 2, 3, 6, 9].includes(direction)){
				return true;
			} 
		} else 
		if (player.x === 1) {
			if ([1, 4, 7].includes(direction)){
				return true;			
			}
		} else
		if (player.x === config.colCount) {
			if ([3, 6, 9].includes(direction)){
				return true;				
			}
		} else
		if (player.y === 1) {
			if ([7, 8, 9].includes(direction)){
				return true;				
			}
		} else
		if (player.y === config.rowCount) {
			if ([1, 2, 3].includes(direction)){
				return true;				
			}
		} else
		{
			return false;
		}
		
	},

	getnextPosition(direction) {
		const nextPosition = {
			x: player.x,
			y: player.y
		};
		if (!this.checkBorders(direction)) {
			switch (direction) {
				case 1:
					nextPosition.x--;
					nextPosition.y++;
					break;
				case 2:
					nextPosition.y++;
					break;
				case 3:
					nextPosition.x++;
					nextPosition.y++;
					break;
				case 4:
					nextPosition.x--;
					break;
				case 6:
					nextPosition.x++;
					break;
				case 7:
					nextPosition.x--;
					nextPosition.y--;
					break;
				case 8:
					nextPosition.y--;
					break;
				case 9:
					nextPosition.x++;
					nextPosition.y--;
					break;
			}
			return nextPosition;	
		}
		return nextPosition;	
	}
};