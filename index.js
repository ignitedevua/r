fetch('stats.json?' + Math.random())
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        layoutData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function layoutData(data) {
    var date_div = document.getElementById("date");
    var money_div = document.getElementById("total_money");
    date_div.innerHTML = data.date;
    var total_money = 0;
    var mainContainer = document.getElementById("stats");
    for (var i = 0; i < data.list.length; i++) {

        var div = document.createElement("div");
        var price = data.list[i].p * data.list[i].c;
        // div.className += ' item';
        div.innerHTML = `
        <div class=" item">\
                <div class="icon inl ${data.list[i].i}"></div>\
                <div class="name inl">${data.list[i].t}</div>\
                <div class="count inl">${data.list[i].c}</div>\
                <div class="price inl">${price.toFixed(2)} млн.</div>\
            </div>`;
        div = div.children[0];
        mainContainer.appendChild(div);

        total_money += price;
    }

    money_div.innerText = (total_money / 1000).toFixed(2) + " млрд";
}