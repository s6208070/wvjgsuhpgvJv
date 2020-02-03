var is_eng = true;
function change_lan(){
    is_eng=!is_eng;
}
function get_lan(){
    if(is_eng) return "EN => TH";
    else return "TH => EN";
}
const disp = () => {
    var inpt = document.getElementById('q');
    var dispt = document.getElementById('dummy');
    var st = inpt.value;
    var retst = [];
    if(is_eng){
        for(var i = 0; i < st.length; i++){
            if(st[i] == 'q'){
                 retst.push('ๆ'); 
            }
            else if(st[i] == 'w'){
                 retst.push('ไ'); 
            }
            else if(st[i] == 'e'){
                 retst.push('ำ'); 
            }
            else if(st[i] == 'r'){
                 retst.push('พ'); 
            }
            else if(st[i] == 't'){
                 retst.push('ะ'); 
            }
            else if(st[i] == 'y'){
                 retst.push('ั'); 
            }
            else if(st[i] == 'u'){
                 retst.push('ี'); 
            }
            else if(st[i] == 'i'){
                 retst.push('ร'); 
            }
            else if(st[i] == 'o'){
                 retst.push('น'); 
            }
            else if(st[i] == 'p'){
                 retst.push('ย'); 
            }
            else if(st[i] == '['){
                 retst.push('บ'); 
            }
            else if(st[i] == ']'){
                 retst.push('ล'); 
            }
            else if(st[i] == '\\'){
                 retst.push('ฃ'); 
            }
            else if(st[i] == 'a'){
                 retst.push('ฟ'); 
            }
            else if(st[i] == 's'){
                 retst.push('ห'); 
            }
            else if(st[i] == 'd'){
                 retst.push('ก'); 
            }
            else if(st[i] == 'f'){
                 retst.push('ด'); 
            }
            else if(st[i] == 'g'){
                 retst.push('เ'); 
            }
            else if(st[i] == 'h'){
                 retst.push('้'); 
            }
            else if(st[i] == 'j'){
                 retst.push('่'); 
            }
            else if(st[i] == 'k'){
                 retst.push('า'); 
            }
            else if(st[i] == 'l'){
                 retst.push('ส'); 
            }
            else if(st[i] == ';'){
                 retst.push('ว'); 
            }
            else if(st[i] == '\''){
                 retst.push('ง'); 
            }
            else if(st[i] == 'z'){
                 retst.push('ผ'); 
            }
            else if(st[i] == 'x'){
                 retst.push('ป'); 
            }
            else if(st[i] == 'c'){
                 retst.push('แ'); 
            }
            else if(st[i] == 'v'){
                 retst.push('อ'); 
            }
            else if(st[i] == 'b'){
                 retst.push('ิ'); 
            }
            else if(st[i] == 'n'){
                 retst.push('ื'); 
            }
            else if(st[i] == 'm'){
                 retst.push('ท'); 
            }
            else if(st[i] == ','){
                 retst.push('ม'); 
            }
            else if(st[i] == '.'){
                 retst.push('ใ'); 
            }
            else if(st[i] == '/'){
                 retst.push('ฝ'); 
            }
            else if(st[i] == '1'){
                retst.push('ๅ'); 
            }
            else if(st[i] == '2'){
                retst.push('/'); 
            }
            else if(st[i] == '3'){
                retst.push('-'); 
            }
            else if(st[i] == '4'){
                retst.push('ภ'); 
            }
            else if(st[i] == '5'){
                retst.push('ถ'); 
            }
            else if(st[i] == '6'){
                retst.push('ุ'); 
            }
            else if(st[i] == '7'){
                retst.push('ึ'); 
            }
            else if(st[i] == '8'){
                retst.push('ค'); 
            }
            else if(st[i] == '9'){
                retst.push('ต'); 
            }
            else if(st[i] == '0'){
                retst.push('จ'); 
            }
            else if(st[i] == '-'){
                retst.push('ข'); 
            }
            else if(st[i] == '='){
                retst.push('ช'); 
            }
            else if(st[i] == ' '){
                retst.push(' ')
            }
            else if(st[i] == '!'){
                retst.push('+'); 
            }
            else if(st[i] == '@'){
                retst.push('๑'); 
            }
            else if(st[i] == '#'){
                retst.push('๒'); 
            }
            else if(st[i] == '$'){
                retst.push('๓'); 
            }
            else if(st[i] == '%'){
                retst.push('๔'); 
            }
            else if(st[i] == '^'){
                retst.push('ู'); 
            }
            else if(st[i] == '&'){
                retst.push('฿'); 
            }
            else if(st[i] == '*'){
                retst.push('๕'); 
            }
            else if(st[i] == '('){
                retst.push('๖'); 
            }
            else if(st[i] == ')'){
                retst.push('๗'); 
            }
            else if(st[i] == '_'){
                retst.push('๘'); 
            }
            else if(st[i] == '+'){
                retst.push('๙'); 
            }
            else if(st[i] == 'Q'){
                retst.push('๐'); 
            }
            else if(st[i] == 'W'){
                retst.push('"'); 
            }
            else if(st[i] == 'E'){
                retst.push('ฎ'); 
            }
            else if(st[i] == 'R'){
                retst.push('ฑ'); 
            }
            else if(st[i] == 'T'){
                retst.push('ธ'); 
            }
            else if(st[i] == 'Y'){
                retst.push('ํ'); 
            }
            else if(st[i] == 'U'){
                retst.push('๊'); 
            }
            else if(st[i] == 'I'){
                retst.push('ณ'); 
            }
            else if(st[i] == 'O'){
                retst.push('ฯ'); 
            }
            else if(st[i] == 'P'){
                retst.push('ญ'); 
            }
            else if(st[i] == '{'){
                retst.push('ฐ'); 
            }
            else if(st[i] == '}'){
                retst.push(','); 
            }
            else if(st[i] == '|'){
                retst.push('ฅ'); 
            }
            else if(st[i] == 'A'){
                retst.push('ฤ'); 
            }
            else if(st[i] == 'S'){
                retst.push('ฆ'); 
            }
            else if(st[i] == 'D'){
                retst.push('ฏ'); 
            }
            else if(st[i] == 'F'){
                retst.push('โ'); 
            }
            else if(st[i] == 'G'){
                retst.push('ฌ'); 
            }
            else if(st[i] == 'H'){
                retst.push('็'); 
            }
            else if(st[i] == 'J'){
                retst.push('๋'); 
            }
            else if(st[i] == 'K'){
                retst.push('ษ'); 
            }
            else if(st[i] == 'L'){
                retst.push('ศ'); 
            }
            else if(st[i] == ':'){
                retst.push('ซ'); 
            }
            else if(st[i] == '"'){
                retst.push('.'); 
            }
            else if(st[i] == 'Z'){
                retst.push('('); 
            }
            else if(st[i] == 'X'){
                retst.push(')'); 
            }
            else if(st[i] == 'C'){
                retst.push('ฉ'); 
            }
            else if(st[i] == 'V'){
                retst.push('ฮ'); 
            }
            else if(st[i] == 'B'){
                retst.push('ฺ'); 
            }
            else if(st[i] == 'N'){
                retst.push('์'); 
            }
            else if(st[i] == 'M'){
                retst.push('?'); 
            }
            else if(st[i] == '<'){
                retst.push('ฒ'); 
            }
            else if(st[i] == '>'){
                retst.push('ฬ'); 
            }
            else if(st[i] == '?'){
                retst.push('ฦ'); 
            }
            else retst.push(st[i]);
        }
    }else{
        for(var i = 0; i < st.length; i++){
           if(st[i] == 'ๅ'){
                retst.push('1'); 
           }
           else if(st[i] == '/'){
                retst.push('2'); 
           }
           else if(st[i] == '-'){
                retst.push('3'); 
           }
           else if(st[i] == 'ภ'){
                retst.push('4'); 
           }
           else if(st[i] == 'ถ'){
                retst.push('5'); 
           }
           else if(st[i] == 'ุ'){
                retst.push('6'); 
           }
           else if(st[i] == 'ึ'){
                retst.push('7'); 
           }
           else if(st[i] == 'ค'){
                retst.push('8'); 
           }
           else if(st[i] == 'ต'){
                retst.push('9'); 
           }
           else if(st[i] == 'จ'){
                retst.push('0'); 
           }
           else if(st[i] == 'ข'){
                retst.push('-'); 
           }
           else if(st[i] == 'ช'){
                retst.push('='); 
           }
           else if(st[i] == 'ๆ'){
                retst.push('q'); 
           }
           else if(st[i] == 'ไ'){
                retst.push('w'); 
           }
           else if(st[i] == 'ำ'){
                retst.push('e'); 
           }
           else if(st[i] == 'พ'){
                retst.push('r'); 
           }
           else if(st[i] == 'ะ'){
                retst.push('t'); 
           }
           else if(st[i] == 'ั'){
                retst.push('y'); 
           }
           else if(st[i] == 'ี'){
                retst.push('u'); 
           }
           else if(st[i] == 'ร'){
                retst.push('i'); 
           }
           else if(st[i] == 'น'){
                retst.push('o'); 
           }
           else if(st[i] == 'ย'){
                retst.push('p'); 
           }
           else if(st[i] == 'บ'){
                retst.push('['); 
           }
           else if(st[i] == 'ล'){
                retst.push(']'); 
           }
           else if(st[i] == 'ฃ'){
                retst.push('\\'); 
           }
           else if(st[i] == 'ฟ'){
                retst.push('a'); 
           }
           else if(st[i] == 'ห'){
                retst.push('s'); 
           }
           else if(st[i] == 'ก'){
                retst.push('d'); 
           }
           else if(st[i] == 'ด'){
                retst.push('f'); 
           }
           else if(st[i] == 'เ'){
                retst.push('g'); 
           }
           else if(st[i] == '้'){
                retst.push('h'); 
           }
           else if(st[i] == '่'){
                retst.push('j'); 
           }
           else if(st[i] == 'า'){
                retst.push('k'); 
           }
           else if(st[i] == 'ส'){
                retst.push('l'); 
           }
           else if(st[i] == 'ว'){
                retst.push(';'); 
           }
           else if(st[i] == 'ง'){
                retst.push('\''); 
           }
           else if(st[i] == 'ผ'){
                retst.push('z'); 
           }
           else if(st[i] == 'ป'){
                retst.push('x'); 
           }
           else if(st[i] == 'แ'){
                retst.push('c'); 
           }
           else if(st[i] == 'อ'){
                retst.push('v'); 
           }
           else if(st[i] == 'ิ'){
                retst.push('b'); 
           }
           else if(st[i] == 'ื'){
                retst.push('n'); 
           }
           else if(st[i] == 'ท'){
                retst.push('m'); 
           }
           else if(st[i] == 'ม'){
                retst.push(','); 
           }
           else if(st[i] == 'ใ'){
                retst.push('.'); 
           }
           else if(st[i] == 'ฝ'){
                retst.push('/'); 
           }
           else if(st[i] == '+'){
                retst.push('!'); 
           }
           else if(st[i] == '๑'){
                retst.push('@'); 
           }
           else if(st[i] == '๒'){
                retst.push('#'); 
           }
           else if(st[i] == '๓'){
                retst.push('$'); 
           }
           else if(st[i] == '๔'){
                retst.push('%'); 
           }
           else if(st[i] == 'ู'){
                retst.push('^'); 
           }
           else if(st[i] == '฿'){
                retst.push('&'); 
           }
           else if(st[i] == '๕'){
                retst.push('*'); 
           }
           else if(st[i] == '๖'){
                retst.push('('); 
           }
           else if(st[i] == '๗'){
                retst.push(')'); 
           }
           else if(st[i] == '๘'){
                retst.push('_'); 
           }
           else if(st[i] == '๙'){
                retst.push('+'); 
           }
           else if(st[i] == '๐'){
                retst.push('Q'); 
           }
           else if(st[i] == '"'){
                retst.push('W'); 
           }
           else if(st[i] == 'ฎ'){
                retst.push('E'); 
           }
           else if(st[i] == 'ฑ'){
                retst.push('R'); 
           }
           else if(st[i] == 'ธ'){
                retst.push('T'); 
           }
           else if(st[i] == 'ํ'){
                retst.push('Y'); 
           }
           else if(st[i] == '๊'){
                retst.push('U'); 
           }
           else if(st[i] == 'ณ'){
                retst.push('I'); 
           }
           else if(st[i] == 'ฯ'){
                retst.push('O'); 
           }
           else if(st[i] == 'ญ'){
                retst.push('P'); 
           }
           else if(st[i] == 'ฐ'){
                retst.push('{'); 
           }
           else if(st[i] == ','){
                retst.push('}'); 
           }
           else if(st[i] == 'ฅ'){
                retst.push('|'); 
           }
           else if(st[i] == 'ฤ'){
                retst.push('A'); 
           }
           else if(st[i] == 'ฆ'){
                retst.push('S'); 
           }
           else if(st[i] == 'ฏ'){
                retst.push('D'); 
           }
           else if(st[i] == 'โ'){
                retst.push('F'); 
           }
           else if(st[i] == 'ฌ'){
                retst.push('G'); 
           }
           else if(st[i] == '็'){
                retst.push('H'); 
           }
           else if(st[i] == '๋'){
                retst.push('J'); 
           }
           else if(st[i] == 'ษ'){
                retst.push('K'); 
           }
           else if(st[i] == 'ศ'){
                retst.push('L'); 
           }
           else if(st[i] == 'ซ'){
                retst.push(':'); 
           }
           else if(st[i] == '.'){
                retst.push('"'); 
           }
           else if(st[i] == '('){
                retst.push('Z'); 
           }
           else if(st[i] == ')'){
                retst.push('X'); 
           }
           else if(st[i] == 'ฉ'){
                retst.push('C'); 
           }
           else if(st[i] == 'ฮ'){
                retst.push('V'); 
           }
           else if(st[i] == 'ฺ'){
                retst.push('B'); 
           }
           else if(st[i] == '์'){
                retst.push('N'); 
           }
           else if(st[i] == '?'){
                retst.push('M'); 
           }
           else if(st[i] == 'ฒ'){
                retst.push('<'); 
           }
           else if(st[i] == 'ฬ'){
                retst.push('>'); 
           }
           else if(st[i] == 'ฦ'){
                retst.push('?'); 
           }else retst.push(st[i]);
           
        }
    }
    dispt.innerHTML = retst.join('');
}