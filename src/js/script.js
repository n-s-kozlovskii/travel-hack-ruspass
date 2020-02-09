mapboxgl.accessToken = "pk.eyJ1Ijoia3JsdiIsImEiOiJjajZleXVjc3QwbjZlMzNvNHU5amtxc3diIn0.TGKbFfXD2F-vmNC4dzRLnA";
var map = new mapboxgl.Map({
    container: "mapBox",
    style: 'mapbox://styles/krlv/ck5xx9gj37bl31iqxd2zlnh7q',
    sprite: "mapbox://sprites/krlv/ck5xx9gj37bl31iqxd2zlnh7q/8k3u7tiuqba20bvbbg9nda31l",
    zoom: 10,
    center: [37.655, 55.754]
});

map.on("load", function() {
    addMapData();
    //layerControls();
    //checkboxControls();
    //addPopups()
    //addTools();
});



function addMapData() {
    addMapSources();
    addMapLayers();
    layerFilters();
}

function addMapSources() {

    const mapbox_source = {
        type: "vector",
        url: "mapbox://krlv.6k6382o8"
    };
    map.addSource("mapbox_source", mapbox_source);
}

function addMapLayers() {

    const id = 'test_lines-ayk1jj';

    const route_layer = {
        'id': id,
        'type': 'line',
        'source': 'mapbox_source',
        'source-layer': id,
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    }

    map.addLayer(route_layer);

};

function layerFilters() {

    var sex = document.getElementById("sex");

    sex.addEventListener("change", function() {
        if (sex.value == "Мужчина")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'sex', 1]);
        }
        else if (sex.value == "Женщина")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'sex', 2]);
        }
        else
        {
            map.setFilter('test_lines-ayk1jj', null);
        }

    });

    var age = document.getElementById("age");
    age.addEventListener("change", function() {
        if (age.value == "меньше 18")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'age', 1]);
        }
        else if (age.value == "18-25")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'age', 2]);
        }
        else if (age.value == "26-40")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'age', 3]);
        }
        else if (age.value == "40-55")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'age', 4]);
        }
        else
        {
            map.setFilter('test_lines-ayk1jj', null);
        }
    });

    var group = document.getElementById("group");
    group.addEventListener("change", function() {
        if (group.value == "Один")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'group', 1]);
        }
        else if (group.value == "1 - 3 человека")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'group', 2]);
        }
        else if (group.value == "4 - 8 человек")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'group', 3]);
        }
        else if (group.value == "9 - 15 человек")
        {
            map.setFilter('test_lines-ayk1jj', ['==', 'group', 4]);
        }
    });

}

