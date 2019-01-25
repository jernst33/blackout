$(document).ready(function(){

    var generateWeapons = false;
    var generateArmor = false;
    var generateEquipment = false;
    var generateVehicles = false;
    var generateMeds = false;
    var generateDrop = false;
    var generateSpecial = false;

    var weapons = ["Snipers only!",
                   "Assault rifles only!",
                   "Tactical rifles only!",
                   "Secondaries only!",
                   "Equipment only! You may also use a bowie knife.",
                   "Any weapon!"];

    var armor = ["Level 1 only!",
                 "Level 2 only!",
                 "Level 3 only!",
                 "Any armor!",
                 "No armor! Good luck!",
                 "Only armor that you find on dead enemies (or teammates)."];

    var equipment = ["No equipment!",
                     "Any equipment!",
                     "Only grenades (molotovs count).",
                     "Only concussions and smoke grenades!",
                     "Only the combat axe!"];

    var vehicles = ["No equipment!",
                    "Any equipment!",
                    "Only grenades (molotovs count).",
                    "Only concussions and smoke grenades!",
                    "Only the combat axe!"];

    var meds = ["No equipment!",
                "Any equipment!",
                "Only grenades (molotovs count).",
                "Only concussions and smoke grenades!",
                "Only the combat axe!"];

    var dropsLetters = ["A","B","C","D","E","F","G","H"];
    var dropsNumbers = ["1","2","3","4","5","6","7","8"];

    var special = ["No equipment!",
                         "Any equipment!",
                         "Only grenades (molotovs count).",
                         "Only concussions and smoke grenades!",
                         "Only the combat axe!"];

    $("button").click(function(){

    $("div.generated").empty();


    if ($("input.weapons").prop('checked')) { 
        generateWeapons = true;
    } else { 
        generateWeapons = false;
    }
    if ($("input.armor").prop('checked')) { 
        generateArmor = true;
    } else { 
        generateArmor = false;
    }
    if ($("input.equipment").prop('checked')) { 
        generateEquipment = true;
    } else { 
        generateEquipment = false;
    }
    if ($("input.vehicles").prop('checked')) { 
        generateVehicles = true;
    } else { 
        generateVehicles = false;
    }
    if ($("input.meds").prop('checked')) { 
        generateMeds = true;
    } else { 
        generateMeds = false;
    }
    if ($("input.drop").prop('checked')) { 
        generateDrop = true;
    } else { 
        generateDrop = false;
    }
    if ($("input.special").prop('checked')) { 
        generateSpecial = true;
    } else { 
        generateSpecial = false;
    }
    if (generateWeapons) { 
        $("div.generated").append('<h2 class="generated">Weapons</h2>');
        $("div.generated").append('<p class="generated">' + weapons[Math.floor(Math.random()*weapons.length)] + "</p>");
    }
    if (generateArmor) { 
        $("div.generated").append('<h2 class="generated">Armor</h2>');
        $("div.generated").append('<p class="generated">' + armor[Math.floor(Math.random()*armor.length)] + "</p>");
    }
    if (generateEquipment) { 
        $("div.generated").append('<h2 class="generated">Equipment</h2>');
        $("div.generated").append('<p class="generated">' + equipment[Math.floor(Math.random()*equipment.length)] + "</p>");
    }
    if (generateVehicles) { 
        $("div.generated").append('<h2 class="generated">Vehicles</h2>');
        $("div.generated").append('<p class="generated">' + vehicles[Math.floor(Math.random()*vehicles.length)] + "</p>");
    }
    if (generateMeds) { 
        $("div.generated").append('<h2 class="generated">Meds</h2>');
        $("div.generated").append('<p class="generated">' + meds[Math.floor(Math.random()*meds.length)] + "</p>");
    }
    if (generateDrop) { 
        $("div.generated").append('<h2 class="generated">Drop</h2>');
        $("div.generated").append('<p class="generated">' + dropsLetters[Math.floor(Math.random()*dropsLetters.length)] + dropsNumbers[Math.floor(Math.random()*dropsNumbers.length)] +  "</p>");
    }
    if (generateSpecial) { 
        $("div.generated").append('<h2 class="generated">Special Challenge</h2>');
        $("div.generated").append('<p class="generated">' + special[Math.floor(Math.random()*special.length)] + "</p>");
    }
  });






/*
  $("button").click(function(){
    if ($("input.weapons").prop('checked')) { 
        alert("Weapons checked!!");
    } else { 
        alert("Weapons not checked!!");
    }

    if ($("input.armor").prop('checked')) { 
        alert("Armor checked!!");
    } else { 
        alert("Armor not checked!!");
    }

    if ($("input.equipment").prop('checked')) { 
        alert("Equipment checked!!");
    } else { 
        alert("Equipment not checked!!");
    }

    if ($("input.vehicles").prop('checked')) { 
        alert("Vehicles checked!!");
    } else { 
        alert("Vehicles not checked!!");
    }

    if ($("input.meds").prop('checked')) { 
        alert("Meds checked!!");
    } else { 
        alert("Meds not checked!!");
    }

    if ($("input.drop").prop('checked')) { 
        alert("Drop checked!!");
    } else { 
        alert("Drop not checked!!");
    }

    if ($("input.special").prop('checked')) { 
        alert("Special challenge checked!!");
    } else { 
        alert("Special challenge not checked!!");
    }
  });
*/
});