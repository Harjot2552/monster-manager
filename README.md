# 🐲 Monster Manager  

Monster Manager is a simple web-based application built using **HTML, CSS, and JavaScript**. It allows users to **create, view, and delete** monsters dynamically.  

## 🚀 Features  
✅ Enter the **Monster Name**  
✅ Select the **Rarity** from a dropdown  
✅ Mark the monster as **Favorite** (Yes/No)  
✅ Click the **"Create"** button to add the monster  
✅ View all monsters in a **dynamic table**  
✅ **Delete** a monster from the list with a button  

## 🎮 How It Works  
1. Fill in the monster's **name**.  
2. Choose the **rarity** from the dropdown.  
3. Check the **"Favorite"** checkbox if the monster is special.  
4. Click **"Create"** to add the monster to the list.  
5. View the details in the table below.  
6. Click **"Delete"** to remove a monster from the list.  

## 🛠️ Code Example  
Here's a snippet of how monsters are added and displayed in the table:  

```javascript
function addMonsterToTable(monster) {
    const tableBody = document.getElementById('monster-table-body');
    const row = tableBody.insertRow();

    row.innerHTML = `
        <td>${monster.favorite ? 'Yes' : 'No'}</td> <!-- Favorite status -->
        <td>${monster.name}</td>
        <td>${monster.type}</td>
        <td>${monster.rarity}</td>
        <td><button class="delete-btn" onclick="deleteMonster(this)">Delete</button></td>
    `;
}
```


##📂 Installation & Usage
-----------------------

1.  bashCopyEditgit clone https://github.com/your-username/monster-manager.git
    
2.  Open index.html in your browser.
    
3.  Enjoy managing your **monsters**!
    

##🤝 Contributing
---------------

Feel free to **fork** this repository and improve it! If you find any issues, open a **pull request** or **report a bug**.
