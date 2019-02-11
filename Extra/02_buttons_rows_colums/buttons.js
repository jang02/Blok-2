for (let i = 0; i < 4; i++){
    $("<div/>", {}).attr("id", "rij" + (i+1)).addClass("rij").appendTo("#container");
    for(let j = 0; j < 5; j++){
        $("<button/>", {onclick: "alert(\'Ik zit in rij " + (i+1) +" op positie " + (j+1)+ "\')"}).attr("id", "rij" + (i+1) + "button" + (j+1)).html("button" + (j+1)).addClass("button").prependTo("#" + "rij" + (i+1));
    }
}