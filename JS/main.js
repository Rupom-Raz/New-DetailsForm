let Form1 = document.getElementById("form1");
let Form2 = document.getElementById("form2");
let Form3 = document.getElementById("form3");
let Form4 = document.getElementById("form4");

let Next1 = document.getElementById("next1");
let Next2 = document.getElementById("next2");
let Next3 = document.getElementById("next3");
let Back1 = document.getElementById("back1");
let Back2 = document.getElementById("back2");
let Back3 = document.getElementById("back3");
let progress = document.getElementById("progress");

let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");

//Name validation
let getFromStorage =
    JSON.parse(localStorage.getItem("personalInfo")) !== null
        ? JSON.parse(localStorage.getItem("personalInfo"))
        : {};
let nameErrorMsg = document.getElementById("nameError");
let nameField = document.getElementById("name");
let nameRegex = /^[a-z ,.'-]+$/i;

nameField.value =
    getFromStorage.name === "" || getFromStorage.name == undefined
        ? "Enter Full Name"
        : getFromStorage.name;

function nameOnChange(name) {
    if (!nameRegex.test(name)) {
        nameErrorMsg.innerHTML = "Name is Not Valid";
    } else {
        getFromStorage.Name = name;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        nameErrorMsg.innerHTML = "";
    }
}

//Get Program Value form LocalStorage

let programType = document.getElementById("programType");

programType.innerHTML =
    getFromStorage.Program === "" || getFromStorage.Program == undefined
        ? "Select Program"
        : getFromStorage.Program;

//Program Validation
let programError = document.getElementById("programError");
function programOnChange(program) {
    if (program === "" || program == null) {
        programError.innerHTML = "Filed is Required!";
    } else {
        getFromStorage.Program = program;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        programError.innerHTML = "";
    }
}

//Get Gender value from LocalStorage
let genderValType = document.getElementById("genderValType");

genderValType.innerHTML =
    getFromStorage.Gender === "" || getFromStorage.Gender == undefined
        ? "Select Gender"
        : getFromStorage.Gender;

//Gender Validation
let genderError = document.getElementById("genderError");
function genderOnChange(gender) {
    if (gender === "" || gender == null) {
        genderError.innerHTML = "Filed is Required!";
    } else {
        getFromStorage.Gender = gender;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        genderError.innerHTML = "";
    }
}
// Get Religion value from LocalStorage
let religionValType = document.getElementById("religionValType");

religionValType.innerHTML =
    getFromStorage.Religion === "" || getFromStorage.Religion == undefined
        ? "Select Religion"
        : getFromStorage.Religion;

//Religion Validation
let religionError = document.getElementById("religionError");
function religionOnChange(religion) {
    if (religion === "" || religion == "") {
        religionError.innerHTML = "Filed is Required!";
    } else {
        getFromStorage.Religion = religion;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        religionError.innerHTML = "";
    }
}

// Get Nationality value from localstorage
let nationalityValType = document.getElementById("nationalityValType");

nationalityValType.innerHTML =
    getFromStorage.Nationality === "" || getFromStorage.Nationality == undefined
        ? "Select Nationality"
        : getFromStorage.Nationality;

//Nationality Validation
let nationError = document.getElementById("nationError");
function nationalityOnChange(nationality) {
    if (nationality === "" || nationality == null) {
        nationError.innerHTML = "Filed is Required!";
    } else {
        getFromStorage.Nationality = nationality;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        nationError.innerHTML = "";
    }
}

//Get DOB Value From Localstorage
let DOB = document.getElementById("dob");
DOB.value =
    getFromStorage.DOB === "" || getFromStorage.DOB == undefined
        ? ""
        : getFromStorage.DOB;

//DOB Validation
let dobError = document.getElementById("dobError");
function dateOnChange(date) {
    if (date === "" || date == null) {
        dobError.innerHTML = "Filed is Required!";
    } else {
        getFromStorage.DOB = date;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        dobError.innerHTML = "";
    }
}

//Get BirthCertificate NO form Localstorage
let birth_certificate = document.getElementById("birth_certificate");
birth_certificate.value =
    getFromStorage.BirthCertificateNO === "" ||
    getFromStorage.BirthCertificateNO == undefined
        ? ""
        : getFromStorage.BirthCertificateNO;
function birthCertOnchange(NO) {
    getFromStorage.BirthCertificateNO = NO;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}

//Get National ID from LocalStorage
let nation_ID = document.getElementById("nation_ID");
nation_ID.value =
    getFromStorage.NationalID === "" || getFromStorage.NationalID == undefined
        ? ""
        : getFromStorage.NationalID;
function nationIDOnchange(ID) {
    getFromStorage.NationalID = ID;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}

//Get Passport NO From LocalStorage
let passport_NO = document.getElementById("passport_NO");
passport_NO.value =
    getFromStorage.PassportNO === "" || getFromStorage.PassportNO == undefined
        ? ""
        : getFromStorage.PassportNO;

function passPortNOonchange(NO) {
    getFromStorage.PassportNO = NO;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}

//Get Blood Group from Localstorage
let bloodGrpType = document.getElementById("bloodGrpType");

bloodGrpType.innerHTML =
    getFromStorage.BloodGroup === "" || getFromStorage.BloodGroup == undefined
        ? ""
        : getFromStorage.BloodGroup;

function bloodGroupOnchange(group) {
    console.log(group);

    getFromStorage.BloodGroup = group;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}

//Get Tribal value form localStorage
let tribalValType = document.getElementById("tribalValType");
tribalValType.innerHTML =
    getFromStorage.Tribal === "" || getFromStorage.Tribal == undefined
        ? "Select Tribal"
        : getFromStorage.Tribal;

function tribalOnchange(tribal) {
    getFromStorage.Tribal = tribal;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}

// Get tranport Value from localStorage
let transportValType = document.getElementById("transportValType");
transportValType.innerHTML =
    getFromStorage.TransportRoute === "" ||
    getFromStorage.TransportRoute == undefined
        ? "Select Route"
        : getFromStorage.TransportRoute;
function transportOnchange(route) {
    getFromStorage.TransportRoute = route;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}
//Get Passport Expire Date from localStorage
let passExipireDate = document.getElementById("passExipireDate");

passExipireDate.value =
    getFromStorage.PassExpireDate === "" ||
    getFromStorage.PassExpireDate == undefined
        ? ""
        : getFromStorage.PassExpireDate;

function passPortExpireDate(date) {
    getFromStorage.PassExpireDate = date;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}

// Get Inter BloodGroup value from localstorage
let interBloodGrp = document.getElementById("interBloodGrp");
interBloodGrp.innerHTML =
    getFromStorage.InterNationalStuBloodGrp === "" ||
    getFromStorage.InterNationalStuBloodGrp == undefined
        ? "Select Blood Group"
        : getFromStorage.InterNationalStuBloodGrp;
function interBloodGroup(bloodGroup) {
    getFromStorage.InterNationalStuBloodGrp = bloodGroup;
    localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
}
//Form1 Validation Check
Form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let typeErrorMsg = document.getElementById("typeError");
    let programError = document.getElementById("programError");
    let genderError = document.getElementById("genderError");
    let religionError = document.getElementById("religionError");
    let nationError = document.getElementById("nationError");
    let dobError = document.getElementById("dobError");
    let photoError = document.getElementById("photoError");
    let passNoError = document.getElementById("passNoError");
    let passPhotoError = document.getElementById("passPhotoError");
    let hidePhotoError = document.getElementById("hidePhotoError");
    let mediCertError = document.getElementById("mediCertError");
    let policeClearError = document.getElementById("policeClearError");
    let applicationType = document.getElementById("selectField").value;

    let names = document.getElementById("name").value;
    let program = document.getElementById("program").value;
    let Gender = document.getElementById("gender").value;
    let religion = document.getElementById("religion").value;
    let nationality = document.getElementById("nationality").value;
    let dob = document.getElementById("dob").value;

    let medicalCertificate =
        document.getElementById("medicalCertificate").value;
    let bloodGroup = document.getElementById("bloodGroup").value;
    let birth_cert = document.getElementById("birth_certificate").value;
    let tribalValue = document.getElementById("tribalValue").value;
    let photo = document.getElementById("photoID").value;
    let hidePhoto = document.getElementById("hidePhotoID").value;
    let nation_ID = document.getElementById("nation_ID").value;
    let passport_NO = document.getElementById("passport_NO").value;
    let blood_Group = document.getElementById("blood_Group").value;
    let passExipireDate = document.getElementById("passExipireDate").value;
    let passportPhoto = document.getElementById("passportPhoto").value;
    let tribal = document.getElementById("tribal").value;
    let police_clearence = document.getElementById("police_clearence").value;

    //Form1 regex

    if (applicationType === "" || applicationType == null) {
        typeErrorMsg.innerHTML = "Please Select Type";
    } else {
        typeErrorMsg.innerHTML = "";
    }

    if (names === "" || names == null) {
        nameErrorMsg.innerHTML = "Field is Required!";
    } else {
        nameErrorMsg.innerHTML = "";
    }
    if (program === "" || program == null) {
        programError.innerHTML = "Field is Required!";
    } else {
        programError.innerHTML = "";
    }
    if (Gender === "" || Gender == null) {
        genderError.innerHTML = "Field is Required!";
    } else {
        genderError.innerHTML = "";
    }
    if (religion === "" || religion == null) {
        religionError.innerHTML = "Field is Required!";
    } else {
        religionError.innerHTML = "";
    }
    if (nationality === "" || nationality == null) {
        nationError.innerHTML = "Field is Required!";
    } else {
        nationError.innerHTML = "";
    }
    if (dob === "" || dob == null) {
        dobError.innerHTML = "Filed is Required!";
    } else {
        dobError.innerHTML = "";
    }
    if (photo === "" || photo == null) {
        photoError.innerHTML = "Photo is Required!";
    } else {
        photoError.innerHTML = "";
    }
    if (hidePhoto === "" || hidePhoto == null) {
        hidePhotoError.innerHTML = "Photo is Required!";
    } else {
        hidePhotoError.innerHTML = "";
    }
    if (passport_NO === "" || passport_NO == null) {
        passNoError.innerHTML = "Passport NO is Required!";
    } else {
        passNoError.innerHTML = "";
    }
    if (passExipireDate === "" || passExipireDate == null) {
        passExpireError.innerHTML = "Expire Date is Required!";
    } else {
        passExpireError.innerHTML = "";
    }
    if (passportPhoto === "" || passportPhoto == null) {
        passPhotoError.innerHTML = "Passport Photo is Required!";
    } else {
        passPhotoError.innerHTML = "";
    }
    if (police_clearence === "" || police_clearence == null) {
        policeClearError.innerHTML = "Clearance is Required!";
    } else {
        policeClearError.innerHTML = "";
    }
    if (medicalCertificate === "" || medicalCertificate == null) {
        mediCertError.innerHTML = "Certificate is Required!";
    } else {
        mediCertError.innerHTML = "";
    }

    if (dob === "" || dob == null) {
        Next1.onclick = function () {
            Form1.style.left = "";
            Form2.style.left = "";
            progress.style.width = "";
        };
    } else {
        Next1.onclick = function () {
            Form1.style.left = "-4000px";
            Form2.style.left = "0px";
            progress.style.width = "50%";
        };
    }
});
//Form 2 Validation
//Father Name Validation
function fatherNameOnchange(fatherName) {
    let fatherNameError = document.getElementById("fatherNameError");
    let nameRegex = /^[a-z ,.'-]+$/i;
    if (!nameRegex.test(fatherName)) {
        fatherNameError.innerHTML = "Name is Not Valid";
    } else {
        fatherNameError.innerHTML = "";
    }
}

//Father Occupation
function fatherOccupationOnChange(fatherOccupation) {
    console.log(fatherOccupation);

    let fatherOccupationError = document.getElementById(
        "fatherOccupationError"
    );
    if (fatherOccupation === "" || fatherOccupation == null) {
        fatherOccupationError.innerHTML = "Filed is Required!";
    } else {
        fatherOccupationError.innerHTML = "";
    }
}

//Mother Name Validation

function motherNameOnchange(motherName) {
    let nameRegex = /^[a-z ,.'-]+$/i;
    let motherNameError = document.getElementById("motherNameError");
    if (!nameRegex.test(motherName)) {
        motherNameError.innerHTML = "Name is Not Valid";
    } else {
        motherNameError.innerHTML = "";
    }
}

//Mother Occupation Validation
function motherOccupationOnchange(motherOccupation) {
    let motherOccupationError = document.getElementById(
        "motherOccupationError"
    );
    if (motherOccupation === "" || motherOccupation == null) {
        motherOccupationError.innerHTML = "Field is Required!";
    } else {
        motherOccupationError.innerHTML = "";
    }
}

//Local guardian Name
function localGuardianNameOnchange(localGuardianName) {
    let nameRegex = /^[a-z ,.'-]+$/i;
    let localGuardianNameError = document.getElementById(
        "localGuardianNameError"
    );
    if (!nameRegex.test(localGuardianName)) {
        localGuardianNameError.innerHTML = "Name is Not Valid";
    } else {
        localGuardianNameError.innerHTML = "";
    }
}

//LocalGuardian Address Validation
function localGuardianAddressOnchange(localGuardianAddress) {
    let localGuardianAddressError = document.getElementById(
        "localGuardianAddressError"
    );

    if (localGuardianAddress === "" || localGuardianAddress == null) {
        localGuardianAddressError.innerHTML = "Filed is Required!";
    } else {
        localGuardianAddressError.innerHTML = "";
    }
}

Form2.addEventListener("submit", (e) => {
    e.preventDefault();
    //Ragex

    let fatherName = document.getElementById("fatherName").value;
    let fatherOccupation = document.getElementById("fatherOccupation").value;
    let fatherNameError = document.getElementById("fatherNameError");
    let fatherOccupationError = document.getElementById(
        "fatherOccupationError"
    );
    let motherName = document.getElementById("motherName").value;
    let motherNameError = document.getElementById("motherNameError");
    let motherOccupation = document.getElementById("motherOccupation").value;
    let motherOccupationError = document.getElementById(
        "motherOccupationError"
    );

    let guardianPhoto = document.getElementById("guardianPhoto").value;
    let guardianPhotoError = document.getElementById("guardianPhotoError");
    let localGuardianName = document.getElementById("localGuardianName").value;
    let localGuardianAddress = document.getElementById(
        "localGuardianAddress"
    ).value;
    let localGuardianNameError = document.getElementById(
        "localGuardianNameError"
    );
    let localGuardianAddressError = document.getElementById(
        "localGuardianAddressError"
    );

    if (fatherName === "" || fatherName == null) {
        fatherNameError.innerHTML = "Field is Required!";
    } else if (!nameRegex.test(fatherName)) {
        fatherNameError.innerHTML = "Name is Not Valid!";
    } else {
        fatherNameError.innerHTML = "";
    }
    if (fatherOccupation === "" || fatherOccupation == null) {
        fatherOccupationError.innerHTML = "Field is Required!";
    } else {
        fatherNameError.innerHTML = "";
    }
    if (motherName === "" || motherName == null) {
        motherNameError.innerHTML = "Field is Required!";
    } else if (!nameRegex.test(motherName)) {
        motherNameError.innerHTML = "Name is Not Valid!";
    } else {
        motherNameError.innerHTML = "";
    }

    if (motherOccupation === "" || motherOccupation == null) {
        motherOccupationError.innerHTML = "Field is Required!";
    } else {
        motherOccupationError.innerHTML = "";
    }

    if (guardianPhoto === "" || guardianPhoto == null) {
        guardianPhotoError.innerHTML = "Photo is Required!";
    } else {
        guardianPhotoError.innerHTML = "";
    }

    if (localGuardianName === "" || localGuardianName == null) {
        localGuardianNameError.innerHTML = "Field is Required!";
    } else if (!nameRegex.test(localGuardianName)) {
        localGuardianNameError.innerHTML = "Name is Not Valid!";
    } else {
        localGuardianNameError.innerHTML = "";
    }
    if (localGuardianAddress === "" || localGuardianAddress == null) {
        localGuardianAddressError.innerHTML = "Field is Required!";
    } else {
        localGuardianAddressError.innerHTML = "";
    }

    if (localGuardianAddress === "" || localGuardianAddress == null) {
        Next2.onclick = function () {
            Form2.style.left = "0px";
            Form3.style.left = "";
            progress.style.width = "50%";
        };
    } else {
        Next2.onclick = function () {
            Form2.style.left = "-4000px";
            Form3.style.left = "0px";
            progress.style.width = "75%";
        };
    }
});

//Email Validation
function emailOnchange(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailError = document.getElementById("emailError");
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Email is Not Valid";
    } else {
        emailError.innerHTML = "";
    }
}

//Mobile NO Validation
function mobileNOOnchange(mobileNO) {
    let mobileNORegex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let mobileNOError = document.getElementById("mobileNOError");
    if (!mobileNORegex.test(mobileNO)) {
        mobileNOError.innerHTML = "Number is Not Valid";
    } else {
        mobileNOError.innerHTML = "";
    }
}

//Guardian NO
function guardianNOOnchange(guardianNO) {
    let mobileNORegex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let guardianNOError = document.getElementById("guardianNOError");

    if (!mobileNORegex.test(guardianNO)) {
        guardianNOError.innerHTML = "Number is Not Valid";
    } else {
        guardianNOError.innerHTML = "";
    }
}

//LocalGuardian NO Validation

function localGuardianNoOnchange(localGuardianNO) {
    let localGuardianNOError = document.getElementById("localGuardianNOError");
    let mobileNORegex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

    if (!mobileNORegex.test(localGuardianNO)) {
        localGuardianNOError.innerHTML = "Number is Not Valid ";
    } else {
        localGuardianNOError.innerHTML = "";
    }
}
//Division filed Validation
function divisionOnchange(division) {
    let pre_DivisionError = document.getElementById("pre_DivisionError");
    if (division === "" || division == null) {
        pre_DivisionError.innerHTML = "Field is Required!";
    } else {
        pre_DivisionError.innerHTML = "";
    }
}
//Par Division filed Validation
function parDivisionOnchange(division) {
    console.log(division);

    let par_DivisionError = document.getElementById("par_DivisionError");
    if (division === "" || division == null) {
        par_DivisionError.innerHTML = "Field is Required!";
    } else {
        par_DivisionError.innerHTML = "";
    }
}

//Country filed validation
function districtOnchange(district) {
    let pre_DistrictError = document.getElementById("pre_DistrictError");
    if (district === "" || district == null) {
        pre_DistrictError.innerHTML = "Flied is Required!";
    } else {
        pre_DistrictError.innerHTML = "";
    }
}

//City filed Validation

function cityOnchange(city) {
    let pre_CityError = document.getElementById("pre_CityError");
    if (city === "" || city == null) {
        pre_CityError.innerHTML = "Field is Required!";
    } else {
        pre_CityError.innerHTML = "";
    }
}

//Postal filed validatin

function postalOnchange(postalCode) {
    let pre_PostalError = document.getElementById("pre_PostalError");
    if (postalCode === "" || postalCode == null) {
        pre_PostalError.innerHTML = "Field is Required!";
    } else {
        pre_PostalError.innerHTML = "";
    }
}

Form3.addEventListener("submit", (e) => {
    e.preventDefault();
    let postalRegex = /^[0-9]{4}$/;
    let email = document.getElementById("email").value;
    let mobileNO = document.getElementById("mobileNO").value;
    let guardianNO = document.getElementById("guardianNO").value;
    let localGuardianNO = document.getElementById("localGuardianNO").value;
    let pre_Division = document.getElementById("pre_Division").value;
    let pre_District = document.getElementById("pre_District").value;
    let pre_City = document.getElementById("pre_City").value;
    let pre_Postal = document.getElementById("pre_Postal").value;
    let par_Division = document.getElementById("par_Division").value;
    let par_District = document.getElementById("par_District").value;
    let par_City = document.getElementById("par_City").value;
    let par_Postal = document.getElementById("par_Postal").value;
    let pre_Country = document.getElementById("pre_Country").value;
    let pre_CountryError = document.getElementById("pre_CountryError");
    let pre_State = document.getElementById("pre_State").value;
    let pre_StateError = document.getElementById("pre_StateError");
    let pre_InterCity = document.getElementById("pre_InterCity").value;
    let pre_InterCityError = document.getElementById("pre_InterCityError");
    let pre_Village = document.getElementById("pre_Village").value;
    let pre_VillageError = document.getElementById("pre_VillageError");
    let emailError = document.getElementById("emailError");
    let mobileNOError = document.getElementById("mobileNOError");
    let guardianNOError = document.getElementById("guardianNOError");
    let localGuardianNOError = document.getElementById("localGuardianNOError");
    let pre_DivisionError = document.getElementById("pre_DivisionError");
    let pre_DistrictError = document.getElementById("pre_DistrictError");
    let pre_CityError = document.getElementById("pre_CityError");
    let pre_PostalError = document.getElementById("pre_PostalError");
    let par_DivisionError = document.getElementById("par_DivisionError");
    let par_DistrictError = document.getElementById("par_DistrictError");
    let par_CityError = document.getElementById("par_CityError");
    let par_PostalError = document.getElementById("par_PostalError");
    let par_Country = document.getElementById("par_Country").value;
    let par_CountryError = document.getElementById("par_CountryError");
    let par_State = document.getElementById("par_State").value;
    let par_StateError = document.getElementById("par_StateError");
    let par_InterCity = document.getElementById("par_InterCity").value;
    let par_InterCityError = document.getElementById("par_InterCityError");
    let par_Village = document.getElementById("par_Village").value;
    let par_VillageError = document.getElementById("par_VillageError");
    if (email === "" || email == null) {
        emailError.innerHTML = "Email is Required!";
    } else {
        emailError.innerHTML = "";
    }

    if (mobileNO === "" || mobileNO == null) {
        mobileNOError.innerHTML = "Mobile NO is Required!";
    } else {
        mobileNOError.innerHTML = "";
    }

    if (guardianNO === "" || guardianNO == null) {
        guardianNOError.innerHTML = "Mobile NO is Required!";
    } else {
        guardianNOError.innerHTML = "";
    }
    if (localGuardianNO === "" || localGuardianNO == null) {
        localGuardianNOError.innerHTML = "Mobile NO is Required!";
    } else {
        localGuardianNOError.innerHTML = "";
    }

    if (pre_Division === "" || pre_Division == null) {
        pre_DivisionError.innerHTML = "Filed is Required!";
    } else {
        pre_DivisionError.innerHTML = "";
    }
    if (pre_Country === "" || pre_Country == null) {
        pre_CountryError.innerHTML = "Filed is Required!";
    } else {
        pre_CountryError.innerHTML = "";
    }
    if (par_Country === "" || par_Country == null) {
        par_CountryError.innerHTML = "Filed is Required!";
    } else {
        par_CountryError.innerHTML = "";
    }
    if (pre_State === "" || pre_State == null) {
        pre_StateError.innerHTML = "Filed is Required!";
    } else {
        pre_StateError.innerHTML = "";
    }
    if (par_State === "" || par_State == null) {
        par_StateError.innerHTML = "Filed is Required!";
    } else {
        par_StateError.innerHTML = "";
    }
    if (pre_InterCity === "" || pre_InterCity == null) {
        pre_InterCityError.innerHTML = "Filed is Required!";
    } else {
        pre_InterCityError.innerHTML = "";
    }
    if (par_InterCity === "" || par_InterCity == null) {
        par_InterCityError.innerHTML = "Filed is Required!";
    } else {
        par_InterCityError.innerHTML = "";
    }
    if (pre_Village === "" || pre_Village == null) {
        pre_VillageError.innerHTML = "Filed is Required!";
    } else {
        pre_VillageError.innerHTML = "";
    }
    if (par_Village === "" || par_Village == null) {
        par_VillageError.innerHTML = "Filed is Required!";
    } else {
        par_VillageError.innerHTML = "";
    }
    if (pre_District === "" || pre_District == null) {
        pre_DistrictError.innerHTML = "Filed is Required!";
    } else {
        pre_DistrictError.innerHTML = "";
    }
    if (pre_District === "" || pre_District == null) {
        pre_DistrictError.innerHTML = "Filed is Required!";
    } else {
        pre_DistrictError.innerHTML = "";
    }
    if (pre_City === "" || pre_City == null) {
        pre_CityError.innerHTML = "Filed is Required!";
    } else {
        pre_CityError.innerHTML = "";
    }
    if (pre_Postal === "" || pre_Postal == null) {
        pre_PostalError.innerHTML = "Filed is Required!";
    } else if (!postalRegex.test(pre_Postal)) {
        pre_PostalError.innerHTML = "Postal Code is Not Valid";
    } else {
        pre_PostalError.innerHTML = "";
    }
    if (par_Division === "" || par_Division == null) {
        par_DivisionError.innerHTML = "Filed is Required!";
    } else {
        par_DivisionError.innerHTML = "";
    }
    if (par_District === "" || par_District == null) {
        par_DistrictError.innerHTML = "Filed is Required!";
    } else {
        par_DistrictError.innerHTML = "";
    }
    if (par_City === "" || par_City == null) {
        par_CityError.innerHTML = "Filed is Required!";
    } else {
        par_CityError.innerHTML = "";
    }
    if (par_Postal === "" || par_Postal == null) {
        par_PostalError.innerHTML = "Filed is Required!";
    } else if (!postalRegex.test(par_Postal)) {
        par_PostalError.innerHTML = "Postal Code is Not Valid";
    } else {
        par_PostalError.innerHTML = "";
    }

    if (localGuardianNO === "" || localGuardianNO == null) {
        Next3.onclick = function () {
            Form3.style.left = "0px";
            Form4.style.left = "";
            progress.style.width = "75%";
        };
    } else {
        Next3.onclick = function () {
            Form3.style.left = "-4000px";
            Form4.style.left = "0px";
            progress.style.width = "100%";
        };
    }
});

//Exam field Validation
function examOnChange(exam) {
    let examError = document.getElementById("examError");
    if (exam === "" || exam == null) {
        examError.innerHTML = "Field is Required!";
    } else {
        examError.innerHTML = "";
    }
}

//Year filed Validation
function yearOnChange(year) {
    let yearError = document.getElementById("yearError");
    if (year === "" || year == null) {
        yearError.innerHTML = "Field is Required!";
    } else {
        yearError.innerHTML = "";
    }
}

//Board Feild Validation
function onBoardChange(board) {
    let boardError = document.getElementById("boardError");
    if (board === "" || board == null) {
        boardError.innerHTML = "Filed is Required!";
    } else {
        boardError.innerHTML = "";
    }
}

//Institute Name filed validation
function instituteNameOnchange(instituateName) {
    let instituateNameError = document.getElementById("instituateNameError");
    if (instituateName === "" || instituateName == null) {
        instituateNameError.innerHTML = "Field is Required!";
    } else {
        instituateNameError.innerHTML = "";
    }
}

//Group Name filed Validation
function groupOnchange(groupName) {
    let groupError = document.getElementById("groupError");
    if (groupName === "" || groupName == null) {
        groupError.innerHTML = "Filed is Required!";
    } else {
        groupError.innerHTML = "";
    }
}

//SSC roll Validation
function rollNoOnchange(roll) {
    let rollError = document.getElementById("rollError");
    let rollRegex = /^[0-9]{6}$/;
    if (!rollRegex.test(roll)) {
        rollError.innerHTML = "Roll is Not Valid";
    } else {
        rollError.innerHTML = "";
    }
}

//SSC Registration filed

function registrationOnchange(registrationNo) {
    let registrationRegex = /^[0-9]{10}$/;
    let regNOError = document.getElementById("regNOError");
    if (!registrationRegex.test(registrationNo)) {
        regNOError.innerHTML = "Registration NO is Not Valid ";
    } else {
        regNOError.innerHTML = "";
    }
}

//Gpa filed Validation
function GpaOnchange(gpa) {
    let GpaRegex = /^[2-5][.][0-9][0-9]$/;
    let gpaError = document.getElementById("gpaError");

    if (!GpaRegex.test(gpa)) {
        gpaError.innerHTML = "GPA Should be between 2.00 to 5.00";
    } else {
        gpaError.innerHTML = "";
    }
}

//HSC Exam Field Validation
function hscExamOnchange(hsc) {
    let hscExamError = document.getElementById("hscExamError");
    if (hsc === "" || hsc == null) {
        hscExamError.innerHTML = "Field is Required!";
    } else {
        hscExamError.innerHTML = "";
    }
}

//HSC year filed Validation
function hscYearOnchange(hscYear) {
    let hscYearError = document.getElementById("hscYearError");
    if (hscYear === "" || hscYear == null) {
        hscYearError.innerHTML = "Field is Required!";
    } else {
        hscYearError.innerHTML = "";
    }
}

//HSC Board validation
function hscBoardOnchange(hscBoard) {
    let hscBoardError = document.getElementById("hscBoardError");
    if (hscBoard === "" || hscBoard == null) {
        hscBoardError.innerHTML = "Field is Required!";
    } else {
        hscBoardError.innerHTML = "";
    }
}
//HSC hscInstituteName filed Validation

function hscInstituteNameOnchange(instituateName) {
    let hscInstituteNameError = document.getElementById(
        "hscInstituteNameError"
    );
    if (instituateName === "" || instituateName == null) {
        hscInstituteNameError.innerHTML = "Field is Required!";
    } else {
        hscInstituteNameError.innerHTML = "";
    }
}

//HSC Board filed validation
function hscGroupOnchange(hscGroup) {
    let hscGroupError = document.getElementById("hscGroupError");
    if (hscGroup === "" || hscGroup == null) {
        hscGroupError.innerHTML = "Field is Required!";
    } else {
        hscGroupError.innerHTML = "";
    }
}

//HSC Roll filed Validation

function hscRollOnchange(hscRoll) {
    let hscRollError = document.getElementById("hscRollError");
    let rollRegex = /^[0-9]{6}$/;
    if (!rollRegex.test(hscRoll)) {
        hscRollError.innerHTML = "Roll is Not Valid";
    } else {
        hscRollError.innerHTML = "";
    }
}

// HSC Registration No Filed valid
function hscRegistrationNoOnchange(hscRegistrationNo) {
    let hscRegNOError = document.getElementById("hscRegNOError");
    let registrationRegex = /^[0-9]{10}$/;
    if (!registrationRegex.test(hscRegistrationNo)) {
        hscRegNOError.innerHTML = "Registration NO is Not Valid";
    } else {
        hscRegNOError.innerHTML = "";
    }
}

function hscGpaOnchange(hscGpa) {
    let hscGpaError = document.getElementById("hscGpaError");
    let GpaRegex = /^[2-5][.][0-9][0-9]$/;
    if (!GpaRegex.test(hscGpa)) {
        hscGpaError.innerHTML = "GPA Should be between 2.00 to 5.00";
    } else {
        hscGpaError.innerHTML = "";
    }
}

Form4.addEventListener("submit", (e) => {
    e.preventDefault();
    let exam = document.getElementById("exam").value;
    let year = document.getElementById("year").value;
    let board = document.getElementById("board").value;
    let instituateName = document.getElementById("instituateName").value;
    let group = document.getElementById("group").value;
    let roll = document.getElementById("roll").value;
    let regNO = document.getElementById("regNO").value;
    let gpa = document.getElementById("gpa").value;
    let hscExam = document.getElementById("hscExam").value;
    let hscYear = document.getElementById("hscYear").value;
    let hscBoard = document.getElementById("hscBoard").value;
    let hscInstituteName = document.getElementById("hscInstituteName").value;
    let hscGroup = document.getElementById("hscGroup").value;
    let hscRoll = document.getElementById("hscRoll").value;
    let hscRegNO = document.getElementById("hscRegNO").value;
    let hscGpa = document.getElementById("hscGpa").value;
    let examError = document.getElementById("examError");
    let yearError = document.getElementById("yearError");
    let boardError = document.getElementById("boardError");
    let instituateNameError = document.getElementById("instituateNameError");
    let groupError = document.getElementById("groupError");
    let rollError = document.getElementById("rollError");
    let regNOError = document.getElementById("regNOError");
    let gpaError = document.getElementById("gpaError");
    let hscExamError = document.getElementById("hscExamError");
    let hscYearError = document.getElementById("hscYearError");
    let hscBoardError = document.getElementById("hscBoardError");
    let hscInstituteNameError = document.getElementById(
        "hscInstituteNameError"
    );
    let hscGroupError = document.getElementById("hscGroupError");
    let hscRollError = document.getElementById("hscRollError");
    let hscRegNOError = document.getElementById("hscRegNOError");
    let hscGpaError = document.getElementById("hscGpaError");

    if (exam === "" || exam == null) {
        examError.innerHTML = "Field is Required!";
    } else {
        examError.innerHTML = "";
    }
    if (year === "" || year == null) {
        yearError.innerHTML = "Field is Required!";
    } else {
        yearError.innerHTML = "";
    }
    if (board === "" || board == null) {
        boardError.innerHTML = "Field is Required!";
    } else {
        boardError.innerHTML = "";
    }
    if (instituateName === "" || instituateName == null) {
        instituateNameError.innerHTML = "Field is Required!";
    } else {
        instituateNameError.innerHTML = "";
    }
    if (instituateName === "" || instituateName == null) {
        instituateNameError.innerHTML = "Field is Required!";
    } else {
        instituateNameError.innerHTML = "";
    }
    if (group === "" || group == null) {
        groupError.innerHTML = "Field is Required!";
    } else {
        groupError.innerHTML = "";
    }
    if (roll === "" || roll == null) {
        rollError.innerHTML = "Field is Required!";
    } else {
        rollError.innerHTML = "";
    }

    if (regNO === "" || regNO == null) {
        regNOError.innerHTML = "Field is Required!";
    } else {
        regNOError.innerHTML = "";
    }
    if (gpa === "" || gpa == null) {
        gpaError.innerHTML = "Field is Required!";
    } else {
        gpaError.innerHTML = "";
    }
    if (hscExam === "" || hscExam == null) {
        hscExamError.innerHTML = "Field is Required!";
    } else {
        hscExamError.innerHTML = "";
    }
    if (hscYear === "" || hscYear == null) {
        hscYearError.innerHTML = "Field is Required!";
    } else {
        hscYearError.innerHTML = "";
    }
    if (hscBoard === "" || hscBoard == null) {
        hscBoardError.innerHTML = "Field is Required!";
    } else {
        hscBoardError.innerHTML = "";
    }
    if (hscInstituteName === "" || hscInstituteName == null) {
        hscInstituteNameError.innerHTML = "Field is Required!";
    } else {
        hscInstituteNameError.innerHTML = "";
    }
    if (hscGroup === "" || hscGroup == null) {
        hscGroupError.innerHTML = "Field is Required!";
    } else {
        hscGroupError.innerHTML = "";
    }
    if (hscRoll === "" || hscRoll == null) {
        hscRollError.innerHTML = "Field is Required!";
    } else {
        hscRollError.innerHTML = "";
    }
    if (hscRegNO === "" || hscRegNO == null) {
        hscRegNOError.innerHTML = "Field is Required!";
    } else {
        hscRegNOError.innerHTML = "";
    }
    if (hscGpa === "" || hscGpa == null) {
        hscGpaError.innerHTML = "Field is Required!";
    } else {
        hscGpaError.innerHTML = "";
    }

    if (hscGpa === "" || hscGpa == null) {
    } else {
        window.location.pathname = "success.html";
    }
});

Back1.onclick = function () {
    Form1.style.left = "0px";
    Form2.style.left = "4000px";
    progress.style.width = "25%";
};

Back2.onclick = function () {
    Form2.style.left = "0px";
    Form3.style.left = "4000px";
    progress.style.width = "50%";
};

Back3.onclick = function () {
    Form3.style.left = "0px";
    Form4.style.left = "4000px";
    progress.style.width = "75%";
};

// Same as JS
function FillAddressInput() {
    let checkbox = document.getElementById("filladdress");
    let pre_Division = document.getElementById("pre_Division");
    let pre_District = document.getElementById("pre_District");
    let pre_City = document.getElementById("pre_City");
    let pre_Postal = document.getElementById("pre_Postal");
    let par_Division = document.getElementById("par_Division");
    let par_District = document.getElementById("par_District");
    let par_City = document.getElementById("par_City");
    let par_Postal = document.getElementById("par_Postal");
    let pre_Country = document.getElementById("pre_Country");
    let pre_State = document.getElementById("pre_State");
    let pre_InterCity = document.getElementById("pre_InterCity");
    let pre_Village = document.getElementById("pre_Village");
    let par_Country = document.getElementById("par_Country");
    let par_State = document.getElementById("par_State");
    let par_InterCity = document.getElementById("par_InterCity");
    let par_Village = document.getElementById("par_Village");

    if (checkbox.checked == true) {
        let pre_DivisionVal = pre_Division.value;
        let pre_DistrictVal = pre_District.value;
        let pre_CityVal = pre_City.value;
        let pre_PostalVal = pre_Postal.value;
        let pre_CountryVal = pre_Country.value;
        let pre_StateVal = pre_State.value;
        let pre_InterCityVal = pre_InterCity.value;
        let pre_VillageVal = pre_Village.value;

        par_Division.value = pre_DivisionVal;
        par_District.value = pre_DistrictVal;
        par_City.value = pre_CityVal;
        par_Postal.value = pre_PostalVal;
        par_Country.value = pre_CountryVal;
        par_State.value = pre_StateVal;
        par_InterCity.value = pre_InterCityVal;
        par_Village.value = pre_VillageVal;
    } else {
        par_Division.value = "";
        par_District.value = "";
        par_City.value = "";
        par_Postal.value = "";
        par_Country.value = "";
        par_State.value = "";
        par_InterCity.value = "";
        par_Village.value = "";
    }
}

//Get ApplicationType From Localstorage
let appGetType = document.getElementById("appGetType");
appGetType.innerHTML =
    getFromStorage.ApplicationType === "" ||
    getFromStorage.ApplicationType == undefined
        ? ""
        : getFromStorage.ApplicationType;

// International Student check
function applicationType(type) {
    let typeErrorMsg = document.getElementById("typeError");
    let appGetType = document.getElementById("appGetType");
    if (type.value === "" || type.value == null) {
        typeErrorMsg.innerHTML = "Please Select a Field";
    } else {
        getFromStorage.ApplicationType = type.value;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        typeErrorMsg.innerHTML = "";
    }

    let bloodGroup = document.getElementById("bloodGroup");
    let photo = document.getElementById("photo");
    let hideBloodGr = document.getElementById("hideBloodGr");
    let birth_cert = document.getElementById("birth_cert");
    let medicalCert = document.getElementById("medicalCert");
    let tribal = document.getElementById("tribal");
    let passNoSpan = document.getElementById("passNoSpan");
    let passNoError = document.getElementById("passNoError");
    let hidePhoto = document.getElementById("hidePhoto");
    let policeClearance = document.getElementById("policeClearance");
    let passPhoto = document.getElementById("passPhoto");
    let nation_id = document.getElementById("nation_id");
    let pass_expire = document.getElementById("pass_expire");
    let local_hidden = document.getElementById("local_hidden");
    let division = document.getElementById("division");
    let country = document.getElementById("country");
    let state = document.getElementById("state");
    let district = document.getElementById("district");
    let localCity = document.getElementById("localCity");
    let interCity = document.getElementById("interCity");
    let village = document.getElementById("village");
    let par_division_div = document.getElementById("par_division_div");
    let par_district_div = document.getElementById("par_district_div");
    let par_city_div = document.getElementById("par_city_div");
    let par_postal_Code = document.getElementById("par_postal_Code");
    let par_country_div = document.getElementById("par_country_div");
    let par_state_div = document.getElementById("par_state_div");
    let par_Village_div = document.getElementById("par_Village_div");
    let par_interCity = document.getElementById("par_interCity");
    let localSecondaryExam = document.getElementById("localSecondaryExam");
    let localHigherExam = document.getElementById("localHigherExam");
    let interNationHigherExam = document.getElementById(
        "interNationHigherExam"
    );
    let interNationSecondaryExam = document.getElementById(
        "interNationSecondaryExam"
    );

    if (type.value === "International Student") {
        interNationHigherExam.style.display = "block";
        interNationSecondaryExam.style.display = "block";
        localSecondaryExam.style.display = "none";
        localHigherExam.style.display = "none";
        bloodGroup.style.display = "block";
        photo.style.display = "block";
        pass_expire.style.display = "block";
        policeClearance.style.display = "block";
        medicalCert.style.display = "block";
        passPhoto.style.display = "block";
        birth_cert.style.display = "none";
        hideBloodGr.style.display = "none";
        tribal.style.display = "none";
        hidePhoto.style.display = "none";
        nation_id.style.display = "none";
        division.style.display = "none";
        country.style.display = "block";
        district.style.display = "none";
        localCity.style.display = "none";
        postalCode.style.display = "none";
        par_division_div.style.display = "none";
        par_district_div.style.display = "none";
        par_city_div.style.display = "none";
        par_postal_Code.style.display = "none";
        passNoSpan.style.visibility = "visible";
        passNoError.style.visibility = "visible";
    } else if (type.value === "Local Student(Bangladeshi)") {
        interNationHigherExam.style.display = "none";
        interNationSecondaryExam.style.display = "none";
        localSecondaryExam.style.display = "block";
        localHigherExam.style.display = "block";
        bloodGroup.style.display = "none";
        photo.style.display = "none";
        passNoSpan.style.visibility = "none";
        passPhoto.style.display = "none";
        policeClearance.style.display = "none";
        medicalCert.style.display = "none";
        pass_expire.style.display = "none";
        birth_cert.style.display = "block";
        nation_id.style.display = "block";
        hidePhoto.style.display = "block";
        tribal.style.display = "block";
        state.style.display = "none";
        country.style.display = "none";
        interCity.style.display = "none";
        village.style.display = "none";
        par_division_div.style.display = "block";
        par_district_div.style.display = "block";
        par_interCity.style.display = "none";

        par_postal_Code.style.display = "block";
        par_country_div.style.display = "none";
        par_state_div.style.display = "none";
        par_Village_div.style.display = "none";
    }

    if (type.value === "" || type.value == null) {
        Next1.onclick = function () {
            Form1.style.left = "";
            Form2.style.left = "";
            progress.style.width = "0%";
        };
    }
}

function interOnchangeForm3() {
    let country = document.getElementById("country");
    let division = document.getElementById("division");
    let selectedField = document.getElementById("selectField").value;
    console.log("selected", selectedField);

    if (selectedField === "International Student") {
        country.style.display = "none";
        division.style.display = "block";
    } else if (selectedField === "Local Student(Bangladeshi)") {
        country.style.display = "block";
        division.style.display = "none";
    }
}
//Form 1 photo file size validation

function photoValidation(input) {
    let photo = document.getElementById("photoID").value;
    let hidePhoto = document.getElementById("hidePhotoID");
    let hidePhotoError = document.getElementById("hidePhotoError");
    let photoError = document.getElementById("photoError");
    let fileSize = input[0].size / 1000;

    if (fileSize > 100) {
        hidePhotoError.innerHTML = "File size exceeds 100 KB ";
        photoError.innerHTML = "File size exceeds 100 KB";
    } else if (fileSize <= 100) {
        getFromStorage.StudentPhoto = input[0].name;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        hidePhotoError.innerHTML = "";
        photoError.innerHTML = "";
    } else if (photo === "" || photo == null) {
        photoError.innerHTML = "Photo is Required!";
    } else if (hidePhoto === "" || hidePhoto == null) {
        hidePhotoError.innerHTML = "Photo is Required!";
    } else {
        hidePhotoError.innerHTML = "";
        photoError.innerHTML = "";
    }
}

// International Police Clearence Photo Validation
function policeClearenceOnchange(input) {
    let police_clearence = document.getElementById("police_clearence").value;
    let policeClearError = document.getElementById("policeClearError");
    let fileSize = input[0].size / 1000;
    if (fileSize > 100) {
        policeClearError.innerHTML = "File size exceeds 100 KB";
    } else if (fileSize <= 100) {
        getFromStorage.PoliceClearance = input[0].name;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        policeClearError.innerHTML = "";
    } else if (police_clearence === "" || police_clearence == null) {
        policeClearError.innerHTML = "Photo is Required!";
    } else {
        policeClearError.innerHTML = "";
    }
}

//InterNational Medical Photo size validation
function medicalCertificateOnchange(input) {
    let medicalCertificate =
        document.getElementById("medicalCertificate").value;
    let mediCertError = document.getElementById("mediCertError");
    let fileSize = input[0].size / 1000;

    if (fileSize > 100) {
        mediCertError.innerHTML = "File size exceeds 100 KB";
    } else if (fileSize <= 100) {
        getFromStorage.MedicalCertificate = input[0].name;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        mediCertError.innerHTML = "";
    } else if (medicalCertificate === "" || medicalCertificate == null) {
        mediCertError.innerHTML = "Photo is Required!";
    } else {
        mediCertError.innerHTML = "";
    }
}

//International Passport photocopy photo validation
function passportPhotoOnchange(input) {
    let photo = input[0].name;
    let passportPhoto = document.getElementById("passportPhoto").value;
    let passPhotoError = document.getElementById("passPhotoError");
    let fileSize = input[0].size / 1000;
    if (fileSize > 100) {
        passPhotoError.innerHTML = "File size exceeds 100 KB";
    } else if (fileSize <= 100) {
        getFromStorage.PassPortPhoto = photo;
        localStorage.setItem("personalInfo", JSON.stringify(getFromStorage));
        passPhotoError.innerHTML = "";
    } else if (passportPhoto === "" || passportPhoto == null) {
        passPhotoError.innerHTML = "Photo is Required!";
    } else {
        passPhotoError.innerHTML = "";
    }
}

//Form 2 Guardian photo validation
function guardianPhotoHandle(input) {
    let guardianPhoto = document.getElementById("guardianPhoto").value;
    let guardianPhotoError = document.getElementById("guardianPhotoError");
    let fileSize = input.files[0].size / 1000;

    if (fileSize > 100) {
        guardianPhotoError.innerHTML = "File size exceeds 100 KB";
    } else if (fileSize <= 100) {
        guardianPhotoError.innerHTML = "";
    } else if (guardianPhoto === "" || guardianPhoto == null) {
        guardianPhotoError.innerHTML = "Photo is Required!";
    } else {
        guardianPhotoError.innerHTML = "";
    }
}
