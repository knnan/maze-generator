var w = 20;
var cols;
var rows;
var grid = []
var current;
var current2;
var stack = []
var stack2 = []
var totalnotvisited = 0;
function setup()
{
	createCanvas(600,600);
	cols  = floor(width/w);
	rows  = floor(height/w);
	for(var j = 0;j<rows;j++)
	{
		for(var i = 0;i<cols;i++)
		{
			cell = new Cell(i,j);
			grid.push(cell);
		}
	}
	current = grid[0];
	current2 = grid[0];
}


function index(i,j)
{
	if(i < 0 || j < 0 || i > cols -1 || j > rows-1 )
	{
		return -1;
	}
	var index = i + j * cols;
	return index;
}
function draw()
{
	background(51);

	if(current2.i == cols-1 && current2.j == rows-1)
	{
		noLoop();
	}
	for( var i =0;i<stack2.length;i++)
	{
		stack2[i].highlight(1);

		stack2[0].highlight(3);
	}
	totalnotvisited = 0;
	for(var i =0; i<grid.length;i++)
	{
		grid[i].show();
		if(!grid[i].visited)
		{
			totalnotvisited++;
		}
	}
	

	if(totalnotvisited != 0)
	{
		mazeGenerate();
	}
	else
	{

		Solvemaze();
	}


}

function Solvemaze()
{
	current2.visited2 = true;
	current2.highlight(2);
	//step 1
	var next = current2.checkNeigborswalls();
	if(next)
	{
		next.visited2 = true;
	 	//step 2
	 	stack2.push(current2);
	 	current2.highlight(2);
	 	//step 3
	 	current2  = next;
	 }
	 else if(stack2.length> 0 )
	 {
	 	current2 = stack2.pop();
	 	current2.highlight(1)
	 }


	}
	function mazeGenerate()
	{


		current.visited = true;
		current.highlight(1);
	//step 1
	var next = current.checkNeigbors();
	if(next)
	{
		next.visited = true;
	 	//step 2
	 	stack.push(current);
	 	//step 3
	 	removeWalls(current,next);
	 	//step 4
	 	current  = next;
	 }
	 else if(stack.length> 0 )
	 {
	 	current = stack.pop();
	 }


	}

	function removeWalls(a, b)
	{
		var x = a.i - b.i;
		var y = a.j - b.j;

		if(x === 1)
		{
			a.walls[3] = false;
			b.walls[1] = false;
		}
		else if(x === -1)
		{
			a.walls[1] = false;
			b.walls[3] = false;
		}

		if(y === 1)
		{
			a.walls[0] = false;
			b.walls[2] = false;
		}
		else if(y === -1)
		{
			a.walls[2] = false;
			b.walls[0] = false;
		}
	}