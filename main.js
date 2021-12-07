window.addEventListener('load', main);


function main() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    // chose color
    // context.fillStyle = 'red';
    // context.strokeStyle = 'black';

    //
    // context.fillRect(25, 25, 100, 100);
    // context.clearRect(50 , 50, 50, 50);
    context.strokeRect(215 , 155, 30, 30);
    context.strokeRect(155 , 155, 30, 30);

    context.beginPath();
    context.moveTo(215, 170);
    context.lineTo(185, 170);
    context.stroke();

    
    context.fillStyle = 'green';
    context.lineWidth = 5;

    context.beginPath();
    context.arc(200, 200, 40, 0, Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(200, 200, 80, 0, 2 * Math.PI );
    context.stroke();

    context.beginPath();
    context.arc(230, 170, 10, 0, 2 * Math.PI );
    context.stroke();


    context.beginPath();
    context.arc(170, 170, 10, 0, 2 * Math.PI );
    context.stroke();
}

