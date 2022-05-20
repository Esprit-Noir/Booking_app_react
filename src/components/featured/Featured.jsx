import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="/images/dest-1.jpg" className='featuredImg' alt="" srcset="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="/images/dest-2.jpg" className='featuredImg' alt="" srcset="" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="/images/dest-3.jpg" className='featuredImg' alt="" srcset="" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured