window.addEventListener('load', main);


function main() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    // chose color
    context.fillStyle = 'red';
    context.strokeStyle = 'black';

    //
    context.fillRect(25, 25, 100, 100);
    context.clearRect(50 , 50, 50, 50);
    context.strokeRect(60 , 60, 30, 30);
}