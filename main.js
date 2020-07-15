let fetchFunc = () => {
    fetch('test.json', {method: 'GET'})
        .then( response => response.json())
        .then( json => {
            let x = document.createElement("SELECT");
            x.setAttribute("id", "mySelect");
            document.body.appendChild(x);

            for (let i = 0; i<json.car.length; i++){
                let z = document.createElement("option");
                z.setAttribute("value", "car");
                let t = document.createTextNode(json.car[i]);
                z.appendChild(t);
                document.getElementById("mySelect").appendChild(z);
            }
        })
}

let mass = document.getElementById("array");
mass.addEventListener('click', () => fetchFunc());


let table = new Array(10);

for (let i = 0; i < table.length; i++){
    table[i] = new Array(10);
}

for (let r=0; r <table.length; r++){
    let s = '';
    for(let c=0; c < table[r].length; c++){
        table[r][c] = (r+1)*(c+1);
        s += table[r][c]+ ' ';
    }
    console.log(s + '\n');
    s = '';
}