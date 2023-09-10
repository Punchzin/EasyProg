import * as Style from "./Aside.styles.jsx";

// Props = Propriedades
const AsideAction = ({ actionIcon, actionTitle, actionIsSelected }) => {
    return (
        actionIsSelected ? (
            <Style.AsideActionSelected title={actionTitle}>
                <i className={actionIcon}></i>
            </Style.AsideActionSelected>
        ) : (
            <Style.AsideAction title={actionTitle}>
                <i className={actionIcon}></i>
            </Style.AsideAction>
        )
    )
}

export default AsideAction;