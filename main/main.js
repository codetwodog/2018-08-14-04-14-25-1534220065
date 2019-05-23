module.exports = function main(number) {
    var n=1;
    var len=number.length;
    var  res="";
    var jcopy=0;
    while(n<=3){
        for (var i = 0; i <len; i++) {
            for ( j = (n-1)*3; j < n*3; j++) {
              //  console.log(type(number[i])[j]);
                res=res+type(number[i])[j];
                jcopy=j;
            }
            //console.log(" ");
            res=res+" ";
    }
   // console.log("\n");
   res=res.slice(0,-1);
   res=res+'\n';
    n++;
}
console.log('should return '+number);
return res;

};
function type(a){
    switch (a) {
        case '0':
            return "._.|.||_|";
        case '1':
            return ".....|..|";
            
        case '2':
            return "._.._||_.";
        
        case '3':
            return "._.._|._|";
            
        case '4':
            return "...|_|..|";
        
        case '5':
            return "._.|_.._|";
            
        case '6':
            return "._.|_.|_|";
            
        case '7':
            return "._...|..|";
            
        case '8':
            return "._.|_||_|";
        
        case '9':
            return "._.|_|..|";
          
            
        }
        return null;
    }

