
    function calc(type) {
        let a = Number(document.getElementById("num1").value);
        let b = Number(document.getElementById("num2").value);
        let res = 0;

        if (type === 'add') res = a + b;
        if (type === 'sub') res = a - b;
        if (type === 'mul') res = a * b;
        if (type === 'div') res = b !== 0 ? a / b : "0-a bölmək olmur";

        document.getElementById("result").value = res;
    }
