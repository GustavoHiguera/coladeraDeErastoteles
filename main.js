    let number=1000;
    let array=[];
    let newArray=[];
    for(let i=1; i<=number+1; i++){
        array.push[i];
    }

    for(let j=0; j<=number; j++){
        array[j]= true;
    }

    array[0]=false;
    for(let k=2; k<=number; k++){
        if(array[k]==true){
            for(let l=2; l*k<=number; l++){
                array[k*l]=0;
            }
        }
    }

    for(let i=0; i<array.length; i++){
        if(array[i]==true){
            newArray.push(i);
        }
    }
    
    console.log(newArray);

   

