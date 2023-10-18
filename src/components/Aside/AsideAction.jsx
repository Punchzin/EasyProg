import * as Style from "./Aside.styles.jsx";

// Props = Propriedades
const AsideAction = ({ actionIcon, actionTitle, actionIsSelected = false, onClick }) => {
    return (
        <Style.AsideAction title={actionTitle} onClick={onClick}>
            <i className={actionIcon}></i>
        </Style.AsideAction>
    )
}

export default AsideAction; 