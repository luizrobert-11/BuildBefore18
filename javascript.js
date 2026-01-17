console.log("script.js loaded");

// Initialize fresh account if it doesn't exist
function initUser() {
  let userData = localStorage.getItem("userData");

  if (!userData) {
    const freshUser = {
      streak: 0,
      projects: [],
      createdAt: new Date().toLocaleDateString()
    };

    localStorage.setItem("userData", JSON.stringify(freshUser));
    userData = JSON.stringify(freshUser);
  }

  const user = JSON.parse(userData);
  showUserNotification(user);
}

// Display user info on the page
function showUserNotification(user) {
  const streakEl = document.getElementById("streak");
  const projectsEl = document.getElementById("projects");
  const joinedEl = document.getElementById("joined");

  if (streakEl && projectsEl && joinedEl) {
    streakEl.textContent = `Streak: ${user.streak} days`;
    projectsEl.textContent = `Projects Completed: ${user.projects.length}`;
    joinedEl.textContent = `Account Created: ${user.createdAt}`;
  }
}

// Example: Add a new project (updates notification dynamically)
function addProject(name) {
  const user = JSON.parse(localStorage.getItem("userData"));
  user.projects.push({ name, date: new Date().toLocaleDateString() });
  localStorage.setItem("userData", JSON.stringify(user));
  showUserNotification(user);
}

// Run on page load
document.addEventListener("DOMContentLoaded", initUser);
