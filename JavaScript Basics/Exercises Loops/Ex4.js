const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: []
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      {id: 1, text: "Idiot has no idea"},
      {id: 2, text: "Fool!"},
      {id: 3, text: "I agree!"}
    ]
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: []
  }
];

for (let i = 0; i < posts.length; i++) {
  if (posts[i].id === 2) {
    for (let j = 0; j < posts[i].comments.length; j++) {
      if (posts[i].comments[j].id === 3) {
        posts[i].comments.splice(j, 1);
      }
    }
  }
}

console.log(posts);