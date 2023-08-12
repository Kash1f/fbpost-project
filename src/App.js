import logo from './logo.svg';
import './App.css';
import React from 'react'
import Postpage from './components/PostPage/Postpage'


function App() {
  return (
    <>
  <Postpage
  profilename = "Kashif Ahmed"
  img = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
  postcaption = "This is a post for Counter-Strike Global Offensive. Most Played game in the world"
  postImage= "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799"
  />

<Postpage
  profilename = "Sameer Sattar"
  img = "https://s.yimg.com/ny/api/res/1.2/PAbBIFRHQk8vCgMAkdiPpA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI5Mg--/https://media.zenfs.com/en/indiewire_268/098db21ab23388c99a6ee9e7c1207582"
  postcaption = "This is a post for Babar Azam. The Best Batsman in the world"
  postImage= "https://inflics.com/wp-content/uploads/2023/07/3905781-1685006871.jpg"
  />

<Postpage
  profilename = "Shayyan Khan"
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/184px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
  postcaption = "This is a post for Asus ROG Motherboard. The best hardware in town."
  postImage= "https://zahcomputers.pk/wp-content/uploads/2021/07/ASUS-ROG-Strix-X570-F-Gaming-AMD-Motherboard-Price-in-Pakistan.jpg"
  />

    </>
  );
}
  
export default App;
