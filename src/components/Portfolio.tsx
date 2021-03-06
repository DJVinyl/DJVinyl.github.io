import Achievement from './Achievement'
import tweeterGif from "../images/Tweeter.gif";
import glassmorphismTSGif from '../images/GlassmorphismTS.gif'
import junglePic from '../images/JunglePic.png'
import tinyAppGif from '../images/TinyAppGif.gif'
import portfolio from '../images/Portfolio.png'
import schedulerGif from '../images/schedulerGif.gif'
import smarterTeacherGif from '../images/smarterTeacherGif.gif'
import '../styles/Portfolio.scss'

export default function Portfolio() {
  return (
    <div className="portfolio-box">
      <Achievement
        title={"Glassmorphism"}
        gif={glassmorphismTSGif}
        description={
          "A CSS code generator that creates glassmorphism CSS styling."
        }
        link={"https://github.com/DJVinyl/GlassmorphismTS"}
        frontEnd={"ReactJS - Typescript"}
        backEnd={""}
      />
      <Achievement
        title={"Smarter Teacher"}
        gif={smarterTeacherGif}
        description={
          "An e-commerce marketplace website where teachers can buy and sell teaching resources. This project was built by Vineet Pande, Preeti Rani, and Mitchell Gonzalez."
        }
        link={""}
        frontEnd={"ReactJS, MaterialUI, Stripe"}
        backEnd={"ExpressJS, ElasticSearch, AWS-S3, Firebase, pSQL"}
      />
      <Achievement
        title={"Jungle"}
        gif={junglePic}
        description={"A fun and simple e-commerce app built soley with Ruby."}
        link={"https://github.com/DJVinyl/Rails-Jungle"}
        frontEnd={"eRuby"}
        backEnd={"Ruby on Rails"}
      />
      <Achievement
        title={"Scheduler"}
        gif={schedulerGif}
        description={
          "An SPA Application built in React that assists in scheduling for a business week."
        }
        link={"https://github.com/DJVinyl/scheduler"}
        frontEnd={"ReactJS, Storybook, Jest, Cypress"}
        backEnd={"Webpack Development Server, pSQL"}
      />
      <Achievement
        title={"SmartToDo List"}
        gif={
          "https://raw.githubusercontent.com/Justin1002/smartToDoList/master/app-pics/app.demo.gif"
        }
        description={
          "A smart, auto-categorizing todo list app. The user simply has to add the name of the thing, and it gets put into the correct list. This project was built by Justin Ly, Kaylin Dennis, and Mitchell Gonzalez."
        }
        link={"https://github.com/DJVinyl/smartToDoList"}
        frontEnd={"jQuery"}
        backEnd={"Express, pSQL"}
      />
      <Achievement
        title={"Tweeter"}
        gif={tweeterGif}
        description={"Tweeter is a simple, single-page Twitter clone."}
        link={"https://github.com/DJVinyl/tweeter"}
        frontEnd={"jQuery"}
        backEnd={"Express"}
      />
      <Achievement
        title={"TinyApp"}
        gif={tinyAppGif}
        description={
          "TinyApp is a web application that allows users to shorten long URLs (?? la bit.ly)."
        }
        link={"https://github.com/DJVinyl/tinyapp"}
        frontEnd={"EJS"}
        backEnd={"Express"}
      />
      <Achievement
        title={"My Portfolio"}
        gif={portfolio}
        description={
          "A website that I built using React and TypeScript to provide a Link Tree and a coding portfolio."
        }
        link={"https://github.com/DJVinyl/DJVinyl.github.io"}
        frontEnd={"ReactJS - Typescript"}
        backEnd={"Github Pages"}
      />
    </div>
  );
}
