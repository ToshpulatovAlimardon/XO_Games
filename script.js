let boxes = document.querySelectorAll(".box");
let sp = document.querySelectorAll(".container p span");

let pathX = {
    fill: "X",
    check: false,
    xClick: [],
};
let pathO = {
    fill: "O",
    check: false,
    oClick: [],
};

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = (e) => {
        if (e.target.textContent === pathX.fill) return;
        else if (e.target.textContent === pathO.fill) return;
        let dataIndex = e.target.getAttribute("data-index");
        pathX.check = !pathX.check;
        if (pathX.check) {
            e.target.innerHTML = pathX.fill;
            pathX.xClick.push(Number(dataIndex));
            sp[0].style.color = "rgb(0,0,0,.3";
            sp[1].style.color = "#000";
        } else if (!pathX.check) {
            pathO.check = true;
            sp[1].style.color = "rgb(0,0,0,.3";
            sp[0].style.color = "#000";
            if (pathO.check) {
                e.target.innerHTML = pathO.fill;
                pathO.oClick.push(Number(dataIndex));
                pathO.check = false;
            }
        }
        // x path win
        if (
            pathX.xClick.includes(0) &&
            pathX.xClick.includes(1) &&
            pathX.xClick.includes(2)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(3) &&
            pathX.xClick.includes(4) &&
            pathX.xClick.includes(5)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(6) &&
            pathX.xClick.includes(7) &&
            pathX.xClick.includes(8)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(0) &&
            pathX.xClick.includes(3) &&
            pathX.xClick.includes(6)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(1) &&
            pathX.xClick.includes(4) &&
            pathX.xClick.includes(7)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(2) &&
            pathX.xClick.includes(5) &&
            pathX.xClick.includes(8)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(0) &&
            pathX.xClick.includes(4) &&
            pathX.xClick.includes(8)
        ) {
            alert("player X win");
            location.reload();
        } else if (
            pathX.xClick.includes(2) &&
            pathX.xClick.includes(4) &&
            pathX.xClick.includes(6)
        ) {
            alert("player X win");
            location.reload();
        }

        // O path win

        if (
            pathO.oClick.includes(0) &&
            pathO.oClick.includes(1) &&
            pathO.oClick.includes(2)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(3) &&
            pathO.oClick.includes(4) &&
            pathO.oClick.includes(5)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(6) &&
            pathO.oClick.includes(7) &&
            pathO.oClick.includes(8)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(0) &&
            pathO.oClick.includes(3) &&
            pathO.oClick.includes(6)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(1) &&
            pathO.oClick.includes(4) &&
            pathO.oClick.includes(7)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(2) &&
            pathO.oClick.includes(5) &&
            pathO.oClick.includes(8)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(0) &&
            pathO.oClick.includes(4) &&
            pathO.oClick.includes(8)
        ) {
            alert("player O win");
            location.reload();
        } else if (
            pathO.oClick.includes(2) &&
            pathO.oClick.includes(4) &&
            pathO.oClick.includes(6)
        ) {
            alert("player O win");
            location.reload();
        }
    };
}

document.getElementById("refresh").onclick = () => location.reload();
