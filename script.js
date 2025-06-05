const userList = document.getElementById('userList');
const errorMsg = document.getElementById('errorMsg');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers() {
  userList.innerHTML = '';
  errorMsg.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      return res.json();
    })
    .then(users => {
      users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user';
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(div);
      });
    })
    .catch(err => {
      errorMsg.textContent = '⚠️ Could not load data. Please try again later.';
      console.error(err);
    });
}

fetchUsers();
reloadBtn.addEventListener('click', fetchUsers);
