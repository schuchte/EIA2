var L002_Sequenzmemory;
(function (L002_Sequenzmemory) {
    var chosenSequence = "";
    var Sequencearray = [];
    var gametime;
    var claritytime;
    var joker = false;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.querySelector("#chosensequence").addEventListener("keydown", helper);
        var help = document.createElement("p");
        function helper() {
            document.querySelector("#help").innerHTML = help.textContent;
        }
        document.querySelector("#gametime").addEventListener("keydown", Gtime);
        function Gtime() {
            var timeg = document.createElement("p");
            function Gtime() {
                document.querySelector("#gtime").innerHTML = timeg.textContent;
                var myLet = setInterval(myTimer, 1000);
                function myTimer() {
                }
                document.querySelector("#claritytime").addEventListener("keydown", Ctime);
                function Ctime() {
                    var timec = document.createElement("p");
                    function Ctime() {
                        document.querySelector("#ctime").innerHTML = timec.textContent;
                        var myLet = setInterval(myTimer, 1000);
                        function myTimer() {
                        }
                        document.querySelector("#start").addEventListener("click", Startgame);
                        function Startgame() {
                            chosenSequence = help.value;
                            Sequencearray = chosenSequence.split("");
                            Sequencearray.sort();
                            var letter = document.createElement("#card"); //Buchstaben sollen als span Elemente angezeigt werden
                            document.querySelector("#chosenSequence").innerHTML = letter.textContent;
                        }
                    }
                }
            }
        }
    }
})(L002_Sequenzmemory || (L002_Sequenzmemory = {}));
//# sourceMappingURL=sequenztypescript.js.map