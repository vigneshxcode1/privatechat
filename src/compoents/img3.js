
import { Parallax } from 'react-parallax';
import img3 from "../images/img3.jpg"
const Img3 = () => (
    <Parallax className='img1' blur={2} bgImage={img3}  strength={800}>
       <div className='content'>
        <span className='img-text'>thanks to vist</span>
       </div>
    </Parallax>
);

export default Img3