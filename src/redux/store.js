import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import kanbanControlPanel from "./reduser";

const store = createStore(kanbanControlPanel, composeWithDevTools(
    applyMiddleware(),
));

export default store;
