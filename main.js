function createMonster(event) {
    event.preventDefault();

 
   // getting all the input field data.
   const name = document.getElementById('name').value;
   const type = document.querySelector('input[name="type"]:checked');
   const rarity = document.getElementById('rarity').value;
   const favorite = document.querySelector('input[name="favorite"]').checked;

       // validating the form.
       if (!name || !type || !rarity) {
        alert('Please fill out all fields.');
        return;
    }



    // storing all data in javasscript object.
    const monster = {
        name,
        type: type.value,
        rarity,
        favorite
    };
    
    // giving object value to this fucntion
    addMonsterToTable(monster);

    // resetting the form
    document.getElementById('monster-form').reset();

}



// displaying the monster details in table form
function addMonsterToTable(monster) {
    const tableBody = document.getElementById('monster-table-body');
    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${monster.favorite ? 'Yes' : 'No'}</td>
        <td>${monster.name}</td>
        <td>${monster.type}</td>
        <td>${monster.rarity}</td>
        <td><button class="delete-btn" onclick="deleteMonster(this)">Delete</button></td>
    `;
}

