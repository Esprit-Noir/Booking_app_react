import './searchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="/images/singlepage/blog-3.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport Taxi</span>
                <span className="siSubTitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <div className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </div>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className='siPrice'>$123</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className="siCheckButton">Save availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem