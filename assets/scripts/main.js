document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/dark.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/light.webp";
  }
};

let searchInput = document.getElementById("input");
let searchBtn = document.getElementById("search-btn");
let reposList = document.getElementById("repos-list");

searchBtn.onclick = () => {
  getUserRepos();
};

function getUserRepos() {
  if (searchInput.value === "") {
    reposList.innerHTML = "<span class='error'>برجاء ادخال اسم المستخدم</span>";
    return;
  } else {
    fetch(`https://api.github.com/users/${searchInput.value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reposList.innerHTML = `
          <div class="user-data">
          <div class="avatar">
            <img src=${data.avatar_url} />
            <span>${data.name}</span>
            <a href=${data.url}>GitHub Account</a>
            <a href=${data.blog}>Portfolio Website</a>
          </div>
            <div class="data">
              <p>${data.name} Repos:</p>
              <ol class="user-repos" id="user-repos"></ol>
            </div>
          </div>
        `;
      });

    let repos = "";
    fetch(`https://api.github.com/users/${searchInput.value}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          repos += `
            <li><a class="repo" target="_blank" href=${data[i].homepage}>${data[i].name}</a></li>
          `;
        }
        document.getElementById("user-repos").innerHTML = repos;
      });
  }
}
