// Basically, so far, whatever he taught. I know. Planning to do a SCHOOL PORTAL CLONE (without actual login duh);
//So yea. 
//Date -- Time -- Place: 27/12/2021 -- 15:53 -- Datatypes

//Code Piece 1: Takes the H1 on the HTML page and tells the length;

    let heyThereSelector = document.querySelector('.h1')
    let heyThere = heyThereSelector.innerText;

    console.log(heyThere.length);
//Code Piece 1 ends here ------------>

//Code Piece 2: Objects:
    let fruits = {
        first: 'Ameen',
        last: 'Ahmed',
        phoneNo: '0568685722',
    }

    console.log(fruits.phoneNo.indexOf(2)); //IndexOf: finds the index in a particular word.'
    console.log(fruits.first.slice(1, 6)); //Slice: takes 2 params: start and end. prints that much only.
    console.log(fruits.first.replace('Am', 'Dum')); //Replaces things
    console.log(fruits.last.charAt(2)); //Finds the character at that index.
    console.log(fruits.last[2]); //Does the same thing 😆.

//Code Piece 2 ends here ------------>

    //Code Piece 3: Arrays, create the same array 2 times in different ways:
    let arrayNo1 = ['ameen', 'ahmed', 'alina', 'idiot'];
    let arrayNo2 = new Array('ameen', 'ahmed', 'alina', 'idiot');

    console.log(arrayNo1) // Both are the same arrays
    console.log(arrayNo2)

//Code Piece 3 ends here ------------>

//Code Piece 4: Iterate through an array's contents with 'for' command:
    for (let i = 0; i < arrayNo1.length; i++) {
        console.log(arrayNo1[i])
    }

    console.log('converting arrayNo1 to string. the result:', arrayNo1.toString());
    console.log('joining. gives content in heyphens the result:', arrayNo1.join(' - '));
    console.log(arrayNo1.pop(), arrayNo1); // Pops off the last item in the array
    console.log(arrayNo1.push('dum'), arrayNo1); // Pushes in a new item in the array
    arrayNo1[4] = 'bruh'; //Another way of pushing.
    console.log(arrayNo1);
    console.log(arrayNo1.shift()) //Removes the 1st element of the array 😎.
    console.log(arrayNo1.slice(1, 4)); // Slices the array at that index.

    //.sort() sorts some numbers in an array.
    /*How to sort in ascending and descending order: 
        let array = [5, 10, 515, 1, 53, 21, 2, 125];

        console.log(array.sort(function(a, b) { return a-b})) //This is for ascending order
        console.log(array.sort(function(a, b) { return b-a})) //This is for descending order
    */

//Code Piece 4 ends here ------------>

//Code Piece 5: Adding elements to an empty array using 'for' loops:
    let emptyArray = new Array();
    for (let num = 0; num <= 10; num++) {
        emptyArray.push(num)
        console.log(emptyArray)
    }

//Code Piece 5 ends here ------------>

//Code Piece 6: Objects:
    let object = { 
        firstName: 'Ameen', 
        lastName: 'Ahmed', 
        phoneNumber: '0568685722', 
        lovesWhichFood: ['Gobi Manchurian', 'Fried Rice', 'Burger and Fries'],
        myInfo: function() {
            return this.firstName + '\n' + this.lastName;
        }
    }

    console.log(object.lovesWhichFood[2]);
    console.log(object.myInfo());

//Code Piece 6 ends here ------------>

//Code Piece 7: If else and switch statements:
    let age = 12;

    function targetDemographic() {
        if ((age >= 18) && (age <= 32)) {
            status = 'target demo'
            return status;
        } else {
            status = 'not my audience'
            return status;
        }
    }

    console.log(targetDemographic());

    //Challenge 7.1: Differentiate between weekend and weekday (use switch);
    function weekdayVsWeekend(option) {
        var day = '';
        switch (option) {
            case "sunday":
            case "saturday":
                day = 'weekend';
                break;
            case 'monday':
            case 'tuesday':
            case 'thursday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                day = 'weekday';
                break;
            default:
                day = 'enter a day u idiot';
        }
        return day;
    }

    console.log(weekdayVsWeekend('tuesday'))

//Code Piece 7 ends here ------------>