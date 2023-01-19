btnElement = document.querySelector(".btn");
inputSurname = document.querySelector('[name="surname"]');
inputName = document.querySelector('[name="name"]');
resultElement = document.querySelector(".result");

menuElements = document.querySelectorAll(".menu__element");

btnElement.addEventListener("click", function(){
    alert (`Заказчик: ${inputSurname.value} ${inputName.value}\n Итого: ${totalSum(menuElements)} руб.`);
});

menuElements.forEach(element => {
    element.addEventListener("change", function(){
        let checkboxElement = element.querySelector('input[type="checkbox"]');
        let amountElement = element.querySelector('input[type="number"]');
        if (checkboxElement.checked){
            if (amountElement.value == 0){
                amountElement.value = 1;
            }
        }
        else {
            amountElement.value = 0;
        }
        resultElement.textContent = `${totalSum(menuElements)} р.`;
    });
});

function totalSum(menuElements){
    let sum = 0;
    for (menuElement of menuElements){
        let checkboxElement = menuElement.querySelector('input[type="checkbox"]');
        let amountElement = menuElement.querySelector('input[type="number"]');
        if (checkboxElement.checked){
            sum += (parseInt(checkboxElement.value) * amountElement.value);
        }
    }
    return sum;
}