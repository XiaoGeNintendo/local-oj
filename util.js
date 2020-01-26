
/**
 * The input protocol for display
 * @param {Problem} p 
 * @param {List} inp 
 */
function getProtocol(p,inp){
    var x=p.inp.split("#");
    var ans="";
    for(var i=0;i<x.length;i++){
        ans+=x[i];
        if(i!=x.length-1){
            ans+=JSON.stringify(inp[i]);
        }
    }

    return ans;
}

/**
 * Returns the colored version of given text 
 */
function color(col,txt){
    return '<font color="'+col+'">'+txt+'</font>';
}

/**
 * Returns font awesome code
 * @param {String} txt 
 */
function fontAws(txt){
    return '<i class="fa fa-'+txt+'"></i>';
}
