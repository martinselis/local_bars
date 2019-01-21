button = document.getElementById("button")
button.addEventListener('click', getAddress);
var select = 'none';
var argSelect = 0;
var value;
var error;

try {
    document.getElementsByName("Address")[0].value = address;
    argSelect = document.getElementById(arg2)
    argSelect.className += " selected";
} catch (err) {
}

// Adding Bing maps to the page //
function GetMap() {
    if (error > 0) {
        var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AlQbAewbI0bIGV8Doq5Byi0P--YD5N6hvoUHDMvY5IsjrGtF1_yv8UoDuk5eig2K',
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 16
    });
    var center = map.getCenter();
    var pin = new Microsoft.Maps.Pushpin(center, {
                title: 'Didnt find anything',
                subTitle: 'Try another address or setting',
                text: '1'
        });

        //Add the pushpin to the map
        map.entities.push(pin);
        console.log('maps path1')


    } else if (pubLat !== 0) {
        var map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'AlQbAewbI0bIGV8Doq5Byi0P--YD5N6hvoUHDMvY5IsjrGtF1_yv8UoDuk5eig2K',
            center: new Microsoft.Maps.Location(pubLat, pubLon),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 16
        });
        var center = map.getCenter();
        var pin = new Microsoft.Maps.Pushpin(center, {
                title: pubName,
                subTitle: pubAddress,
                text: '1'
            });

            //Add the pushpin to the map
            map.entities.push(pin);
            console.log('maps path2')


    } else {
        var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AlQbAewbI0bIGV8Doq5Byi0P--YD5N6hvoUHDMvY5IsjrGtF1_yv8UoDuk5eig2K',
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 16
    });
    var center = map.getCenter();
    var pin = new Microsoft.Maps.Pushpin(center, {
            text: '1',
        });

        //Add the pushpin to the map
        map.entities.push(pin);
        console.log('maps path3')


} }

function getAddress() {
    let path = 0
    address = document.getElementsByName("Address")[0].value;

    try {
        if (argSelect.id == true && address == true) {
            path = 1;                       // check if button and address exist. if so, approve if path below
        }
    } catch(err) {
        path = 0;
    }

    if (select !== 'none' && address !== '') {
        console.log('path1')
        value = document.getElementsByClassName("pricing selected")[0].getAttribute("id");
        window.location = 'http://www.therewecode.com/drinkboiii/' + address + "/" + value
    } else if (path > 0) {
        console.log ('here')
            if (argSelect.id > 0 && address !== '') {
                console.log('path2')
                value = document.getElementsByClassName("pricing selected")[0].getAttribute;
                window.location = 'http://www.therewecode.com/drinkboiii/' + address + "/" + argSelect.id
                };
    } else {
        console.log('path3')
        window.location = 'http://www.therewecode.com/drinkboiii/' + address
    }
}

pricing = document.getElementsByClassName("pricing")

for (var price of pricing) {
    price.addEventListener('click', changeColor)
}

// Event listeners for pricing selectors

function changeColor() {
    if (select !== 'none') {
        try {
            argSelect.className = "pricing";
        } catch(err) {
        }
    } else if (argSelect !== 0 && argSelect !== null ) {
        argSelect.className = "pricing";
    }
    var buttonSelected = document.getElementsByClassName("pricing");
    for (let buttonSelect of buttonSelected) {
        buttonSelect.className = "pricing"
    }
    this.className += " selected";
    select = document.getElementsByClassName("selected")[0]

}

try {
    parent = document.getElementById("results");
    for (let pubitem of myList["jam"]) {
        var item = document.createElement("div")
        item.innerText = pubitem["name"];
        item.className = "bar";
        if (item.innerText == pubName) {
            console.log('true')
            item.className += " selectedBar";
        }
        item.addEventListener('click', addNewPin)
        parent.appendChild(item)


    }} catch(err) {
        console.log(err);
    }

function addNewPin() {
    for (let child of parent.children) {
        child.className = "bar"
    }
    this.className += " selectedBar";
    let newTitle = this.innerText;
    var selectedBarClass = this;
    for (let clickedBar of myList["jam"]) {
        console.log('first scope')
        if (clickedBar["name"] == newTitle) {
            console.log('second scope')
            newLat = clickedBar['coordinates']['latitude'];
            newLon = clickedBar['coordinates']['longitude'];
            newAddr = clickedBar['location']['address1'];
        }
    }
        var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AlQbAewbI0bIGV8Doq5Byi0P--YD5N6hvoUHDMvY5IsjrGtF1_yv8UoDuk5eig2K',
        center: new Microsoft.Maps.Location(newLat, newLon),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 16
    });
    var center = map.getCenter();
    var pin = new Microsoft.Maps.Pushpin(center, {
            title: newTitle,
            subTitle: newAddr,
            text: '1',
        });

        //Add the pushpin to the map
        map.entities.push(pin);
        console.log('maps path3')

}

