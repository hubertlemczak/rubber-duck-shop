const data = [
    {
        id: "skyrim",
        name: "Skyrim Rubber Duck",
        src: "./img/skyrim-duck.jpg",
        price: "£14.28",
        rating: 4.8,
        about: "The Last Dragonborn has the soul of a dragon, and the body of a duck! Traverse the world and explore the mountains, fields, and villages of Skyrim with the Elder Scrolls range of TUBBZ, the collectable duck figurines."
    },
    {
        id: "action",
        name: "Action Man Rubber Duck",
        src: "./img/action-man-duck.jpg",
        price: "£7.49",
        rating: 3.6,
        about: "Action Man Rubber Duck - Rubber Ducky Bath Toy - Officially Licensed Limited Edition Merchandise."
    },
    {
        id: "lizzie",
        name: "Queen Elizabeth Rubber Duck",
        src: "./img/lizzie-duck.jpg",
        price: "£8.99",
        rating: 4.5,
        about: "A royal rubber duck, dressed to look like Queen Elizabeth II."
    },
    {
        id: "pirate",
        name: "Pirate Rubber Duck",
        src: "./img/pirate-duck.jpg",
        price: "£8.50",
        rating: 4.5,
        about: "Great gift for that pirate fan. Add it to a voucher? Secret Santa, Birthday, Christmas PLEASE NOTE SOME DUCK DO NOT FLOAT UPRIGHT WITHOUT A BALANCE WEIGHT."
    },
    {
        id: "gandalf",
        name: "Gandalf Rubber Duck",
        src: "./img/gandalf-duck.jpg",
        price: "£16.42",
        rating: 4.7,
        about: "OFFICIAL LORD OF THE RINGS MERCH: Set off on a journey across the world to obtain the greatest collectable in all of Middle-earth – TUBBZ, the collectable cosplaying duck figurines! Gandalf the Grey leads the way to cross the pond under the watchful eye of Sauron."
    },
    {
        id: "batman",
        name: "Batman Rubber Duck",
        src: "./img/batman-duck.jpg",
        price: "£9.99",
        rating: 3.7,
        about: "Bath toy: Here is a funny twist on the classic yellow rubber duckie. The Batman duck looks just like the Caped Crusader, which means he’s always ready to fight grime at bathtime."
    },
    {
        id: "spiderman",
        name: "Spider-Man Rubber Duck",
        src: "./img/spiderman-duck.jpg",
        price: "£6.99",
        rating: 3.6,
        about: "Floating bath toy teaches hand-eye coordination and enjoyment. Fun colors and shapes stimulate the senses."
    },
    {
        id: "graduate",
        name: "Graduate Rubber Duck",
        src: "./img/graduate-duck.jpg",
        price: "£8.99",
        rating: 4.6,
        about: "Perfect little fun gift on their graduation/passing exams."
    },
    {
        id: "unionjack",
        name: "Union Jack Rubber Duck",
        src: "./img/uk-duck.jpg",
        price: "£9.76",
        rating: 5,
        about: "The rubber duck is made of vinyl - latex-free."
    },
    {
        id: "vader",
        name: "Darth Vader Rubber Duck",
        src: "./img/vader-duck.jpg",
        price: "£13.99",
        rating: 5,
        about: "Young fans of the Star Wars movies can imagine conquering the galaxy with this Darth Vader rubber duck."
    },
    {
        id: "policeman",
        name: "London Policeman Rubber Duck",
        src: "./img/police-duck.jpg",
        price: "£8.50",
        rating: 5,
        about: "Great gift for that rubber duck fan. Add it to a voucher? Secret Santa, Birthday, Christmas PLEASE NOTE SOME DUCK DO NOT FLOAT UPRIGHT WITHOUT A BALANCE WEIGHT."
    },
    {
        id: "shakespeare",
        name: "Shakespeare Rubber Duck",
        src: "./img/shakespeare-duck.jpg",
        price: "£10.99",
        rating: 4.6,
        about: "This rubber duck is ideal for use by both children and adults."
    },
    {
        id: "tarantula",
        name: "Tarantula Rubber Duck",
        src: "./img/tarantula-duck.jpg",
        price: "£6.13",
        rating: 4.5,
        about: "Wild Republic rubber ducks are wildly and highly detailed. They are great fun for bath and pool play. These ducks do float."
    },
    {
        id: "zebra",
        name: "Zebra Rubber Duck",
        src: "./img/zebra-duck.jpg",
        price: "£5.75",
        rating: 4.7,
        about: "Great value: Get your stripes on with this awesome and so much fun Zebra rubber Duck from Wild Republic."
    },
    {
        id: "liberty",
        name: "Statue of Liberty Rubber Duck",
        src: "./img/liberty-duck.jpg",
        price: "£11.69",
        rating: 3.5,
        about: "With a light squeaker - does not float upright."
    },
    {
        id: "flamingo",
        name: "Flamingo Rubber Duck",
        src: "./img/flamingo-duck.jpg",
        price: "£7.00",
        rating: 4.3,
        about: "Don’t duck from this LED colour-changing flamingo."
    },
    {
        id: "birthday",
        name: "Birthday Rubber Duck",
        src: "./img/birthday-duck.jpg",
        price: "£12.05",
        rating: 4.4,
        about: "Ideal for birthdays."
    },
    {
        id: "shower",
        name: "Shower Rubber Duck",
        src: "./img/shower-duck.jpg",
        price: "£4.39",
        rating: 4.6,
        about: "Rubber duck in the shower."
    },
    {
        id: "french",
        name: "French Rubber Duck",
        src: "./img/french-duck.jpg",
        price: "£8.99",
        rating: 3.6,
        about: 'All of our squeaky ducks have a "squeaky hole", which also comes out a more or less audible squeaky sound.'
    },
    {
        id: "dustin",
        name: "Dustin Henderson Rubber Duck",
        src: "./img/dustin-duck.jpg",
        price: "£14.99",
        rating: 5,
        about: 'Dustin Henderson is a vital member of The Party; loyal protector and mediator of the group, it’s no surprise his presence is a big part of the glue that holds them together.'
    },
    {
        id: "hockey",
        name: "Ice Hockey Rubber Duck",
        src: "./img/hockey-duck.jpg",
        price: "£10.96",
        rating: 4.7,
        about: "The secret of our sympathy wearers is the absolute commitment to bath ducks and over 15 years of experience. Our mission: Put a smile on everyone's face."
    },
    {
        id: "boleyn",
        name: "Anne Boleyn Rubber Duck",
        src: "./img/boleyn-duck.jpg",
        price: "£10.99",
        rating: 4.9,
        about: "Note: If bath water gets into the bath duck, we recommend rinsing the squeaky duck several times after use. Then squeeze out the water by squeezing it firmly. Then dry the squeaky duck."
    },
    {
        id: "bigben",
        name: "Big Ben Rubber Duck",
        src: "./img/bigben-duck.jpg",
        price: "£8.40",
        rating: 2.4,
        about: "Whether as a small gift, as a souvenir for children or as a holiday souvenir – with many a real bath duck collecting fibre has broken out, so that our squeaky ducks now fill numerous bathrooms, parcel shelves, shop windows and shelves."
    },
    {
        id: "joey",
        name: "Joey Tribbiani Rubber Duck",
        src: "./img/joey-duck.jpg",
        price: "£18.73",
        rating: 4.7,
        about: "It’s everyone’s favourite food-loving, Italian stallion of New York who’s off trying to womanize every lady in Central Perk, although he’s a duck this time round."
    },
]
