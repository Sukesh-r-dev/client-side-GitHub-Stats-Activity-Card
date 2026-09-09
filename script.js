const usernameInput = document.getElementById('usernameInput');
const loadBtn = document.getElementById('loadBtn');
const profileContent = document.getElementById('profileContent');

const avatar = document.getElementById('avatar');
const nameEl = document.getElementById('name');
const bio = document.getElementById('bio');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');

loadBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetchGitHubProfile(username);
    }
});

async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('User not found');
        
        const data = await response.json();
        
        avatar.src = data.avatar_url;
        nameEl.textContent = data.name || data.login;
        bio.textContent = data.bio || 'No bio available';
        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;
        
        profileContent.classList.remove('hidden');
    } catch (error) {
        alert(error.message);
    }
}
