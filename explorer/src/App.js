import React from 'react';
import "./App.css";
import Breakfast from './Component/Breakfast';
import Lunch from './Component/Lunch';
import Dinner from './Component/Dinner';



class Timess extends React.Component {
  render() {
    class Time extends React.Component {
      constructor() {
        super();
        this.state = {
          currentTime: new Date().getSeconds(),
        };
      }

      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({
            currentTime: new Date().getSeconds(),
          });
        }, 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      render() {
        let call;

        if (this.state.currentTime >= 0 && this.state.currentTime < 20) {
          call = <Breakfast />;
        } else if (this.state.currentTime >= 20 && this.state.currentTime < 40) {
          call = <Lunch />;
        } else if (this.state.currentTime >= 40 && this.state.currentTime < 60) {
          call = <Dinner />;
        }

        return (
          <>
            <h1></h1>
            <div className='master'>
            <h1 className='abc'>Project Explorer</h1>
              <h1>{this.state.currentTime}</h1>
              <div>{call}</div>
            </div>
          </>
        );
      }
    }

    return (
      <div>
        <Time />
      </div>
    );
  }
}

export default Timess;