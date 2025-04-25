const accounts = [
    { username: "Administrator", password: "Adm1n25" },
    { username: "user2", password: "pass2" },
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = accounts.find(account => account.username === username && account.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "https://redirected-site.com"; // Change to the desired URL
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
