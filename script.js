dugongData = [
    {name: "Blood Dugong", src:"./image/bloodDugong.png", link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538297978706460673" },
    {name: "Toxic Dugong", src:"./image/toxicDugong.png" , link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538296879194832897/"},
    {name: "Cyber Dugong", src:"./image/cyberDugong.png", link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538300177729716225/"},
    {name:"Soldier Dugong", src:"./image/fightingDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538303476264599553/"},
    {name:"Basic Dugong", src:"./image/basicDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538295779683205121/"},
    {name:"Marine Dugong", src:"./image/marineDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538304575776227329/"},
    {name:"Ninja Dugong", src:"./image/ninjaDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538305675287855105/"},
    {name:"Cousteau's Dugong", src:"./image/CousteauDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538299078218088449/"},
    {name:"Dugong Unit 02", src:"./image/dugongUnit02.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538299078218088449/"},
    {name:"Diabolic Dugong", src:"./image/diableDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538301277241344001/"},
    {name:"Old Time Dugong", src:"./image/OldDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538306774799482881/"},
    {name:"Space Dugong", src:"./image/SpaceDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538311172845993985/"},
    {name:"Pilot Dugong", src:"./image/pilotDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538307874311110657/"},
    {name:"Pirate Dugong", src:"./image/pirateDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538308973822738433/"},
    {name:"Smoking Dugong", src:"./image/SmokeyDugong.png", link:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17419705958010282170248180867636919284133625752238015005729538310073334366209/"}
]
gal = document.querySelector('.galery')
function createEl(src, openseaLink, name){
    return `<div class="imgCard">
    <p class="info">click to enlarge</p>
        <img class="img" src="${src}" alt="${name}">
    <h3>${name}</h3>
    <a href="${openseaLink}" >
      <p>View on Opensea.io</p>
    </a>
  </div>` 
}
dugongData.forEach(element=> gal.innerHTML += createEl(element.src, element.link, element.name))
img = document.querySelectorAll('.img');
display = document.querySelector('.display')
cross = document.querySelector('.closeBtn')
img.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle("imgFocus");
        display.classList.toggle("displayToggle")
        display.onclick = ()=>{
            element.classList.toggle("imgFocus");
            display.classList.toggle("displayToggle")
        }
    })
});



