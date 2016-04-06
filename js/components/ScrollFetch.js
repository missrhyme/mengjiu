import React, {Component, PropTypes} from 'react';
import { debounce } from 'underscore';

export default class ScrollFetch extends Component {
  constructor(props) {
    super(props);
    this.flag = true;
    this.scrollHandle = debounce(this.scrollHandle, 10).bind(this);
  }

  static defaultProps = {
    handle   : () => new Promise( (resolve, reject) => {
      resolve('success')
    }), //promiseFunc
    callback : ()=>{}
  }

  componentWillMount(){
    window.addEventListener('scroll', this.scrollHandle );
  }

  componentWillUnmount () {
  	window.removeEventListener('scroll', this.scrollHandle );
	}

  render(){
    return(
      <section style={{textAlign:'center'}}>
        加载中...
      </section>
    )
  }

  scrollHandle(){
    const docHeight    = $(document).height();
		const scrollTop    = $(window).scrollTop();
		const windowHeight = $(window).height();
		const temp = docHeight - windowHeight - scrollTop - 30 < 0;
    //console.log(this.props.handle);
    if( this.flag && temp ){
      this.flag = false;
      this.props.handle().then(
       () => {
         this.flag = true;
         this.props.callback();
       }
      );
    }
  }
}
