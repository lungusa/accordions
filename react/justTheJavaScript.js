class AccReuse extends React.Component {
  render(){
    const arrow = <span className="downArrowStyle"><em className="fa fa-chevron-down"></em></span>;
    return (
      <div className="packetStyle">
        <div className={"barStyle"} tabIndex="0">
          <h2 className="specp">{this.props.title} {arrow}</h2>
        </div>
        <div className="wordsStyle" dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
      </div>
    )
  }
}

class AccReuseSimple extends React.Component {
  render(){
    const arrow = <span className="downArrowStyle"><em className="fa fa-chevron-down"></em></span>;
    return (
      <div className="packetStyle">
        <p>{this.props.title}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class AccShell extends React.Component  {
  constructor(props) {
    super(props);
    this.state =
      {
        accordionContent:
        [
          {
            title: "Lung Cancer Basics",
            content: '<p>Lung cancer happens when cells in the lung change (mutate). They grow uncontrollably and cluster together to form a tumor. There are two main types of lung cancer, small cell lung cancer, and non-small cell lung cancerLearn more about the basics of lung cancer</p>'
          },
          {
            title: "Lung Cancer Causes and Risk Factors",
            content: '<p>Anyone can get lung cancer. Lung cancer occurs when cells in the lung mutate or change. Most often, change in lung cells happens when people breathe in dangerous, toxic substances. Smoking is the greatest risk factor, but there are others like exposure to radon gas and air pollution.</p>'
          },
          {
            title: "Lung Cancer Staging",
            content: '<p>Staging means finding out if and how much the lung cancer has spread.</p>'
          },
          {
            title: "Is Lung Cancer on Your Radar?",
            content: '<p>Take quiz to find out how much you know about lung cancer. Share it with your friends to help get lung cancer on their radar.</p>'
          },
          {
            title: "How Serious Is Lung Cancer?",
            content: '<p>Lung cancer is very serious. Much progress has been made, but lung cancer is still the leading cancer killer of both men and women in the U.S. There are a few reasons why.</p>'
          }
        ]
      };
  }
  render(){
    const createContent = this.state.accordionContent.map( (item, index) =>
      <AccReuse key={index} title={item.title} content={item.content} />
    );
    return (
      <div>
        {createContent}
      </div>
    )
  }
}


ReactDOM.render(<AccShell />, document.getElementById("root"));

$(document).ready(function(){
  $(".barStyle").attr("onclick", "$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')");
  $(".barStyle").attr("onkeypress", "if(event.keyCode == (13 || 32)){$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')}");
})
