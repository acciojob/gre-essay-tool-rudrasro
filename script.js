//your code here
function updateWordCount() {
    var text = document.getElementById("evaluatedText").value;
    var wordCount = text.split(" ").length;
    document.getElementById("wordCount").innerHTML = wordCount;
}