const calculateX = async (event) => {

    let arrayGroup = event.size;
    let values=[];
    
    var sum = 0;

    arrayGroup.forEach (function(arrayGroup){
        sum += arrayGroup;
    });
    
    const end=Math.floor(Math.sqrt(sum));
 
    for (let i=1; i<=end; i++) {

        if (sum%i==0) {
            values.push(i);
            if (i*i!=sum) {
                values.push(sum/i);
            }
        }

    }
    
    values.splice(0,1);

    
    const response = {
        statusCode: 200,
        body: JSON.stringify({ size : values.sort((a,b)=>a-b) }),
    };
    return response;
};

exports.handler = calculateX;
