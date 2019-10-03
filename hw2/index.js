function ConvertCtoF(degreesCelsius) {
    var cTemp = degreesCelsius;
    var cTof = cTemp * (9/5) + 32;
    return cTof;
}

function ConvertFtoC(degreesFahrenheit) {
    var fTemp = degreesFahrenheit;
    var fToc = (fTemp - 32) * (5/9);
    return fToc;
}

function bodyLoaded() {
    document.getElementById("ConvertButton").addEventListener("click", function(){
        var checkC = parseFloat(document.getElementById("CInput").value); //stores user input using parseFloat (if leters then will be NaN)
        if(!isNaN(checkC)){                           //checks user input, user input can be 47 C and will only use 47
            var newF = ConvertCtoF(checkC);    //convert to F function
            document.getElementById("FInput").value = newF;   //display in F text box (id="FInput")
            document.getElementById("ErrDiv").textContent = "";
            if(newF <= 32){
                document.getElementById("WeatherImage").src = "cold.gif";
            }else if(newF <= 50){
                document.getElementById("WeatherImage").src = "cool.gif";   
            } else {
                document.getElementById("WeatherImage").src = "warm.gif";
            }
        } else {
            var checkF = parseFloat(document.getElementById("FInput").value);
            document.getElementById("ErrDiv").textContent = "";
            if(checkF <= 32){
                document.getElementById("WeatherImage").src = "cold.gif";
            }else if(checkF <= 50){
                document.getElementById("WeatherImage").src = "cool.gif";   
            } else {
                document.getElementById("WeatherImage").src = "warm.gif";
            }
            if(!isNaN(checkF)){
                var newC = ConvertFtoC(checkF);    //convert to C function
                document.getElementById("CInput").value = newC;   //display in C text box (id="CInput")
            } else {
                if(document.getElementById("CInput").value != ""){
                    document.getElementById("ErrDiv").textContent = document.getElementById("CInput").value + " is not a number";
                } else if(document.getElementById("FInput").value != ""){
                    document.getElementById("ErrDiv").textContent = document.getElementById("FInput").value + " is not a number";
                }
            }
        }
    });

    document.getElementById("CInput").addEventListener("input", function(){
        document.getElementById("FInput").value = "";
    });
    
    document.getElementById("FInput").addEventListener("input", function(){
        document.getElementById("CInput").value = "";
    });
}