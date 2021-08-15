// Well I still don't get it. I already had 2 choco bars (chocu mucho) and still nothing comes out of my weeny brain
//Perhaps its purpose is for you to share the prototypes to your variable and that's it.
//Well according to Google: The Object.create() method creates a new object, using an existing object as the prototype of the newly created object
// Okay Object create based on the internet, what basically it does is it enables you to inherit the previous Object's properties to the newly made variable that will be automatically turned to object also. 

const protos = {
  getName: function () {
    console.log(this.name);
  },
  getAge: function () {
    console.log(this.age);
  },
};

const human = Object.create(protos);
human.age = 18;
human.name = "Nanimo";
human.getAge();
human.getName();

