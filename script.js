console.log("jede to");

function checkX()
{
	x = document.getElementById('x').value;
	if(!(Number.isInteger(+x)) || !(x >= 1) && x != ""){
		document.getElementById('explX').style.display = "block";
		return 1;
	}
	document.getElementById('explX').style.display = "none";
	return 0;
}
function checkY()
{
	y = document.getElementById('y').value;
	if(!(Number.isInteger(+y)) || !(y >= 1) && y != ""){
		document.getElementById('explY').style.display = "block";
		return 1;
	}
	document.getElementById('explY').style.display = "none";
	return 0;
}

function tableCreate(x,y) {
	tbl = document.createElement('table');
	tbl.style.border = '1px solid black';
	tbl.style.margin = '10px';

	for (let i = 0; i <= y; i++) {
		const tr = tbl.insertRow();
		for (let j = 0; j <= x; j++) {
			const td = tr.insertCell();
			if(i == 0 && j >= 1)
				td.appendChild(document.createTextNode(`x=${j}`));
			else if(i >= 1 && j == 0)
				td.appendChild(document.createTextNode(`y=${i}`));
			else if(i != 0 && j != 0)
				td.appendChild(document.createTextNode(`${i*j}`));
			td.style.border = '1px solid black';
			td.style.padding = '10px';
		}
	}
	document.getElementById("vrstvaNad").appendChild(tbl);
}

document.getElementById('odovzdavac').addEventListener("click", function () {
	if(checkX() == 1 || checkY()==1 || x=="" || y=="")
		return false;
	document.getElementById("vrstvaNad").innerHTML = "";
	
	document.getElementById("vrstvaNad").style.display = "block";
	var close = document.createElement("div");
	close.style.width = "50px";
	close.style.height = "50px";
	close.style.backgroundColor = "red";
	close.style.margin = "10px";
	close.addEventListener("click", function(){
		document.getElementById("vrstvaNad").style.display = "none";
		document.getElementById("vrstvaNad").innerHTML = "";
	});
	document.getElementById("vrstvaNad").appendChild(close);
	
	tableCreate(x,y);
})

