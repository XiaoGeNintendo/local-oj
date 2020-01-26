/**
 * This is a worker for one single testcase
 */
importScripts("util.js","pdata.js")
// console.log("[W]Worker Init OK");

onmessage=function(e){
    
    var prog=e.data[0];
    var p=problems[e.data[1]];
    var id=e.data[2];

    // console.log("[W]Received Prog="+e.data[0]+" protocol="+e.data[1]);

    try {  
        var t2=prog+"\n"+getProtocol(p,p.tests[id]);
        var res=eval(t2);
        
        var che=p.checker(res,p.tests[id]);

        if(che[0]){
            postMessage([0,che[1]]);
        }else{
            postMessage([1,che[1]]);
        }
    } catch (error) {
        
        postMessage([2,error+""]);
    }
}