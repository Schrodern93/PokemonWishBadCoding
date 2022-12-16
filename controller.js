function calculatePrice(){
let sum = 0;
model.cardlist.forEach(element => {
    sum += element.LastpriceCheck;
});
return sum;
}

function changetoVview(){
    model.currentPage = "Vkort"
    viewSelector();
}

function changetoBildeview(){
    model.currentPage = "Bildekort"
    viewSelector();
}

function changetoAllview(){
    model.currentPage = "Wish"
    viewSelector();
}