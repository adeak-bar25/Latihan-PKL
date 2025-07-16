// Toggle Dark Mode
let isDark = false

function colorMode(mode){
    if(mode === 'dark'){
        return {
            bgPrimary: "#f0f8ff",
            bgSec: "#fff",
            text: "#000"
        
        }
    }else if(mode === 'light'){
        return {
            bgPrimary: "#020617",
            bgSec: "#0f172a",
            text: "#fff"
        }  
    }
}

document.getElementById('toogle-dark-mode').addEventListener('click', () => {
    const mode = isDark?  'dark': 'light'
    const r = document.querySelector(':root')

    r.style.setProperty('--bg-primary-color', colorMode(mode).bgPrimary)
    r.style.setProperty('--bg-secondary-color', colorMode(mode).bgSec)
    r.style.setProperty('--text-color', colorMode(mode).text)
    
    isDark = isDark? false : true
})



// Change username
document.getElementById('change-username').addEventListener('click', (e) =>{
    e.preventDefault()
    const currName = document.getElementById('username-input').value? document.getElementById('username-input').value : "Guest"
    document.getElementById('username').textContent = currName
})

// Counter
document.querySelector('.btn-container').addEventListener('click', (e) => {
    const count = document.getElementById('counter-value')
    // console.log(e.target.id)
    switch (e.target.id){
        case("incr"):
            count.textContent = parseInt(count.textContent) + 1
            // console.log(count.textContent)
            break
        
        case("decr"):
            count.textContent = parseInt(count.textContent) - 1
            // console.log(count.textContent)
            break
        
        case("reset"):
            count.textContent = 0
            // console.log(count.textContent)
            break
    }
})

