function Tweeter() {
    var posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!"},
                { id: "c2", text: "Second comment on first post!!"},
                { id: "c3", text: "Third comment on first post!!!"}
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster , you will be first one day"},
                { id: "c5", text: "Yeah, belive in yourself!"},
                { id: "c6", text: "Haha second place what a joke"}
            ]
        }
    ];
    var postIDCounter = 2;
    var commentIDCounter = 6;

    function getPosts() { return posts;}
    function addPost(text) {
        postIDCounter++;
        var newPost = {
            id: "p" + postIDCounter,
            text: text,
            comments: []
        };
        posts.push(newPost);
    }

    function removePost(postID) {
        posts = posts.filter(function(post) {
            return post.id !== postID;
        });
    }

    function addComment(postID, text) {
        commentIDCounter++;
        var post = posts.find(function(post) { return post.id === postID;});
        if (post) {
            post.comments.push({
                id: "c" + commentIDCounter,
                text: text
            });
        }
    }
    function removeComment(postID, commentID) {
        var post = posts.find(function(post) {
            return post.id === postID;
        });
        if (post) {
            post.comments = post.comments.filter(function(comment) {
                return comment.id !== commentID;
            });
        }
    }
    
    return { getPosts, addPost, removePost, addComment, removeComment };
}