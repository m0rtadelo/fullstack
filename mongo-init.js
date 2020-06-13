// Connection user
db.createUser(
        {
            user: "user",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "fullstack"
                }
            ]
        }
);

// Application users
db.users.insertMany([
    { user: "admin", pwd: "1234", admin: true, read: true, write: true },
    { user: "user", pwd: "1234", admin: false, read: true, write: true },
    { user: "ro", pwd: "1234", admin: false, read: true, write: false }
]);

db.items.insertMany([
{ name: "House music vol.1", box: { name: "BOX01", description: "Big box blue" }, description: "House music live volumen 1" },
{ name: "House music vol.2", box: { name: "BOX02", description: "Big box red" }, description: "House music live volumen 2" }
]);