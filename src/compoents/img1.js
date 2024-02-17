
import { Parallax } from 'react-parallax';
import img1 from "../images/img2.jpg"
const Img1 = () => (
    <Parallax className='img1' blur={2} bgImage={img1}  strength={800}>
       <div className='content'>
        <span className='img-text'>places to vist</span>
       </div>
    </Parallax>
);

export default Img1