// import Image from 'react-bootstrap/Image'
import '../styles/Icon.scss';
interface Iprops {
  website:string
  image: string
  subtitle: string
}

export default function Icon(props:Iprops) {
  return (
    <div className='icon-container'>
    <a className="dyn-img" href={props.website} target="_blank" rel="noopener noreferrer">
      <img src={props.image} className='icon-images' alt={props.subtitle}/>
    </a>
    <p className='subtitle'>{props.subtitle}</p>
    </div>
  );
}
