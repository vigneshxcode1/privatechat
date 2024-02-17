
import { Parallax } from 'react-parallax';
import img2 from "../images/img1.jpg"
const Img2 = () => (
    <Parallax className='img1' blur={2} bgImage={img2}  strength={800}>
       <div className='content'>
        <span className='img-text'>book tickets</span>
       </div>
    </Parallax>
);

export default Img2