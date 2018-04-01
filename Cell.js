
function Cell(i,j)
{
	this.i = i;
	this.j = j;
	this.walls = [true, true, true, true];
	this.visited = false;
	this.visited2 = false;


	this.highlight = function(ch)
	{
		var x = this.i*(w);
		var y = this.j*(w);
		noStroke();
		if(ch ==1)
		{

		fill(0,244,32,220);
		}
		if(ch ==3)
		{

		fill(255,0,3,220);
		}
		if(ch ==2)
		{
		fill(0,0,232,220);

		}
		rect(x,y,w,w);
	}

	this.checkNeigbors = function()
	{
		var neighbors = [];
		var top    = grid[index( i    , j - 1 )]
		var right  = grid[index( i + 1, j     )]
		var bottom = grid[index( i    , j + 1 )]
		var left   = grid[index( i - 1, j     )]
		if(top &&!top.visited)
		{
			neighbors.push(top);	
		}
		if(right &&!right.visited)
		{
			neighbors.push(right);	
		}
		if(bottom &&!bottom.visited)
		{
			neighbors.push(bottom);	
		}
		if(left &&!left.visited)
		{
			neighbors.push(left);	
		}

		if(neighbors.length > 0)
		{
			var r  = floor(random(0,neighbors.length))
			return neighbors[r];
		}
		else
		{
			return undefined;
		}
	}


	this.checkNeigborswalls = function()
	{

		var neighbors = [];
		var top    = grid[index( i    , j - 1 )]
		var right  = grid[index( i + 1, j     )]
		var bottom = grid[index( i    , j + 1 )]
		var left   = grid[index( i - 1, j     )]
		if(top &&!top.visited2 && !top.walls[2])
		{
			neighbors.push(top);	
		}
		if(right &&!right.visited2 && !right.walls[3])
		{
			neighbors.push(right);	
		}
		if(bottom &&!bottom.visited2 && !bottom.walls[0])
		{
			neighbors.push(bottom);	
		}
		if(left &&!left.visited2 && !left.walls[1])
		{
			neighbors.push(left);	
		}

		if(neighbors.length > 0)
		{
			var r  = floor(random(0,neighbors.length))
			return neighbors[r];
		}
		else
		{
			return undefined;
		}
	
	}

	this.show = function()
	 { 
		var x = this.i*w;
		var y = this.j*w;
		fill(255);
		stroke(255);
		strokeWeight(1);
		if(this.walls[0])
		{
			line(x  , y  ,  x+w, y  );
		}
		if(this.walls[1])
		{
			line(x+w, y  ,  x+w, y+w);
		}
		if(this.walls[2])

		{
			line(x+w, y+w,  x  , y+w);
		}
		if(this.walls[3])
		{
		line(x  , y+w,  x  , y  );
		}

		// if(this.visited)
		// {
		// 	noStroke();
		// 	fill(255,0,255,100);
		// 	rect(x,y,w,w);

		// }
	}
}