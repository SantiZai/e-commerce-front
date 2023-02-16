import { useState, useEffect } from 'react'
import '../../styles/slider.css'
import styled from 'styled-components'

const CarouselImg = styled.img`
    width: 300px;
    height: 200px;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity: 1;
    }
`

const CarouselButtonContainer = styled.div`
    display: flex;
    align-content: center;
    margin-top: 1rem;
`

const CarouselButton = styled.button`
    padding: 10px;
    margin: 0 5px;
    font-size: 24px;
    font-weight: bold;
`

interface Props {
    images: string[]
    autoplay?: boolean
    showButtons?: boolean
}

export const Slider = (props: Props) => {

    const [selectedI, setSelectedI] = useState(0)
    const [selectedImg, setSelectedImg] = useState(props.images[0])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      if(props.autoplay || !props.showButtons) {
        const interval = setInterval(() => {
            selectNewImage(selectedI, props.images)
        }, 500)
        return clearInterval(interval)
      }
    })
    

    const selectNewImage = (i: number, images: string[], next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? i < images.length - 1 : i > 0
            const nextIndex = next ? (condition ? i + 1 : 0) : condition ? selectedI - 1 : images.length - 1
            setSelectedImg(images[nextIndex])
            setSelectedI(nextIndex)
        }, 200);
    }

    const prev = () => {
        selectNewImage(selectedI, props.images, false)
    }

    const next = () => {
        selectNewImage(selectedI, props.images)
    }

    return (
        //TODO no me convence mucho el slider, CAMBIARLO TODO
        <div className='m-auto flex flex-col items-center justify-center py-6 rounded-md slider'>
            <CarouselImg src={selectedImg} className={ loaded ? "loaded shadow-lg rounded-md mt-4" : "shadow-lg rounded-md mt-4" } onLoad={ () => setLoaded(true) } />
            <CarouselButtonContainer>
                {
                    props.showButtons
                    ?   (
                        <>
                            <CarouselButton onClick={prev}>{'<'}</CarouselButton>
                            <CarouselButton onClick={next}>{'>'}</CarouselButton>
                        </>
                        )
                    : <></>
                }
            </CarouselButtonContainer>
        </div>
    )
}
