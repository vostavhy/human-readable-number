module.exports = function toReadable (number) {
  let number_str = number.toString()

  if (number_str == '0') return 'zero'; 

  if (number_str.length == 3) return get_hundreds(number_str);
  if (number_str.length == 2) return get_dozens(number_str);
  return get_units(number_str);
  
}

function get_units(number) {
    switch(number) {
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        case '0':
            return '';
    }
}

function get_dozens(number) {
    let unit = get_units(number[1])  // return unit-string from the number

    if (number[0] === '0') return unit; 

    if (number[0] === '1') {
        switch(number) {
            case '10':
                return 'ten';
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
        } 
    } 

    let dozen = ''

    switch(number[0]) {
        case '2':
            dozen = 'twenty';
            break;
        case '3':
            dozen = 'thirty';
            break;
        case '4':
            dozen = 'forty';
            break;
        case '5':
            dozen = 'fifty';
            break;
        case '6':
            dozen = 'sixty';
            break;
        case '7':
            dozen = 'seventy';
            break;
        case '8':
            dozen = 'eighty';
            break;
        case '9':
            dozen = 'ninety';
            break;
    }

    if (unit != '') return `${dozen} ${unit}`
    else return dozen
}

function get_hundreds(number) {
    let dozen = get_dozens(number.slice(1))
    let hundred = get_units(number[0])

    if (dozen != '')return `${hundred} hundred ${dozen}`;
    return `${hundred} hundred`;
}
