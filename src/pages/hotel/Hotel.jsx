import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src: "/images/singlepage/blog-1.jpg"
        },
        {
            src: "/images/singlepage/blog-2.jpg"
        },
        {
            src: "/images/singlepage/blog-3.jpg"
        },
        {
            src: "/images/singlepage/blog-4.jpg"
        },
        {
            src: "/images/singlepage/blog-5.jpg"
        },
        {
            src: "/images/singlepage/blog-6.jpg"
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1

        }

        setSlideNumber(newSlideNumber)
    }



    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon className='close' icon={faCircleXmark} onClick={() => setOpen(false)} />
                    <FontAwesomeIcon className='arrow' icon={faCircleArrowLeft} onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className='sliderImg' />
                    </div>
                    <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>st 123 Petit Lisse Ndayane</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighLight">
                        Book a stay over $144 at this property and get a free airpport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                                Located a 5-minute walk from st. Florian's Gate in Krakow, Tower
                                street Apartments has acommondations with air condintioning and
                                free Wifi. The units come with hardwood floors and features a
                                fully equipped kitchementte with a nicrowave, a flat-screen Tv,
                                and aprivate bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Ppular points of interest near the apartment include
                                Cloth Hall, Main market square and Town Hall Tower. The nearest
                                airport is john Paul II International Krakow-Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel