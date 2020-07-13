import React from 'react'

const SearchBox =({searchChange})=>{
    return( <div className='top'>
        <input type= 'search'
         placeholder='enter the name'
         onChange={searchChange}
         />

</div> );

}

export default SearchBox;