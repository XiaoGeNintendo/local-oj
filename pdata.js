var problems=[
    {
        name:"A+B Problem",
        statement:`You are given two integers A and B within range of 10. Add them. <br/>
        Formally, you need to implement a function add(a,b) in Javascript. <br/>
        The function should return an integer c and c=a+b <br/>`,
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
    }
]
