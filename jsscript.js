// Create user data if not exists
function initUser() {
  if (!localStorage.getItem("userData")) {
    const userData = {
      streak: 0,
      projects: [],
      joined: new Date().toISOString()
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  }
}

function getUser() {
  return JSON.parse(localStorage.getItem("userData"));
}

function addProject(name) {
  const user = getUser();
  user.projects.push({
    name,
    date: new Date().toISOString()
  });
  localStorage.setItem("userData", JSON.stringify(user));
}

document.addEventListener("DOMContentLoaded", initUser);
