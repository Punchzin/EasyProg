import * as Style from "./Aside.styles.jsx";

// Props = Propriedades
const AsideAction = ({ actionIcon, actionTitle, actionIsSelected, onClick }) => {
    return (
        actionIsSelected ? (
            <Style.AsideActionSelected title={actionTitle} onClick={onClick}>
                <i className={actionIcon}></i>
            </Style.AsideActionSelected>
        ) : (
            <Style.AsideAction title={actionTitle} onClick={onClick}>
                <i className={actionIcon}></i>
            </Style.AsideAction>
        )
    )
}

export default AsideAction;