document.getElementById('pesoIdealForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    let pesoIdeal;

    if (sexo === 'masculino') {
        pesoIdeal = altura - 100;
    } else if (sexo === 'feminino') { 
        pesoIdeal = altura - 110;
    } else {
        document.getElementById('resultado').innerText = "Por favor, escolha o sexo.";
        return;
    }

    
    document.getElementById('resultado').innerText = `Seu peso ideal: ${pesoIdeal.toFixed(2)} kg`;
});
