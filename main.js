let password_box = document.querySelector(".password-box");
let length_rangeEl = document.getElementById("password-length");
let span = document.querySelector("span");
let generateButton = document.querySelector(".generate");
let numberCheckbox = document.getElementById("s-number");
let sChar = document.getElementById("s-char");
let length1 = 10;

let specialChar = ['!', '@', '#', '$', '%'];

length_rangeEl.addEventListener("input", (e) => {
    span.innerText = (e.target.value)
    length1 = e.target.value;
})

generateButton.addEventListener("click", () => {
    // console.log(length)
    let text = "";
    password_box.innerText = "";

    if (numberCheckbox.checked) {
        text = "";
        let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length1; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
    } else if (sChar.checked && !numberCheckbox.checked) {
        text = "";
        let charset = "@#!$%^&*abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < length1; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
    } else {
        text = "";
        let charset = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < length1; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    if (numberCheckbox.checked && sChar.checked) {
        text = "";
        let charset = "abcdefghijklmnopqrstuvwxyz0123456789@#!$%^&*";
        for (var i = 0; i < length1; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));


    }
    password_box.innerText = text;
})