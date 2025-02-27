// Global variables for DOM elements
const profileDiv = document.getElementById("profile");
const repoDiv = document.getElementById("repo");
const followersDiv = document.getElementById("followers");

// Create and append input fields and button
document.addEventListener("DOMContentLoaded", setupUI);

function setupUI() {
    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "GitHub Username: ";
    usernameLabel.setAttribute("for", "usernameInput");
    
    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "usernameInput";
    
    const fetchButton = document.createElement("button");
    fetchButton.textContent = "Fetch GitHub Data";
    fetchButton.addEventListener("click", () => fetchGitHubData(usernameInput.value.trim()));
    
    profileDiv.append(usernameLabel, usernameInput, fetchButton);
}

async function fetchGitHubData(username) {
    if (!username) {
        profileDiv.innerHTML = "<p>Please enter a GitHub username.</p>";
        setupUI();
        return;
    }
    
    clearPreviousData();
    
    try {
        const [profile, repos, followers] = await Promise.all([
            fetchData(`https://api.github.com/users/${username}`),
            fetchData(`https://api.github.com/users/${username}/repos`),
            fetchData(`https://api.github.com/users/${username}/followers`)
        ]);
        
        displayProfile(profile);
        displayRepositories(repos);
        displayFollowers(followers);
    } catch (error) {
        profileDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        setupUI();
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Data not found");
    return response.json();
}

function displayProfile(data) {
    const profileContent = `
        <img src="${data.avatar_url}" alt="GitHub Avatar" style="width:100px; border-radius:50%;">
        <p><strong>Name:</strong> ${data.name || "N/A"}</p>
        <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>
        <p><strong>Location:</strong> ${data.location || "Unknown"}</p>
        <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
    `;
    profileDiv.innerHTML += profileContent;
}

function displayRepositories(repos) {
    repoDiv.innerHTML = "<h3>Repositories:</h3>";
    repos.forEach(repo => {
        const repoElement = document.createElement("div");
        repoElement.innerHTML = `
            <p><strong>Name:</strong> ${repo.name}</p>
            <p><strong>Description:</strong> ${repo.description || "No description available"}</p>
            <p><strong>URL:</strong> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
            <hr>
        `;
        repoDiv.appendChild(repoElement);
    });
}

function displayFollowers(followers) {
    followersDiv.innerHTML = "<h3>Followers:</h3>";
    followers.forEach(follower => {
        const followerElement = document.createElement("div");
        followerElement.innerHTML = `
            <p><strong>ID:</strong> ${follower.id}</p>
            <p><strong>Username:</strong> <a href="#" class="follower-link" data-username="${follower.login}">${follower.login}</a></p>
            <hr>
        `;
        followersDiv.appendChild(followerElement);
    });
    
    document.querySelectorAll(".follower-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            fetchGitHubData(this.getAttribute("data-username"));
        });
    });
}

function clearPreviousData() {
    profileDiv.innerHTML = "";
    setupUI();
    repoDiv.innerHTML = "";
    followersDiv.innerHTML = "";
}