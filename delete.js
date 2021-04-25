let array=[1,2,3,4,5,6,4,5,6,7,7,8,9]
for(var i=0;i<array.length;i++)
{
    for(var j=i+1;j<array.length;j++)
    {
       if(array[i]==array[j])
       {
           array.splice(j,1)
       }
    }
}
console.log("After deletion Duplication:  "+array);