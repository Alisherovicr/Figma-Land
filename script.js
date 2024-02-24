// let email = document.querySelector(".email")

// let btn = document.querySelector(".first_button")

// btn.addEventListener("click" , clickMe)

// let emailReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

// function clickMe(event){

//     event.preventDefault();

//     validate(emailReg, email);
// }

// function validate(userReg, userValue) {
//     if (!userReg.test(userValue.value)) {
//         userValue.classList.add("error");
//         // alert("У вас ошибка. Пожалуйста, убедитесь в том, что:\n" +
//         // "1) В Имени только буквы,\n" +
//         // "2) В Фамилии только буквы,\n" +
//         // "3) Электронная почта написана правильно,\n" +
//         // "4) Пароль состоит только из цифр.");
//     } else {
//         userValue.classList.remove("error");
//     } 
// }

let emailInput = document.querySelector(".email");
let subscribeButton = document.querySelector(".first_button");

subscribeButton.addEventListener("click", function(event) {
    event.preventDefault(); // Отменяем стандартное действие кнопки
    
    // Проверяем введенный email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidEmail = emailRegex.test(emailInput.value);
    
    if (!isValidEmail) {
        emailInput.classList.add("error");
        if ('vibrate' in navigator) {
            navigator.vibrate(200); // Вибрировать в течение 200 миллисекунд (если поддерживается)
        }
        alert("Неправильно введен email!"); // Выводим алерт с сообщением об ошибке
    } else {
        emailInput.classList.remove("error");
    }
});


