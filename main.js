document.addEventListener('DOMContentLoaded', init);





function init(){

    function calculateAmount(){
        let bill = document.getElementById("billAmount").value;
        console.log(bill);
        let tip = document.getElementById("tipPercent").value;
        console.log(tip);
        let people = document.getElementById("people").value;
        console.log(people);

        if (bill === "" || tip === 0){
            alert("Please fill in bill amount or tip %");
        }else{
            console.log("values have been inputed");
        }

        if  (people === "" || people <=1 ){
            people = 1;
            console.log("1 person");
        }else{
            console.log("more than 1");
        }

        let tipAmount = (bill * tip) / people;
        document.getElementById("tip").textContent = tipAmount;
    }

    function getAmount(){
       console.log("This is the tip amount");
    }


    document.getElementById("tipAmount").addEventListener("click", getAmount);
    document.getElementById("tipAmount").addEventListener("click", calculateAmount);

}
