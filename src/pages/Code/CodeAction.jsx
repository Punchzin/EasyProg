import * as Style from "./Code.styles.jsx";

// Props = Propriedades
const CodeAction = ({ actionIcon, actionTitle, actionIsSelected = false, onClick }) => {
    return (
        <Style.CodeAction title={actionTitle} onClick={onClick}>
            <i className={actionIcon}></i>
        </Style.CodeAction>
    )
}

export default CodeAction; 