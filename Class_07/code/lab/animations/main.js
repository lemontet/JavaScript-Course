var blog = [
  {
    title: "My First Post",
    image: "http://fillmurray.com/400/400",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Groucho Marx",
    comments: [
      { message: "What a great post!", poster: "Commenter One" },
      { message: "Eh, I didn't like it!", poster: "Commenter Two" },
      { message: "Fantastic", poster: "Commenter Three" }
    ]
  },
  {
    title: "My Second Post",
    image: "http://placecage.com/400/400",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    author: "Zeppo Marx",
    comments: [{ message: "Woohoo!", poster: "Commenter One" }]
  },
  {
    title: "My Third Post",
    image: "http://stevensegallery.com/400/400",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    author: "Gummo Marx",
    comments: [
      { message: "What are you talking about?", poster: "Commenter One" },
      { message: "I don't believe you", poster: "Commenter Two" },
      { message: "Can't be bothered to read this", poster: "Commenter Four" }
    ]
  }
];

blog.forEach(function(article, index){
  console.log(index, article);
})

function searchBlogByAuthor (authorName){
  var authorsArticles = blog.filter(function(article){
    return article.author == 'Groucho Marx';
  });
  return authorsArticles;
}

var gummosArticles = searchBlogByAuthor('Gummo Marx');
gummosArticles;

var shorthandTitles = blog.map(function(article){
  return `${article.title}, ${article.author}`;
});

console.log(shorthandTitles);

function render(){
  var markup = blog.reduce(function(runningTotal, article){
  var allComments = article.comments;
  var commentMarkup = allComments.reducefunction(currentHTML, comment){
    return
    return (
      runningTotal +
      `
      <div>
        <h2>${article.title}</h2>
        <h3>${article.author}</h3>
        <img src=${}
      </div>
    `
    );
  });
}