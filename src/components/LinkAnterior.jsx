import { useState } from "react"
import React from "react"
import './css/linkLateral.css'


export default function LinkAnterior({postAnterior}) {
    const [previousPostLink, setPreviousPostLink] = useState(false)


    console.log(previousPostLink)
    return (

postAnterior && <div className='postPrevio'
      onMouseEnter={()=>setPreviousPostLink(true)}
      onMouseLeave={()=>setPreviousPostLink(false)}>
      {/* <span className='linkPrevio'>POST PREVIO</span> 
      <div className={previousPostLink ? 'fotoPrevio' : 'fotoPrevio hidden'}>
        <img src='https://picsum.photos/seed/picsum/200/300' alt="foto" />
        <div className='tarjetaPrevio'>
          <h3 className='tituloPrevio'> { postAnterior ? postAnterior.title : ''}</h3> */}
          <a className="linkPrevio" href={`/blog/javascript/${postAnterior.slug}`}>{postAnterior.slug}</a>
        {/* </div>
      </div> */}
    </div>
    )
}