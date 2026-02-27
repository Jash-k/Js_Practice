
function qtyouter()
{
    let val = 0;
    function qtyinner(type)
    {
        if(type == 'add')
        {
            return ++val;
        }
        else if (type == 'sub' && val > 0)
        {
            return --val;
        }
        else
        {
            return 0;
        }
    }
    return qtyinner;
}

const qtyop = qtyouter();

console.log(qty('add'));
console.log(qty('add'));
console.log(qty('add'));
  

function qty(type)
{
    let res = qtyop(type);

    let value = document.getElementById('qs')
    value.textContent = res;
}