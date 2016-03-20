import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Discover extends Component{
	render() {
		const style={
			backgroundImage: 'url(http://ww2.sinaimg.cn/mw1024/76b229d7jw1dwnvs81sk8j.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize : 'cover',
			height: '400px',
			width : '100%',
			paddingTop: '185px',
			color: '#fff',
			textAlign: 'center',
			letterSpacing : '16px',
			fontSize: '1.8rem'
		}
		return(
			<div className="fullpage-gray">
				<Header title="发现" hasReturn={false} />
				<section style={{textAlign: 'center', marginTop : 100}}>
					<p>施工中...</p>
				</section>
        <Footer />
      </div>
		);
	}
}
