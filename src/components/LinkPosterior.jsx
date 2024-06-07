import './css/linkLateral.css'
import React from 'react'
import { useState } from "react"


export default function LinkPosterior({postSiguiente}) {
    const [previousPostLink, setPreviousPostLink] = useState(false)

    return (

postSiguiente && <div className='postSiguiente'
      onMouseEnter={()=>setPreviousPostLink(true)}
      onMouseLeave={()=>setPreviousPostLink(false)}>
      
                <a className='linkSiguiente' href={`/blog/javascript/${postSiguiente.slug}`}>{postSiguiente.slug}</a>

      {/* <div className={previousPostLink ? 'fotoSiguiente' : 'fotoSiguiente hidden'}>
        <img src='https://picsum.photos/seed/picsum/200/300' alt="foto" />
        <div className='tarjetaSiguiente'>
          <h3 className='tituloSiguiente'>{postSiguiente ? postSiguiente.slug : ''}</h3> */}
          {/* </div>
      // </div>
      // <span className='linkSiguiente'>POST SIGUIENTE</span>  */}
    </div>
      )
}



