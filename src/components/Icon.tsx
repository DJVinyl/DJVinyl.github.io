import Image from 'react-bootstrap/Image'
import '../styles/Icon.scss';
interface Iprops {
  website:string
  image: string
  subtitle: string
}

export default function Icon(props:Iprops) {
  return (
    <div className='icon-container'>
    <a className="dyn-img" href={props.website} target="_blank">
      <Image src={props.image} className={`${props.image} + Icon`} />
    </a>
    <p className='subtitle'>{props.subtitle}</p>
    </div>
  );
}
