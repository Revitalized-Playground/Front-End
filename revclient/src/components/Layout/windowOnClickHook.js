import {useState} from 'react'


export const useWindowHook = () => {
    const [modal, setModal] = useState(false)
    const [carousel, setCarousel] = useState(false)
    const [clicked, setClicked] = useState(false);


    window.onclick = (e) => {
	if(clicked === true){
		if(e.target.className ==="user" || e.target.className ==="fun" || e.target.className ==="user fun"){
			return
		} else if(e.target.className !== "dropdown"){
			setClicked(false)
		}
	}	
    }

    return [modal, setModal, carousel, setCarousel, clicked, setClicked]
} 
