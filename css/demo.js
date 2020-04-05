

console.log(event);
var click = document.querySelector(".click");

click.addEventListener('click',function(){
   
    
    var ed='',b=[],encrypted,a;
   
  a=document.querySelector('input').value;
  

for(var i=0;i<a.length;i++){
    b.push(a[i]);
}


encrypted=function(a){
    
    for(var i=0;i<a.length;i++){
        if(a[i]=='a'||a[i]=='A'){
             //empt.push('1');
            ed+='1';
        }
        else if(a[i]=='b'||a[i]=='B'){
             //empt.push('2');
            ed+='2';
        }
        else if(a[i]=='c'||a[i]=='C'){
            ed+='3';
        }
        else if(a[i]=='d'||a[i]=='D'){
            ed+='4';
        }
        else if(a[i]=='e'||a[i]=='E'){
            ed+='5';
        }
        else if(a[i]=='f'||a[i]=='F'){
            ed+='6';
        }
        else if(a[i]=='g'||a[i]=='G'){
            ed+='7';
        }
        else if(a[i]=='h'||a[i]=='H'){
            ed+='8';
        }
        else if(a[i]=='i'||a[i]=='I'){
            ed+='9';
        }
        else if(a[i]=='j'||a[i]=='J'){
            ed+='*';
        }
        else if(a[i]=='k'||a[i]=='K'){
            ed+='#';
        }
        else if(a[i]=='l'||a[i]=='L'){
            ed+='!';
        }
        else if(a[i]=='m'||a[i]=='M'){
            ed+='`';
        }
        else if(a[i]=='n'||a[i]=='N'){
            ed+='~';
        }
        else if(a[i]=='o'||a[i]=='O'){
            ed+='@';
        }
        else if(a[i]=='p'||a[i]=='P'){
            ed+='$';
        }
        else if(a[i]=='q'||a[i]=='Q'){
            ed+='%';
        }
        else if(a[i]=='r'||a[i]=='R'){
            ed+='^';
        }
        else if(a[i]=='s'||a[i]=='S'){
            ed+='&';
        }
        else if(a[i]=='t'||a[i]=='T'){
            ed+='(';
        }
        else if(a[i]=='u'||a[i]=='U'){
            ed+=')';
        }
        else if(a[i]=='v'||a[i]=='V'){
            ed+='-';
        }
        else if(a[i]=='w'||a[i]=='W'){
            //empt.push('23');
            ed+='>';
        }
        else if(a[i]=='x'||a[i]=='X'){
            ed+='+';
        }
        else if(a[i]=='y' ||a[i]=='Y'){
            ed+='=';
        }
        else if(a[i]=='z' ||a[i]=='Z'){
            ed+='{';
        }
        else if(a[i]=='0'){
            ed+='}';
        }
        else if(a[i]=='}'){
            ed+='0';
        }
        else if(a[i]=='1'){
            //ed+='[';
            ed+='a';
        }
        else if(a[i]=='2'){
           // ed+=']';
           ed+='b';

        }
        else if(a[i]=='3'){
           // ed+='|';
           ed+='c';

        }
        else if(a[i]=='4'){
           // ed+=':';
           ed+='d';

        }
        else if(a[i]=='5'){
            //ed+=';';
            ed+='e';

        }
        else if(a[i]=='6'){
            //ed+='"';
            ed+='f';

        }
        else if(a[i]=='7'){
            //ed+='<';
            ed+='g';

        }
        else if(a[i]=='8'){
           // ed+='>';
           ed+='h';

        }
        else if(a[i]=='9'){
          //  ed+='?';
          ed+='i';

        }
        else if(a[i]=='*'){
            ed+='j';
        }
        else if(a[i]=='#'){
            ed+='k';
        }
        else if(a[i]=='!'){
            ed+='l';
        }
        else if(a[i]=='`'){
            ed+='m';
        }
        else if(a[i]=='~'){
            ed+='n';
        }
        else if(a[i]=='@'){
            ed+='o';
        }
        else if(a[i]=='$'){
            ed+='p';
        }
        else if(a[i]=='%'){
            ed+='q';
        }
        else if(a[i]=='^'){
            ed+='r';
        }
        else if(a[i]=='&'){
            ed+='s';
        }
        else if(a[i]=='('){
            ed+='t';
        }
        else if(a[i]==')'){
            ed+='u';
        }
        else if(a[i]=='-'){
            ed+='v';
        }
        else if(a[i]=='>'){
            ed+='w';
        }
        else if(a[i]=='+'){
            ed+='x';
        }
        else if(a[i]=='='){
            ed+='y';
        }
        else if(a[i]=='{'){
            ed+='z';
        }
       
        else if(!isNaN(a[i])){
            
            ed+="_";
          
        }
        else if(a[i]=='_'){
            
            ed+="_";
          
        }
        else if(a[i]=='.'){
            
            ed+=".";
          
        }
        else if(a[i]=='?'){
            
            ed+="?";
          
        }
        
        
    }
     
  
        document.querySelector('h2').textContent=ed; 
    
     
}
encrypted(b);
 
});


 



