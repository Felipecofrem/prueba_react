import { useEffect, useState } from 'react'
const MiApi = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState ("")
  const getData = async() => { 
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const data = await response.json()
    setCharacters(data) 
    }
useEffect (() => {
getData()
},[])
return (
<div>

    <input onChange={(e) => setSearch(e.target.value.trim())} type="text"
    placeholder='Busca un personaje'/><div className='flex-wrap d-flex'>
           {characters.sort((a, b) => a.fullName.localeCompare(b.fullName)).filter((x) =>
           x.fullName.toLowerCase().includes(search.toLowerCase())).map((item) =>
           { return     <div key={item.id} className="card" style={{width: "350px"}}>
                            <a href={item.imageUrl} target="_blank"><img className="imgCharac"
                            src={item.imageUrl} alt={item.fullName} title={item.fullName}></img></a>
                            <div className="card-body">
                                <h4 className="card-title text-center">{item.fullName}</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Título: {item.title}</li>
                                    <li className="list-group-item">Familia: {item.family}</li>
                                </ul>
                            </div>
                        </div>
})}
</div></div>
)} 
export default MiApi