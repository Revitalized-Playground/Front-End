import { useState } from 'react'


export const useWindowHook = () => {
    const [modal, setModal] = useState(false)
    const [carousel, setCarousel] = useState(false)
    const [clicked, setClicked] = useState(false);

	// console.log('modal', modal)

    window.onclick = (e) => {
		if(clicked === true){
			if(e.target.className ==="user" ){
				return
			} 
		}
		if(e.target.className !== "dropdown" && e.target.className !== "user"  && e.target.className !== "user-personal-greeting" && e.target.className !== "right-nav"){
			setModal(false)
		}
    }

    return [modal, setModal, carousel, setCarousel, clicked, setClicked]
} 
