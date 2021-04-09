import React from 'react'





const ListOfSongs = (props) => {
  const playSongFromList =(i) =>{
    props.setCurrentSongIndex(i);
    props.setIsPlaying(true);
  }

   const renderListOfSongs = Object.keys(props.songs).map((d, key) =>{
     return (
      <tr key={key} onClick={()=> playSongFromList(key)}><th className="p-3 m-4" >{props.songs[key].id}. {props.songs[key].name}</th></tr>
     )
   })
        
   
    return (
        <div className="table-responsive pt-5">
        <table className="table">
          <tbody>{renderListOfSongs}</tbody>
        </table>
      </div>
    )
}

export default ListOfSongs

