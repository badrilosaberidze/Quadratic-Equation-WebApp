function isNumeric(x){
    if (x.length==0){
        return false;
    }
    return !isNaN(x);
}

function calculateRoots(){
    document.getElementById("a").style.backgroundColor="white";
    document.getElementById("b").style.backgroundColor="white";
    document.getElementById("c").style.backgroundColor="white";

    var A=document.getElementById("a").value;
    var B=document.getElementById("b").value;
    var C=document.getElementById("c").value;

    document.getElementById("root-desc1").style.display="flex";
    document.getElementById("root-desc2").style.display="flex";
    document.getElementById("root-val1").innerHTML="*";
    document.getElementById("root-val2").innerHTML="*"
    console.log(A);
    if (validation(A,B,C)){
        var D;
        D=B*B-(4*A*C);
        console.log(D);
        if (D>=0){
            D=Math.sqrt(D);
            console.log(D);
            document.getElementById("root-val1").innerHTML=(-B+D)/(2*A);
            document.getElementById("root-val2").innerHTML=(-B-D)/(2*A);   
        }else{
            document.getElementById("pop-up").style.display="flex";
        }
    }else{
        document.getElementById("root-desc1").style.display="none";
        document.getElementById("root-desc2").style.display="none";
        document.getElementById("root-val1").innerHTML="Wrong Char";
        document.getElementById("root-val2").innerHTML="In Red Box";
        if (!isNumeric(A)||A.length==0){
            document.getElementById("a").style.backgroundColor="red";
        }
        if (!isNumeric(B)||B.length==0){
            document.getElementById("b").style.backgroundColor="red";
        }
        if (!isNumeric(C)||C.length==0){
            document.getElementById("c").style.backgroundColor="red";
        }
    }
}

function validation(A,B,C){
    if (isNumeric(A)&&isNumeric(B)&&isNumeric(C)){
        return true;
    }else{
        return false;
    }
}

function closePopUp(){
    document.getElementById("pop-up").style.display="none";
}