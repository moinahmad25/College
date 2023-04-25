const printBtn = document.querySelector(".btn"),
finalSubmit = document.querySelector(".final-submit"),
wrapper = document.querySelector(".wrapper");
// showMessage = document.querySelector(".showMessage");
const stringifiedObject = localStorage.getItem("myObject");
const myObject = JSON.parse(stringifiedObject);





document.getElementById("st-name").textContent = myObject.studentName;
document.getElementById("st-mobile").textContent = myObject.mobileNumber;
document.getElementById("st-email").textContent = myObject.email;
document.getElementById("college-Name").textContent = myObject.clgName;
document.getElementById("stud-yr").textContent = myObject.studyingYear;
document.getElementById("blood-grp").textContent = myObject.bloodGroup;
document.getElementById("room-allot").textContent = myObject.roomNumber;
;
document.getElementById("st-pr-add").textContent = myObject.address;
document.getElementById("allrg").textContent = myObject.allergy;
document.getElementById("f-name").textContent = myObject.fatherName;
document.getElementById("m-name").textContent = myObject.motherName;
document.getElementById("p-mobile").textContent = myObject.parentContact;
document.getElementById("parent-pr-add").textContent = myObject.parentAddress;
document.getElementById("r1name").textContent = myObject.relation1Name;
document.getElementById("r1relation").textContent = myObject.relation1Relation;
document.getElementById("r1mobile").textContent = myObject.relation1Number;
document.getElementById("r2name").textContent = myObject.relation2Name;
document.getElementById("r2relation").textContent = myObject.relation2Relation;
document.getElementById("r2mobile").textContent = myObject.relation2Number;
document.getElementById("r3name").textContent = myObject.relation3Name;
document.getElementById("r3relation").textContent = myObject.relation3Relation;
document.getElementById("r3mobile").textContent = myObject.relation3Number;
document.getElementById("std-img").src = myObject.studentImage;
document.getElementById("r1img").src = myObject.r1Image;
document.getElementById("r2img").src = myObject.r2Image;
document.getElementById("r3img").src = myObject.r3Image;

printBtn.addEventListener("click", () =>{
    window.print();
})
finalSubmit.addEventListener("click",() =>{
    
})