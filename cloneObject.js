//jquery to clone object

var thing = {thingName: "Koolio", thingAge: 30};

var newThing = $.extend(true, {}, thing);
newThing.thingName = "Kandianne";

console.log(newThing);
console.log(thing);