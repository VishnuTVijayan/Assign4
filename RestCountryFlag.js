const xyz= new XMLHttpRequest();
xyz.open('GET','https://restcountries.com/v2/all');
xyz.send(null);
xyz.onload=function(){
    const abc=JSON.parse(xyz.responseText);
    console.log(abc);

    for (const iterator of abc) {
        const {flag}=iterator;
        console.log(flag)
        
    }
}