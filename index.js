const pfpList = [
    "https://i.imgur.com/w4qWhUS.jpeg",
    "https://i.imgur.com/JrumECj.jpeg",
    "https://i.imgur.com/W3L38Bh.jpeg",
    "https://i.imgur.com/gGKv8ik.jpeg",
    "https://i.imgur.com/9IAS0YA.jpeg",
    "https://i.imgur.com/qK853Sp.jpeg",
    "https://i.imgur.com/Yctyymv.jpeg",
    //   "https://randomuser.me/api/portraits/men/24.jpg",
    "https://i.imgur.com/O2WH081.jpeg",
    "https://i.imgur.com/J0EEXOj.jpeg",
    "https://i.imgur.com/6gatE1J.jpeg",
    "https://i.imgur.com/kJ1aFHt.jpeg",
    "https://i.imgur.com/tUDhGia.jpeg",
    "https://i.imgur.com/pCuBf7j.jpeg",
    "https://i.imgur.com/5mimY9q.jpeg",
    "https://i.imgur.com/23n3OmD.jpeg",
    "https://i.imgur.com/xcPgTbp.jpeg",
    "https://i.imgur.com/yXbYjS3.jpeg",
    "https://i.imgur.com/gWR736E.jpeg",
    "https://i.imgur.com/Wb2GTAn.jpeg",
    "https://i.imgur.com/IWByGk3.jpeg",
    "https://i.imgur.com/q5KZG4d.jpeg",
    "https://i.imgur.com/cLw0AGj.jpeg",
    "https://i.imgur.com/3aADRut.jpeg",
    ]
    
function pfp(){
    return pfpList[Math.floor(Math.random() * pfpList.length)];
}

module.exports = pfp