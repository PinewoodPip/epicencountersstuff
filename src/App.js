import logo from './logo.svg';
import './App.css';
import React from 'react';

var projects = {
  BuildPlanner: {
    name: "Build Planner",
    description: "A full-fledged build planner featuring accurate skill tooltips, Ascension browsing, active keyword listings and much more!",
    link: "https://www.pinewood.team/ee2buildplanner/",
  },
  EpipEncounters: {
    name: "Epip Encounters",
    description: "An add-on mod that adds numerous fun new features, including socket forging, an option for enemies to spawn with Keywords & Artifacts, and UI improvements (soon™).",
    link: "https://docs.google.com/document/d/10C39LndW8QwDcfA_bUpq_ZYu_6lt_vkjW7-sFeIuBKU/edit",
  },
  GearMods: {
    name: "Gear Modifiers List",
    description: "A list of all gear modifiers compatible with the Greatforge combine option. Also has a link to a more extensive spreadsheet with more technical data.",
    link: "https://www.pinewood.team/ee2gearmods/",
  },
  SkillViewer: {
    name: "Skill Viewer",
    description: "A website that displays all the skills in the game, with complete tooltips and support for Epip Encounters and Derpy's Tweaks.",
    link: "https://www.pinewood.team/skillviewer/",
  },
  AscensionTool: {
    name: "Ascension Path Tool",
    description: "A tool that finds the shortest paths towards your chosen Aspects. Can also search for the most point-efficient self-sustained builds, or maximize embodiments.",
    link: "https://www.pinewood.team/ee2calc/",
  },
  PipCommander: {
    name: "EE Cheat Commander",
    description: "An edit of the Cheat Commander mod from Muffiny which adds Proteans, runes, an Ascension point cheat, and a few cheat spells for testing.",
    link: "https://drive.google.com/file/d/1xMXnR_-PCscFj2IUm4DJu9drzJfu73m2/view",
  },
}

class App extends React.Component {
  render() {
    return (<div className="App unselectable">
      <Header/>
      <ProjectContainer projects={projects}/>
    </div>)
  }
}

function Header(props) {
  return (
    <div className="header">
      <img src="flourish_pip.png" className="flourish"/>
      <Text text="Pip's Epic Encounters Stuff" className="title"/>
      <img src="flourish_pip.png" className="flourish flip-y"/>
    </div>
  )
}

function Project(props) {
  let data = props.data;

  function SendToURL() {
    window.location.href = data.link;
  }

  return <div className="project" onClick={SendToURL}>
    <TextLink text={data.name} link={data.link} className="project-header unselectable"/>
    <Text text={data.description} className="project-description"/>
  </div>
}

function ProjectContainer(props) {
  let elements = []
  for (let project in props.projects) {
    elements.push(<Project key={project} data={props.projects[project]}/>)
  }

  return (<div className="project-container">
    {elements}
  </div>)
}

export function Text(props) {
	return <p style={props.style} className={"text " + props.className} onClick={props.onClick}>{props.text}</p>
}

export function TextLink(props) {
	return <a href={props.link} style={props.style} className={"text " + props.className} onClick={props.onClick}>{props.text}</a>
}

export function LinkText(props) {
	return <a href={props.link} style={props.style} className={"text " + props.className} onClick={props.onClick}>{props.text}</a>
}

export default App;
