import React from 'react';
import { connect } from 'react-redux';
import { acceptRecommendation, declineRecommendation, undoRecommendation } from '../actions';

class UserAction extends React.Component {
    render() {
        //console.log('user act: ',this.props);
        const userAction = this.props.recommendation.userAction;
        if (this.props.recommendation.userAction === 'N') {
            return(<div>
            <button class="w3-button w3-tiny w3-green" 
                onClick={() => this.props.acceptRecommendation(this.props.recommendation.id)}
                >Accept</button>
            <button class="w3-button w3-tiny w3-red"
                onClick={() => this.props.declineRecommendation(this.props.recommendation.id)}
                >Decline</button>
            </div>);
        }
        else if (userAction === 'A') {
            return(<div>
                <div><i class="fa fa-check w3-text-green"></i><span>Accepted</span></div>
                <button class="w3-button w3-tiny w3-blue"
                onClick={() => this.props.undoRecommendation(this.props.recommendation.id)}                
                >undo</button>
                </div>);
        } 
        else if (this.props.recommendation.userAction === 'D') {
            return(<div>
                <div><i class="fa fa-times w3-text-red"></i><span>Declined</span></div>
                <button class="w3-button w3-tiny w3-blue"
                onClick={() => this.props.undoRecommendation(this.props.recommendation.id)}                
                >undo</button>
                </div>);
        }
        return(<div>oops</div>)
    }

}

const mapStateToProps = (state, ownProps) => {
    const aryIndex = state.recommendations.findIndex(x => x.id === ownProps.recommendationId);
    return {recommendation: state.recommendations[aryIndex]};
};

export default connect(mapStateToProps,{
    acceptRecommendation: acceptRecommendation,
    declineRecommendation: declineRecommendation,
    undoRecommendation: undoRecommendation
})(UserAction);