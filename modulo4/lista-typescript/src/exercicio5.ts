//5

type userAdmin = {
    name: string,
    email: string,
    role: string
}

const users: userAdmin[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function usersAdmin(users: userAdmin[]): string[] {
    const filteredUserAdmin = users.filter((user) => {
        return user.role === "admin"
    })
    console.table(filteredUserAdmin)
    return filteredUserAdmin.map((user) => {
        return user.email
    })
}

console.log(usersAdmin(users))