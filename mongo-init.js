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
db.roles.insertMany([
  { name: "admin", admin: true, read: true, write: true },
  { name: "user", admin: false, read: true, write: true },
  { name: "ro", admin: false, read: true, write: false }
]);
db.users.insertMany([
    { user: "admin", pwd: "", roles: ["admin"] },
    { user: "user", pwd: "", roles: ["user"] }
]);

db.boxes.insertMany([
{ name: "BOX01", description: "Big box blue" },
{ name: "BOX02", description: "Big box red" }
]);
db.items.insertMany([
{ name: "House music vol.1", box: "BOX01", description: "House music live volumen 1" },
{ name: "House music vol.2", box: "BOX01", description: "House music live volumen 2" }
]);