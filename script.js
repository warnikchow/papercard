<script>
    function generateParagraph() {
        var inputText = document.getElementById('inputText').value;
        var preparedMessage = "some prepared message "; // You can modify this message
        var outputParagraph = preparedMessage + inputText;
        document.getElementById('output').value = outputParagraph;
    }
</script>
