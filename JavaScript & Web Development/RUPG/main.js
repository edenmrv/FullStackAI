const model = UserModel();
const renderer = Renderer();

$("#generate-btn").on("click", function() {
    $("#generate-btn").text("Loading...").prop("disabled", true);

    model.fetchAllData()
        .then(function(data) {
            renderer.renderAll(data);
        })
        .catch(function(error) {
            renderer.renderError(error.message);
        })
        .finally(function() {
            $("#generate-btn").text("Generate User").prop("disabled", false);
        });
});