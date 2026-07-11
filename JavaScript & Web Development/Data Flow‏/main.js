const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
];

// THE RENDER FUNCTION
const render = function () {
    // If we don't do this, the old list remains, and the new list gets appended below it
    $("#timeline").empty();

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        
        let postBox = $(`<div class='post-box' data-id='${i}'>
                            <b>${post.name}:</b> ${post.text}
                       </div>`);
                       
        $("#timeline").append(postBox);
    }
};
render();

// Adding a new post
$("#post-btn").on("click", function () {
    const nameVal = $("#input-name").val();
    const textVal = $("#input-text").val();

    // Update the Data 
    posts.push({
        name: nameVal,
        text: textVal
    });
    $("#input-name").val("");
    $("#input-text").val("");
    render();
});

// Removing a post
$("#timeline").on("click", ".post-box", function () {
    const postIndex = $(this).data("id");
    // Update the Data: Remove 1 item at the specific index from the array
    posts.splice(postIndex, 1);
    render();
});