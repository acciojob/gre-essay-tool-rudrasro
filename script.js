//your code here
function updateWordCount() {
    var text = document.getElementById("evaluatedText").value;
        var wordCount = text.trim().split(" ").length;
        document.getElementById("wordCount").innerHTML = wordCount;
}