const day = 'Monday';

switch(day){
    case 'Monday': // day == 'monday'
        console.log('plan course structure');
        console.log('Go to Coding Meetup');
        break;
    case 'tuesday':
        console.log('prepare theory vidoes');
        break;
    case 'wednesday':
    case 'thusday':    
        console.log('Write code example');
        break;
    case 'friday':
        console.log('Record Vidoes');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');   
        break;
    default:
        console.log('not a valid day!');       
}