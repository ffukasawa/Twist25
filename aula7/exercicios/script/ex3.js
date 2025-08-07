let a = parseInt(prompt('entre com um valor para o a: '));
let b = parseInt(prompt('entre com um valor para o b: '));
let c = parseInt(prompt('entre com um valor para o c: '));
let calc1 = ((b*-1) + ((b**2 )- (4*a*c)) **0.5) / (2*a);
let calc2 = ((b* -1) - ((b**2) - (4*a*c))**0.5)/(2*a);

alert('As raízes da equação são: ' +calc1+ ', '+calc2);