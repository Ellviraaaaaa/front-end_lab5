// Валідація форми
function validateForm() {
  let isValid = true;
  let output = "";

  // ПІБ
  const pib = document.getElementById("pib");
  const pibRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
  if (!pibRegex.test(pib.value)) {
    document.getElementById("pibError").innerText = "Невірний формат ПІБ";
    pib.style.borderColor = "red";
    isValid = false;
  } else {
    document.getElementById("pibError").innerText = "";
    pib.style.borderColor = "";
    output += `ПІБ: ${pib.value}\n`;
  }

  // Дата народження
  const dob = document.getElementById("dob");
  const dobRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!dobRegex.test(dob.value)) {
    document.getElementById("dobError").innerText = "Невірний формат дати";
    dob.style.borderColor = "red";
    isValid = false;
  } else {
    document.getElementById("dobError").innerText = "";
    dob.style.borderColor = "";
    output += `Дата народження: ${dob.value}\n`;
  }

  // Адреса
  const address = document.getElementById("address");
  const addressRegex = /^м\. [А-ЯІЇЄҐ][а-яіїєґ]+$/;
  if (!addressRegex.test(address.value)) {
    document.getElementById("addressError").innerText =
      "Невірний формат адреси";
    address.style.borderColor = "red";
    isValid = false;
  } else {
    document.getElementById("addressError").innerText = "";
    address.style.borderColor = "";
    output += `Адреса: ${address.value}\n`;
  }

  // e-mail
  const email = document.getElementById("email");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").innerText = "Невірний формат e-mail";
    email.style.borderColor = "red";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
    email.style.borderColor = "";
    output += `e-mail: ${email.value}\n`;
  }

  // Telegram
  const telegram = document.getElementById("telegram");
  const telegramRegex = /^@[A-Za-z0-9_]{5,}$/;
  if (!telegramRegex.test(telegram.value)) {
    document.getElementById("telegramError").innerText =
      "Невірний формат Telegram";
    telegram.style.borderColor = "red";
    isValid = false;
  } else {
    document.getElementById("telegramError").innerText = "";
    telegram.style.borderColor = "";
    output += `Telegram: ${telegram.value}\n`;
  }

  if (isValid) {
    alert("Введені дані:\n" + output);
  } else {
    alert("Будь ласка, перевірте введені дані.");
  }
}

// Створення таблиці 6x6
const table = document.getElementById("myTable");
let count = 1;
for (let i = 0; i < 6; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.innerText = count++;
    cell.addEventListener("mouseover", handleHover);
    cell.addEventListener("click", handleClick);
    cell.addEventListener("dblclick", handleDoubleClick);
  }
}

// Випадковий колір
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function handleHover(event) {
  if (event.target.innerText == "6") {
    event.target.style.backgroundColor = getRandomColor();
  }
}

function handleClick(event) {
  if (event.target.innerText == "6") {
    const color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
  }
}

function handleDoubleClick(event) {
  if (event.target.innerText == "6") {
    const startRow = event.target.parentNode.rowIndex;
    const startCol = event.target.cellIndex;
    for (let i = startRow; i < 6; i++) {
      for (let j = startCol; j < 6; j++) {
        table.rows[i].cells[j].style.backgroundColor = getRandomColor();
      }
    }
  }
}
