!DOCTYPE html> 
<html lang="en"> 
 
<head> 
    <title>Operator Bitwise</title> 
</head> 
 
<body> 
 
    <script> 
        var x = 4; 
        var y = 3; 
 
        // operator bitwise and 
        var hasil = x & y; 
        document.write(`${x} & ${y} = ${hasil}<br/>`); 
 
        // operator bitwise or 
        var hasil = x | y; 
        document.write(`${x} | ${y} = ${hasil}<br/>`); 
 
        // operator bitwise xor 
        var hasil = x ^ y; 
        document.write(`${x} ^ ${y} = ${hasil}<br/>`); 
 
        // operator negasi 
        var hasil = ~x; 
        document.write(`~${x} = ${hasil}<br/>`); 
         
        // operator bitwise right shift >> 
        var hasil = x >> y; 
        document.write(`${x} >> ${y} = ${hasil}<br/>`); 
 
        // operator bitwise right shift << 
        var hasil = x << y; 
 
21 
        document.write(`${x} << ${y} = ${hasil}<br/>`); 
 
        // operator bitwise right shift (unsigned) >>> 
        var hasil = x >>> y; 
        document.write(`${x} >>> ${y} = ${hasil}<br/>`); 
 
    </script> 
</body> 
 
</html>