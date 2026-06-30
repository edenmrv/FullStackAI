function Renderer() {

    function renderPosts(posts) {
        $("#posts").empty();

        posts.forEach(function(post) {
            var commentsHTML = "";

            post.comments.forEach(function(comment) {
                commentsHTML += `
                    <div class="comment-row">
                        <span class="comment" data-id="${comment.id}">${comment.text}</span>
                        <span class="delete-comment" data-id="${comment.id}">X</span>
                    </div>
                `;
            });

            var postHTML = `
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="comments">${commentsHTML}</div>
                    <div class="comment-controls">
                        <input type="text" placeholder="Got something to say?" class="comment-input">
                        <button class="comment-button">Comment</button>
                    </div>
                    <button class="delete">Delete Post</button>
                </div>
            `;

            $("#posts").append(postHTML);
        });
    }

    return { renderPosts };
}