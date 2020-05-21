export const initRecommendations = () => {
    return {
        type: 'INIT'
    };
};

export const acceptRecommendation = (id) => {
    return {
        type: 'ACCEPT_RECOMMENDATION',
        payload: id
    };
};

export const declineRecommendation = (id) => {
    return {
        type: 'DECLINE_RECOMMENDATION',
        payload: id
    };
};

export const undoRecommendation = (id) => {
    return {
        type: 'UNDO_RECOMMENDATION',
        payload: id
    };
};

