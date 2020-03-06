// import fetch = require('node-fetch');

interface User {
    id: number;
    name: string;
    followers: number[];
    age: number;
    verified: boolean;
}

async function getUsers(count: number): Promise<User[]> {
    const url = `https://sdal.pw/api/cdc/users?count=${count}`;
    const response = await fetch(url);
    const users = await response.json();
    return users;
}

async function main() {
    const users = await getUsers(10);
    const user = users[0];
    console.log(user.followers);
}

main();


