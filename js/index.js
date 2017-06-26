var a = Number(prompt('Значення коефіціента "a"'));
var b = Number(prompt('Значення коефіціента "b"'));
var c = Number(prompt('Значення коефіціента "c"'));

document.write('a= ' + a +';');
document.write('b= ' + b +';');
document.write('c= ' + c +';');
document.write('<br>');

document.write('Рівння виду: ' + a + 'x <sup>2</sup> + ' + b + 'x +  ' + c);
document.write('<br>');

var result = quadraticEquation(a, b, c);
document.write('Розвязок рівняння:');
document.write(result);

function discruminant(a,b,c){
    var d = b*b-4*a*c;
    return d;
}

function quadraticEquation(a, b, c) {
    if (a === 0) {
        result = 'Введіть а відмінне від 0';
        return result;
    }
    var d = discruminant(a,b,c);
    if (d<0) {
        return 'Немає розвязків, дискримінант <0!'
    }
    if(d===0){
        document.write('Один корінь:')
        var x1= -b / (2 * a);
        return ' x1= ' + x1;
    }
    var x1= (-b + Math.sqrt(d)) / (2 * a);
    var x2= (-b - Math.sqrt(d)) / (2 * a);
    return 'x1= ' + x1 + '; x2= ' + x2;
}