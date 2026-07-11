const tweeter = Tweeter();
const renderer = Renderer();
renderer.renderPosts(tweeter.getPosts());

// add new post
$("#twit-button").on("click", function() {
    var text = $("#input").val().trim();
    if (text === "") return;
    tweeter.addPost(text);
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts());
});

// delete a post
$(document).on("click", ".delete", function() {
    var postID = $(this).closest(".post").data("id");
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
});

// add a comment
$(document).on("click", ".comment-button", function() {
    var postID = $(this).closest(".post").data("id");
    var text = $(this).siblings(".comment-input").val().trim();
    if (text === "") return;
    tweeter.addComment(postID, text);
    $(this).siblings(".comment-input").val("");
    renderer.renderPosts(tweeter.getPosts());
});

// delete a comment
$(document).on("click", ".delete-comment", function() {
    var postID = $(this).closest(".post").data("id");
    var commentID = $(this).data("id");
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
});