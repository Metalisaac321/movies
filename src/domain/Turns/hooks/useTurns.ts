import { useHistory, useRouteMatch } from "react-router-dom";

export default () => {
    const history = useHistory();
    let { path } = useRouteMatch();

    const handleNewTurn = () => {
        history.push(`${path}/add-new-turn`);
    }

    return {
        handleNewTurn,
    }
}