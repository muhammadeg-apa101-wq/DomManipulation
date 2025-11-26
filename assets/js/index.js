
    function addToList() {
        let input = document.getElementById("myInput");
        let text = input.value.trim();

        if (text === "") return;

        let li = document.createElement("li");
        li.innerText = text;

        document.getElementById("list").appendChild(li);

        input.value = "";
    }
