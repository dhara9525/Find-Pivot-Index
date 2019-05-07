// Simple iterative javascript solution, faster than 20.35% of JavaScript online submissions for Find Pivot Index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) 
{
    var i=0, length= nums.length, defaultRet=-1;
    if(!nums || length>10000)
        return defaultRet;
    
    while(i<length)
    {
        var sum1=0, sum2=0;
        for(var j=0; j<i; j++)
        {
            sum1+=nums[j];
        }
        
        for(var k=length-1; k>i; k--)
        {
            sum2+=nums[k];
        }
        if(sum1 == sum2)
        {
            defaultRet= i;
            return defaultRet;
        }
        i++;
    }
    return defaultRet;
};