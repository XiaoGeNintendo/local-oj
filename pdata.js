var problems=[
    {
        name:"A+B Problem",
        statement:`You are given two integers A and B within range of 10. Add them. <br/>
        Formally, you need to implement a function add(a,b) in Javascript. <br/>
        The function should return an integer c and c=a+b <br/>
        An example:
        <pre>
        function add(a,b){
            return a+b;
        }
        </pre>
        Try it by submitting it!`,
        inp:"add(#,#)",
        checker:function(ans,inp){
            if(ans==inp[0]+inp[1]){
                return [true,"Answer is indeed "+ans];
            }else{
                return [false,"Answer is not "+ans];
            }
        },
        tests:[
            [2,5],
            [0,0],
            [1,2],
            [2,3],
            [3,4],
            [0,10],
            [10,10]
        ],
        tl:1000,
        samples:[
            {
                in:[2,5],
                out:7
            },
            {
                in:[0,0],
                out:0
            }
        ]
    },
    {
        name:"A+B Problem 2",
        statement:`You are given an integer C, find two integers A and B so that A+B=C <br/>
        You need to return a list [A,B] so that A+B=C`,
        inp:"add(#)",
        checker:function(ans,inp){
            if(parseInt(ans[0])!=ans[0]){
                return [false,ans[0]+" is not an integer"];
            }
            if(parseInt(ans[1])!=ans[1]){
                return [false,ans[0]+" is not an integer"];
            }
            if(ans[0]+ans[1]==inp[0]){
                return [true,"Answer is indeed "+ans];
            }else{
                return [false,"Answer is not "+ans];
            }
        },
        tests:[
            [0],
            [1],
            [2],
            [3],
            [1234812312],
            [-12983238],
            [118293812932],
            [-1289321890471],
            [11278312798478921],
            [-18239127501278312]
        ],
        tl:1000,
        samples:[
            {
                in:[2],
                out:[1,1]
            },
            {
                in:[-1],
                out:[-2,1]
            }
        ]
    },
    {
        name:"Prime Quest",
        statement:`You are given an positive integer C(C<=1e9). Return true if C is a prime, false otherwise. <br/>
        You need to proceed many testcases. So you are given a list C[]. For each c in C[], check if it's a prime <br/>
        Returns a list containing your answers.`,
        inp:"isPrime(#)",
        checker:function(ans,inp){
            if(typeof(ans)!=typeof(inp[0])){
                return [false,"You must return a list not a "+typeof(ans)];
            }
            if(ans.length!=inp[0].length){
                return [false,"Length of list is incorrect:"+ans.length+" but expected "+inp.length];
            }

            for(var i=0;i<inp[0].length;i++){
                var chki=inp[0][i];
                var prime=(chki==1?false:true);
                for(var j=2;j*j<=chki;j++){
                    if(chki%j==0){
                        prime=false;
                        break;
                    }
                }

                if(ans[i]!=prime){
                    return [false,"Wrong answer for "+inp[0][i]+" "+prime+" expected but "+ans[i]+" is found"];
                }
            }

            return [true,inp[0].length+" numbers are checked"];
        },
        tests:[
            [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]],
            [[999983,998244353,998442353,998244535,1000000000,999999999,999999997,97,91,83,77,100,49]],
            [[]]
        ],
        tl:1000,
        samples:[
            {
                in:[[2,3,5,8]],
                out:[true,true,true,false]
            },
        ]
    }
]
