const birthDate = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");


calculateBtn.onclick = function() {

  const birth = new Date(birthDate.value);
  const today = new Date();

    if (birthDate.value === "") {
        result.textContent = "Please enter your birth date!";
    }

    else if (birth > today) {
        result.textContent = "Invalid birth date!";
    }

    else {
        let age = today.getFullYear() - birth.getFullYear();

        const monthDifference = today.getMonth() - birth.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }

        result.textContent = "You are " + age + " years old!";
    }

};