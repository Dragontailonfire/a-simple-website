let myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
myHeading.textContent = "hello there!"

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `This is a simple website, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This is a simple website, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});