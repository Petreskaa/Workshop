const dateInput = document.getElementById('date-input');

const calculateYears = (dateInput) => {
    const dateOfBirth = new Date(dateInput);
    const yearOfBirth = dateOfBirth.getFullYear();
    const monthOfBirth = dateOfBirth.getMonth();
    const dayOfBirth = dateOfBirth.getDate();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let years = currentYear - yearOfBirth;
    if (monthOfBirth > currentMonth) {
        years --;
    }
    else if (monthOfBirth === currentMonth) {
        if (dayOfBirth > currentDay) {
            years--
        }
    }

    return years;
} 

const onDateChangeHandler = (event) => {
    const yearsOld = calculateYears(event.target.value);
    document.getElementById("age").innerText = `You are ${yearsOld}`
}

dateInput.addEventListener("change", onDateChangeHandler)
