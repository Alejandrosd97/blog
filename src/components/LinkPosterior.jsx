import './css/linkLateral.css'
import React from 'react'
import { useState } from "react"


export default function LinkPosterior({postSiguiente}) {
    const [previousPostLink, setPreviousPostLink] = useState(false)

    return (

postSiguiente && <div className='postSiguiente'>
      <a className='linkSiguiente' href={`/blog/javascript/${postSiguiente.slug}`}>{postSiguiente.slug}</a>
    </div>
      )
}



