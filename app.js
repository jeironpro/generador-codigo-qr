document.getElementById('generar-qr').addEventListener('click', function() {
    var url = document.getElementById('qrcode').value;
    var span = document.getElementById('desactivado');

    if (url !== '') {
        var qr = 'https://api.qrcode-monkey.com/qr/custom?size=200&data=' + encodeURIComponent(url);

        document.getElementById('qr-code').innerHTML = '<img src="' + qr + '">';
        span.style.display = 'none';
    } else {
        alert('No has introducido ninguna url');
        span.style.display = 'flex';
    }
})