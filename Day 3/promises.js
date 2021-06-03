var mypromise = new Promise(function(resolve,reject){
    const a=100;
    const b=60;
    if(a==b){
        resolve();
    }else{
        reject();
    }
});

mypromise.
    then(function(){
        console.log(" Successful" );
    }).
    catch(function(){
        console.log(" Error occurred ");
    })
