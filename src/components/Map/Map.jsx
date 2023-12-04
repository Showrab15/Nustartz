import map from '../../assets/map.png'
import borderBottom from '../../assets/mapBottomBorder.png'
const Map = () => {
    return (
        <div>

<div >
<img src={map} alt="" /> 

</div>
<div className="relative bottom-60">
<img src={borderBottom} alt="" />

</div>
        </div>
    );
};

export default Map;