import '../styles/Achievement.scss';

interface IProps {
  title: string
  gif: any
  description: string
  frontEnd:string
  backEnd:string
  link: string
}

export default function Achievement(props: IProps) {
  return (
    <div className="achievement-container">
      <h2>{props.title}</h2>
      <section className="details-overview">
        <img className="project-gif" src={props.gif} alt={props.title} />
        <span className="details">
          <p className="achievement-description">{props.description}</p>
          <div className="footer">
            <div className="languages-frameworks">
              {props.frontEnd ? (
                <p className="language-front-end">
                  Front End: {props.frontEnd}{" "}
                </p>
              ) : (
                <p></p>
              )}
              {props.backEnd ? (
                <p className="language-front-end">Back End: {props.backEnd}</p>
              ) : (
                <p></p>
              )}
            </div>
            {props.link ? (
              <a
                className="github-link"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.title} Repository
              </a>
            ) : (
              ""
            )}
          </div>
        </span>
      </section>
      <br></br>
      <hr></hr>
    </div>
  );
}
