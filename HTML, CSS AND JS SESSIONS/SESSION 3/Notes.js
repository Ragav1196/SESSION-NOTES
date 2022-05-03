// 1 - COERCION :
    // Coercion is the process of converting the data type.
    // Eg:
        {let a = 10;
        let b = "5";

        console.log("1 =>", a + b);//105
        console.log("1 =>", a - b);}//5

    // 1(1)
        console.log("1(1) =>", 10 + "5");//105
            // Here,
                // coercion happens as the “+” sign has a string beside it
                // “+” sign gives more important to concardination(adding two string) rather than mathematical addition.
                // So here the number “10” is automatically converted into string.
    
    // 1(2)
        console.log("1(2) =>", 2 + 10 + "5")//125
            // Here,
                // As there is no string besides the first “+” sign there addition happens.
                // Then the result of the addition will be concardinated to the string after that. 

    // 1(3)
        console.log("1(3) =>", "10" + 5 +  5)//1055
            // Here,
                // whatever the number presents after a string then the “+” sign will coerce everything to string and 
                    // concardinate them.

    // 1(4)
    console.log("1(4) =>", 10 - "5");//5
        // Here, 
            // “-” sign has only one job unlike the “+” sign which has two job concardination and addition ( “+” gives more 
                // important to the concardination rather than the mathematical addition)
            // so in this eg. The “-” sign coerce the string into number and do the subtraction operation


// 2 - MORE EXAMPLES FOR COERCION:
    let a = "10";
    let b = 2;
    let c = 5;
    let d = 10;
    let e = "RAGAV";
    // 2(1)
    console.log("2(1) =>",a + b);//102
        //concardination
    
    // 2(2)
    console.log("2(2) =>",a + b + c);//1025 
        //concardination; concardination
    
    // 2(3)
    console.log("2(3) =>",a - b);//8
        //subtration
    
    // 2(4)
    console.log("2(4) =>",a - b + c);//13 
        //subtraction; addition
    
    // 2(5)
    console.log("2(5) =>",a + b - c);//97
        //concartination; subtration
    
    // 2(6)
    console.log("2(6) =>",a + b - c + d);//107
        //concartination; subtration; addition
    
    // 2(7)
    console.log("2(7) =>",a + b + c - d + e); //1015RAGAV
        //concartination; concartination; subtration; concartination
    