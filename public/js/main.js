

window.onload = function() {
	var editor = ace.edit("editor");
    editor.setTheme("ace/theme/terminal");
    editor.session.setMode("ace/mode/javascript");
   
    var pad = document.getElementById('editor');
    

     var previousMarkdownValue;

    var convertTextAreaToMarkdown = function(){

        var markdownText = pad.value;
        console.log(markdownText);
        previousMarkdownValue = markdownText;
       

      }

      var didChangeOccur = function(){
        if(previousMarkdownValue != pad.value){
            return true;
        }
        return false;
    };

    setInterval(function(){
        if(didChangeOccur()){
            convertTextAreaToMarkdown();
        }
    }, 1000);

      pad.addEventListener('input', convertTextAreaToMarkdown);

    sharejs.open('hello', 'text', function(error, doc) {
        doc.attach_ace(pad);
    });

 };