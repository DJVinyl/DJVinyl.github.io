import Image from "react-bootstrap/Image";

interface IProps {
  gif: any,
  description: string,
  link: string
}

export default function Achievement(props: IProps) {
  return (
    <div>
      <Image src={props.gif}/>
      <p className="achievement-description">{props.description}</p>
      {props.link ? (
        <a className="github-link" href={props.link} target="_blank">
          {props.link}
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
