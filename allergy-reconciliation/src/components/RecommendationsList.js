import React from 'react';
import { connect } from 'react-redux';
import CurrentAllergiesPanel from './CurrentAllergiesPanel'
import RecommendedChanges from './RecommendedChanges';
import UserAction from './UserAction';

import { initRecommendations, acceptRecommendation } from '../actions';

class RecommendationsList extends React.Component {
    renderList() {
        return this.props.recommendations.map(recommendation => {
            return (
                <div key={recommendation.id} class="w3-cell-row w3-border-bottom">
                    <div class="w3-cell w3-cell-middle" style={{width:'10%'}}>
                        {recommendation.recommendation}
                    </div>
                    <div class="w3-cell w3-cell-middle" style={{width:'30%'}}>
                        <CurrentAllergiesPanel recommendationId={recommendation.id} />
                    </div>
                    <div class="w3-cell w3-cell-middle" style={{width:'5%'}}>
                        <div><i class="fa fa-arrow-right w3-text-green w3-xxlarge"></i></div>
                    </div>
                    <div class="w3-cell w3-cell-middle" style={{width:'20%'}}>
                        <RecommendedChanges recommendationId={recommendation.id} />
                    </div>
                    <div class="w3-cell w3-mobile w3-cell-middle" style={{width:'20%'}}>
                        <div class="w3-container">
                            <p>{recommendation.reasons}</p>
                        </div>
                    </div>
                    <div class="w3-cell w3-mobile w3-cell-middle" style={{width:'15%'}}>
                        <UserAction recommendationId={recommendation.id} 
                                    curUserAction={recommendation.userAction}
                        />
                    </div>
                </div>
            );
        });
    }
    
    render() {

        //console.log(this.props);
        return(<div>{this.renderList()}</div>);
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { recommendations: state.recommendations };
}

export default connect(mapStateToProps,{
    initRecommendations: initRecommendations,
    acceptRecommendation: acceptRecommendation
})(RecommendationsList);