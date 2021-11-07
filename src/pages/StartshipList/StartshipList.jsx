import React, { Component } from 'react'
import { getAllStartships } from '../../services/api-calls'
import { Link } from "react-router-dom";
import Loading from '../../components/Loading';

class StartshipList extends Component {
  state = {
    startships: [],
  };

  async componentDidMount() {
    const classData = await getAllStartships();
    this.setState({ 
        startships: classData.results
      });
  } 
    
    render() {
    return (
      <>
      {this.state.startships.length > 0 ? 
        <div className="icon-container">
          {this.state.startships.map((startship, idx) => (
            <div key={ idx }>

              <Link
                to={{
                  pathname: `/starship/${idx}/`,
                  state: { name: startship.name, model: startship.model },
                }} >
                <div id="classDiv">
                  {startship.name}
                </div>
              </Link>
              
            </div>
          ))}
        </div>
      :
      <Loading />
      }
      
      </>
    );
  }
}

export default StartshipList