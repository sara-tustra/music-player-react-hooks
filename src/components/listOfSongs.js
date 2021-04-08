import React from 'react'





const ListOfSongs = ({songs}) => {
   const renderListOfSongs = Object.keys(songs).map((d, key) =>{
     return (
      <tr key={key}><th className="p-3 m-4" >{songs[key].id}. {songs[key].name}</th></tr>
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

