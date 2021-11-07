import React, { Component } from 'react'
import { getAllStartships } from '../../services/api-calls'
// import { Link } from "react-router-dom";

class StartshipList extends Component {
  state = {
    results: {},
  };

  async componentDidMount() {
    const classData = await getAllStartships();
    console.log(classData);
    this.setState({ 
        results: classData 
      });
    } 
    
    render() {
    return (
      <>



        {/* <h1>Class List</h1>
        <div className="icon-container">
          {this.state.results.map((classTitle) => (
            <div key={ classTitle.index }>

              <Link
                to={{
                  pathname: `/class`,
                  state: { classTitle },
                }} >
                <div id="classDiv">
                  <img 
										style={{ width: "100px", height: "100px" }} 
										src={`/images/${classTitle.name}.svg`} 
										alt=""
									/>
                  {classTitle.name}
                </div>
              </Link>
              
            </div>
          ))}
        </div> */}
      </>
    );
  }
}

export default StartshipList