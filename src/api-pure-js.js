const fetch = require('node-fetch');

async function getUsers(count) {
    const url = `https://sdal.pw/api/cdc/users?count=${count}`;
    const response = await fetch(url);
    const users = response.json();
    return users;
}

async function main() {
    const users = await getUser(10);
    const user = users[0];
    console.log(user.surname);
}

main();


