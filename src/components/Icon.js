import Image from 'react-bootstrap/Image'
import '../styles/Icon.scss';

export default function Icon(props) {
  return (
    <a className='dyn-img' href= {props.website}>
    <Image src={props.image} className={`${props.image} + Icon`}/>
    </a>
  )
}
