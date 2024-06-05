async function getDefinition(){
    const word = document.getElementById('wordInput').value;
    console.log(word)
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
try {
    const respuesta = await fetch(apiUrl)
    const info = await respuesta.json();
    const definition = info[0]?.meanings[0]?.definitions[0]?.definition || 'No sé encontró la definición';
    document.getElementById('container').innerHTML = `   
    <div class="elgrid" id="container">
    <div>
    <input type="text" id="wordInput" placeholder="Buscador de definiciones"> 
    <h2>${word}</h2>
    <h3>${definition}</h3></div>
    <button type="button" id="boton" onclick="getDefinition()"> Search</button></div>`;
    console.log("try")
} catch (error){
    console.error('Error al obtener la definición:',error)
}
}
