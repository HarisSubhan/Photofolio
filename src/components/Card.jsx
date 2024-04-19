import React, { useState } from 'react'
import { photos } from '../pages/data/photos'
import Single from './Single'
import Expand from './Expand'

const Card = () => {

    const [show, setShow] = useState(false)
    const [myImage, setmyImage] =useState(null)

    const showPhoto = (id) =>{
        const findImage = photos.find((item)=>{
            return item.id ===id
        })

        setmyImage(findImage)
    }

  return (
    <>
    <Expand myImage ={myImage} show={show} setShow={setShow} />
    <div className="container-fluid my-3" >
        <div className="row" >
            {photos.map((item) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 my-1">
                                    <div className="card border-0 rounded-3 bg-transparent">
                                        <Single {...item} show={show} setShow={setShow} showPhoto={showPhoto} />
                                    </div>
                                </div>
                            </>
                        )
                    })}

        </div>
    </div>
    </>
  )
}

export default Card