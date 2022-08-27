var obj1={name:"Person1",age:5};
var obj2={age:5,name:"Person1"};
var h=true;

for (const k in obj1) {
    if (obj1[k]!==obj2[k]) {
         h=false;
    }
}
console.log(h);
 if(h==true){                            
    console.log('the values are same');
 }  
 else
 console.log('NOt same');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
