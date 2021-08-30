const data = {
  id: "8",
  tags: ["angular", "frontend"],
  date: "2018-01-24T21:56:15.353Z",
  name: "Angular Course",
  author: "DungGramer",
  isPublished: true,
  price: 15000,
};

fetch("http://localhost:3210/", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
