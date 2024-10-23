let menuObject = {
    drinksList : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entreesList : [
    "Hamburger w/ Fries",
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
     "Veggie Plate"
    ],
    dessertsList: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };

    for(key in menuObject){
        let list = menuObject[key]
        console.log(key.toUpperCase(), list.length)
        let i = 0;
        // console.log(list[0])
        // console.log(list)
        // for(let i = 0; i < list.length; i++){
        //     const text = list[i];
        //     console.log("\t", i, text)
        // }

        for(text of list){
            console.log("\t", i, text);
            i++;
        }
    }