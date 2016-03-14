import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'

export default class Discover extends Component{
	render() {
		return(
			<div className="fullpage-gray">
				<Header title="活动列表" />
        <section className="tab">
          <a href="javascript:;" className="current">按时间</a>
          <a href="javascript:;">按热度</a>
        </section>
      </div>
		);
	}
}
