const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());
let users = [
  { id: 1, firstName: "Anna", lastName: "Kowalska", email: "anna.kowalska@example.com" },
  { id: 2, firstName: "Jan", lastName: "Nowak", email: "jan.nowak@example.com" },
  { id: 3, firstName: "Katarzyna", lastName: "Wiśniewska", email: "katarzyna.wisniewska@example.com" },
  { id: 4, firstName: "Piotr", lastName: "Wójcik", email: "piotr.wojcik@example.com" },
  { id: 5, firstName: "Magdalena", lastName: "Kaczmarek", email: "magdalena.kaczmarek@example.com" },
  { id: 6, firstName: "Tomasz", lastName: "Mazur", email: "tomasz.mazur@example.com" },
  { id: 7, firstName: "Agnieszka", lastName: "Lewandowska", email: "agnieszka.lewandowska@example.com" },
  { id: 8, firstName: "Marek", lastName: "Zieliński", email: "marek.zielinski@example.com" },
  { id: 9, firstName: "Joanna", lastName: "Szymańska", email: "joanna.szymanska@example.com" },
  { id: 10, firstName: "Paweł", lastName: "Woźniak", email: "pawel.wozniak@example.com" }
];
app.get("/users", (req, res) => {
  console.log("GET /users requested");
  res.json(users);
});

app.post("/user", (req,res)=>{
  const newUSer={
    id: Date.now(),
    first_Name: req.body.first,
    last_name: req.body.first,
    email: req.body.first,
  }
app.put("/user/:id", (req,res)=>{
  const id = parseInt(req.params.id)
  const user = users.find(u=>u.id===id)
  if(!user) return res.status(404).json({message:"Nie znaleziono"})
    
    user.first_Name = req.body.first,
    user.last_name = req.body.last,
    user.email = req.body.email,
    res.json(newUSer)
})

  users.push(newUSer)
  res.status(201).json(newUSer)
})



app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
