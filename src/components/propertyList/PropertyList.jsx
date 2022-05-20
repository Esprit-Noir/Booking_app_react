import './propertyList.css'

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src="/images/gallery-1.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/gallery-2.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>2353 cabins</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/gallery-3.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>3433 villas</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/gallery-4.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartements</h1>
                    <h2>1823 apartements</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/gallery-5.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Ressorts</h1>
                    <h2>1233 ressorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/gallery-6.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cottages</h1>
                    <h2>1233 cottages</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList