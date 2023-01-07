var Body = {
    setColor : function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor : function (color) {
        var alist = document.querySelectorAll('a');
        for (var a in alist){
            a.style.color = color;
        }
    }
}

function setColorAll(color) {
    Body.setColor(color);
    Body.setBackgroundColor(color);
    Links.setColor(color);
}