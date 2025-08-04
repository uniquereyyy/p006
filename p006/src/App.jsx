
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {index: 0, slideCount: 3};
    this.autoSlide = this.autoSlide.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }
  autoSlide(){
    let nextIndex = (this.state.index + 1) % this.state.slideCount; 
    document.getElementById("slideRef").style.transform = `translateX(-${nextIndex * 100}%)`;
    this.setState({index: nextIndex});
  }
  render() {
    const{index, slideCount} = this.state;
    return (
      <>
        <header>
          <div className='logo'>Sliding Page - Slide {index}</div>
        </header>
        <section>
          <div className='slider'>
            <div className='slides' id='slideRef'>
              <div className='slide s1'></div>
              <div className='slide s2'></div>
              <div className='slide s3'></div>
            </div>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;