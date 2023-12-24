import React, {Component} from 'react'

class novels extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card" style={{borderColor: this.props.website ? '' : 'red'}}>
                    <div className="card-header">
                        <img style={{maxWidth: '50%'}} src={this.props.img} alt={this.props.name} />
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.Year}</h5>
                        <div>{this.props.Publisher}</div>
                        <div>{this.props.series}</div>
                    </div>
                </div>
            </div>
           )
    }
}

export default novels