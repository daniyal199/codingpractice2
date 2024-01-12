const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props;
  return <button className= {`button ${className}`}>{buttonText}<button/>;
}

const element = (
  //  Write your code here.
  <div className = "Social-button-cont">
  <div className="content-cont">
  <h1 className = "heading">Social Buttons</h1>
  <div className = "button-cont">
  <Button buttonText = "Like" className ="Like-button"/>
  <Button buttonText = "Comment" className ="comment-button"/>
  <Button buttonText = "Share" className ="Share-button"/>
  </div>
  </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'));
