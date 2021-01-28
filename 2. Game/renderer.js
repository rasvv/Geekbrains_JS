let renderer = {

	map: "",
	render(){
		map = "";
		for(let row = 0; row < config.rowCount+2; row++){
			for(let col = 0; col < config.colCount+2; col++){
				if (col === player.x && row ===player.y){
						this.map += 'X ';
				} else
				
				if(row === 0) {
					if (col === 0) {
						this.map += ' _';						
					} else
					if (col === config.colCount+1) {
						this.map += '';						
					} else {
						this.map += '__';
					}				
				} else

				if (row === config.rowCount+1) {
					if (col === 0) {
						this.map += '|_';						
					} else 
					if (col === config.colCount+1) {
						this.map += '|';						
					} else {
						this.map += '__';
					}
				} else

				if (col === 0 || col === config.colCount+1) {
					this.map += '| ';
				} else {
					this.map += '. ';	
				}
			}
			this.map += '\n';
		}
		console.log(this.map);
	},

	clear() {
		console.clear();
		this.map = "";
	}
};