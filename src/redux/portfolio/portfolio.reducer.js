import PORTFOLIO_DATA from './portfolio.data'

const INITIAL_STATE = {
    items: PORTFOLIO_DATA
}

const portfolioReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default portfolioReducer