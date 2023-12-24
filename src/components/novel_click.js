import React, { Component } from 'react'
import novels from './novels'
import novelInfo from './novelInfo'


class Team extends Component {

    // البنّاء    
    constructor() {
        super()
        this.state = {
            novelInfo: novelInfo,
            members: [],
            counter: 0,
        }
        this.clickEvent = this.clickEvent.bind(this)
    }


    // التعامل مع الأحداث
    clickEvent() {
        if (this.state.counter < this.state.novelInfo.length) {
            this.state.members.push(this.state.novelInfo[this.state.counter]);
            this.setState(function (prevState) {
                return { counter: prevState.counter + 1 }
            });
            this.newnovelInfo= this.state.members.map(member => {
                return <novels  key={member.id} img={member.img} name={member.name}
                   Year={member.Year} Publisher={member.Publisher}
                   series={member.series}  />
            })
        }
    }



    // الطباعة
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={this.clickEvent}>click me!</button>
                </div>
                {this.newnovelInfo}

            </div>
        )
    }
}

export default Team;