// if ((document.getElementById("display-area").value).slice(0,-1)==="=");
// {calculate();}
function display(num)
{

if(num==="C"){
        document.getElementById("display-area").value=" ";
    }

    else if (num==="=") {
        calculate();  

    } 

    else {
        document.getElementById("display-area").value+=num;
    }
}

function calculate() {
    try {
        const result = eval( document.getElementById("display-area").value);
        document.getElementById("display-area").value+="=";
        document.getElementById("display-area").value += result;
    } catch (error) {
        console.error(error);
        document.getElementById("display-area").value +="=";
        document.getElementById("display-area").value += "Error";
    }
}



