function redirectToLoginPage() {
    window.location.href = "login.html";
}
function redirectToSignupPage() {
    window.location.href = "signup.html";
}
function openAdoptPage() {
    window.location.href = "companion.html";
}
function openDonatePage() {
    window.location.href = "donation.html";
}
function openVolunteerPage() {
    window.location.href = "volunteer.html";
}
function performSearch() {
    var searchInput = document.getElementById("Persian cat").value;
    window.location.href = "dog3.html" + encodeURIComponent(searchInput);
}