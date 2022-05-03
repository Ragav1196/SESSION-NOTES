let input = document.querySelector(".countdown");
    setTimeout(()=>{
        input.innerText = "10";
        setTimeout(()=>{
            input.innerText = "9";
            setTimeout(()=>{
                input.innerText = "8";
                setTimeout(()=>{
                    input.innerText = "7";
                    setTimeout(()=>{
                        input.innerText = "6";
                        setTimeout(()=>{
                            input.innerText = "5";
                            setTimeout(()=>{
                                input.innerText = "4";
                                setTimeout(()=>{
                                    input.innerText = "3";
                                    setTimeout(()=>{
                                        input.innerText = "2";
                                        setTimeout(()=>{
                                            input.innerText = "1";
                                            setTimeout(()=>{
                                                input.innerText = "HAPPY INDEPENDENCE DAY";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
    console.log("RGAAAAV")