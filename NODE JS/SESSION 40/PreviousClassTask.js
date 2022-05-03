// YESTERDAY TASK DONE BY MENTOR
    // things that we get from the "process.argv" is a array of string
    // so inorder to get an array from that string we need to convert it to array

    // DOUBT: 1
      // why "eval" method shouldnt be used

      console.log(process.argv)
    // TO CONVERT STRING TO ARRAY:
    const [, , nums] = process.argv;

    console.log(nums);
      // the ouptut will be string

    const arr = JSON.parse(nums);
      // this will convert the string into array

    console.log(arr)
      // DOUBT: 2
        // [1,2,3,4,5] is not working for me but working for mentor
        // BUT "[1,2,3,4,5]" but this one is working

    console.log(Math.max(...arr))

    