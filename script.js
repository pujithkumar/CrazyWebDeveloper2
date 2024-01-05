let nameInputEl = document.getElementById("name");
let genderInputEl = document.getElementById("gender");
        let emailInputEl = document.getElementById("email");
        let mobileInputEl = document.getElementById("mobile");
        let nameEl = document.getElementById("dName");
        let genderEl = document.getElementById("dGender");
        let emailEl = document.getElementById("dEmail");
        let mobileEl = document.getElementById("dMobile");

        function showName() {
            let nameValue = nameInputEl.value;
            if (nameValue !== "") {
                nameEl.textContent = nameValue;
            } else {
                nameEl.textContent = "NAME";
            }
        }

        function showGender() {
            let genderValue = genderInputEl.value;
            if (genderValue !== "") {
                if (genderValue === "male") {
                    genderEl.textContent = "M";
                } else if (genderValue === "female") {
                    genderEl.textContent = "F";
                } else {
                    genderEl.textContent = "";
                }
            } else {
                genderEl.textContent = 'GENDER';
            }
        }

        function showEmail() {
            // Show the filled email inside h3
            let emailValue = emailInputEl.value;
            if (emailValue !== "") {
                emailEl.textContent = emailValue;
            } else {
                emailEl.textContent = "EMAIL";
            }
        }

        function showMobile() {
            let mobileValue = mobileInputEl.value;
            if (mobileValue !== "") {
                mobileEl.textContent = mobileValue;
            } else {
                mobileEl.textContent = "MOBILE";
            }
        }

        function resetForm() {
            nameInputEl.value = "";
            genderInputEl.value = "";
            emailInputEl.value = "";
            mobileInputEl.value = "";
        }

        function resetDisplay() {
            nameEl.textContent = "NAME";
            genderEl.textContent = "GENDER";
            emailEl.textContent = "EMAIL";
            mobileEl.textContent = "MOBILE";
        }