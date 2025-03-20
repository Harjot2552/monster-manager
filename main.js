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



}
