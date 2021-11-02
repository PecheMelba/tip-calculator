let currentTipFilter = -1;

// number inputs
const billRef = document.getElementById("bill");
const customRef = document.getElementsByClassName("custom-tip")[0];
const nbPeopleRef = document.getElementById("nb-people");

billRef.addEventListener('change', calc);
nbPeopleRef.addEventListener('change',calc);

// custom tip filter
customRef.addEventListener('change',() =>
{
    for(let i in tipFilterArr)
    { 
        tipFilterArr[i].style.backgroundColor = "var(--dark-cyan)";
        tipFilterArr[i].style.color = "white";
    }
    calc();
});

// tip buttons
let tipFilterArr = [];
tipFilterArr.push(document.getElementById("p5"));
tipFilterArr.push(document.getElementById("p10"));
tipFilterArr.push(document.getElementById("p15"));
tipFilterArr.push(document.getElementById("p25"));
tipFilterArr.push(document.getElementById("p50"));

for(let i in tipFilterArr)
    tipFilterArr[i].addEventListener("click",()=> {btnTipClicked(tipFilterArr[i])});

// resest btn
document.getElementById("reset-btn").addEventListener("click",()=> 
{
    document.getElementById("tip-amount").textContent = "$0.00";
    document.getElementById("total-amount").textContent = "$0.00";
    
    customRef.value = customRef.defaultValue;
    currentTipFilter = -1;
    
    for(let i in tipFilterArr)
    { 
        tipFilterArr[i].style.backgroundColor = "var(--dark-cyan)";
        tipFilterArr[i].style.color = "white";
    }   
});


// functions   
function btnTipClicked(elem)
{
    for(let i in tipFilterArr)
        if(tipFilterArr[i] != elem)
        { 
            tipFilterArr[i].style.backgroundColor = "var(--dark-cyan)";
            tipFilterArr[i].style.color = "white";
        }

    elem.style.backgroundColor = "var(--strong-cyan)";
    elem.style.color = "var(--dark-cyan)";
    
    customRef.value = customRef.defaultValue;

    currentTipFilter = parseInt(elem.textContent.slice(0, -1));
    calc();
}

function calc()
{
    if(billRef.value > 0 && nbPeopleRef.value > 0)
    {
        
        let tempTip = 0;
        let tempTotal = 0;
        if(customRef.value > 0)
            tempTip = billRef.value * (customRef.value/100);
        else
            tempTip = billRef.value * (currentTipFilter/100);

        tempTotal = (parseInt(billRef.value) + tempTip) / nbPeopleRef.value;

        document.getElementById("tip-amount").textContent = "$" + tempTip / nbPeopleRef.value;
        document.getElementById("total-amount").textContent = "$" + tempTotal;
    }
}
