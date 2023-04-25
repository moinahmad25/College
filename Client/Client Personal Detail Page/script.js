const imageChoose = document.querySelector(".image-choose"),
    imageChoose1 = document.querySelector(".image-choose1"),
    imageChoose2 = document.querySelector(".image-choose2"),
    imageChoose3 = document.querySelector(".image-choose3"),
    chooseImg = document.querySelector(".choose"),
    chooseImg1 = document.querySelector(".choose1"),
    chooseImg2 = document.querySelector(".choose2"),
    chooseImg3 = document.querySelector(".choose3"),
    previewImg = document.querySelector(".st-profile-photo img"),
    previewImg1 = document.querySelector(".st-profile-photo1 img"),
    previewImg2 = document.querySelector(".st-profile-photo2 img"),
    previewImg3 = document.querySelector(".st-profile-photo3 img"),
    btn = document.querySelector(".btn");
const storeToObject = {}

// getting value from the all input fields into different - different variables

// console.log(firstName)

btn.addEventListener("click", () => {
    // const studentProfileImg = imageChoose.files[0],
    // r1Img = imageChoose1.files[0],
    // r2Img = imageChoose2.files[0],
    // r3Img = imageChoose3.files[0];
    const firstName = document.querySelector(".f-name").value,
        lastName = document.querySelector(".l-name").value,
        mobileNumber = document.querySelector(".m-number").value,
        email = document.querySelector(".email").value,
        clgName = document.querySelector(".clg-name").value,
        studyingYear = document.querySelector(".studying-yr").value,
        bloodGroup = document.querySelector(".bld-grp").value,
        address = document.querySelector(".address").value,
        fatherName = document.querySelector(".father-name").value,
        motherName = document.querySelector(".mother-name").value,
        parentContact = document.querySelector(".p-number").value,
        parentAddress = document.querySelector(".p-address").value,
        relation1Name = document.querySelector(".r1-name").value,
        relation1Relation = document.querySelector(".r1-relation").value,
        relation1Number = document.querySelector(".r1-number").value,
        relation2Name = document.querySelector(".r2-name").value,
        relation2Relation = document.querySelector(".r2-relation").value,
        relation2Number = document.querySelector(".r2-number").value,
        relation3Name = document.querySelector(".r3-name").value,
        relation3Relation = document.querySelector(".r3-relation").value,
        relation3Number = document.querySelector(".r3-number").value,
        allergy = document.querySelector(".allergy").value;

    // let storeInfo = [];


    storeToObject.studentName = firstName + " " + lastName;
    storeToObject.mobileNumber = mobileNumber;
    storeToObject.email = email;
    storeToObject.clgName = clgName;
    storeToObject.studyingYear = studyingYear;
    storeToObject.bloodGroup = bloodGroup;
    storeToObject.address = address;
    storeToObject.allergy = allergy;
    storeToObject.fatherName = fatherName;
    storeToObject.motherName = motherName;
    storeToObject.parentContact = parentContact;
    storeToObject.parentAddress = parentAddress;
    storeToObject.relation1Name = relation1Name;
    storeToObject.relation1Relation = relation1Relation;
    storeToObject.relation1Number = relation1Number;
    storeToObject.relation2Name = relation2Name;
    storeToObject.relation2Relation = relation2Relation;
    storeToObject.relation2Number = relation2Number;
    storeToObject.relation3Name = relation3Name;
    storeToObject.relation3Relation = relation3Relation;
    storeToObject.relation3Number = relation3Number;

    console.log(storeToObject)
    localStorage.setItem("myObject", JSON.stringify(storeToObject));
    localStorage.setItem
    // storeInfo.push(storeToObject)

    window.location.href = "RoomchoosingPage/" + "index.html"

})

const changeImg = () => {
    let file = imageChoose.files[0];
    if (!file) return;
    previewImg.src = URL.createObjectURL(file)
    const reader = new FileReader();
    reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        storeToObject.studentImage = imageDataUrl;
        console.log(storeToObject)
    }
    reader.readAsDataURL(file);
}
const changeImg1 = () => {
    let file = imageChoose1.files[0];
    if (!file) return;
    previewImg1.src = URL.createObjectURL(file)
    const reader1 = new FileReader();
    reader1.onload = function (e) {
        const imageDataUrl1 = e.target.result;
        storeToObject.r1Image = imageDataUrl1;
        console.log(storeToObject)

    }
    reader1.readAsDataURL(file);
}
const changeImg2 = () => {
    let file = imageChoose2.files[0];
    if (!file) return;
    previewImg2.src = URL.createObjectURL(file)
    const reader2 = new FileReader();
    reader2.onload = function (e) {
        const imageDataUrl2 = e.target.result;
        storeToObject.r2Image = imageDataUrl2;
        console.log(storeToObject)

    }
    reader2.readAsDataURL(file);
}
const changeImg3 = () => {
    let file = imageChoose3.files[0];
    if (!file) return;
    previewImg3.src = URL.createObjectURL(file)
    const reader3 = new FileReader();
    reader3.onload = function (e) {
        const imageDataUrl3 = e.target.result;
        storeToObject.r3Image = imageDataUrl3;
        console.log(storeToObject)

    }
    reader3.readAsDataURL(file);
}

imageChoose.addEventListener("change", changeImg)
imageChoose1.addEventListener("change", changeImg1)
imageChoose2.addEventListener("change", changeImg2)
imageChoose3.addEventListener("change", changeImg3)

chooseImg.addEventListener("click", () => imageChoose.click());
chooseImg1.addEventListener("click", () => imageChoose1.click())
chooseImg2.addEventListener("click", () => imageChoose2.click())
chooseImg3.addEventListener("click", () => imageChoose3.click())
