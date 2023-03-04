import {Navbar} from "./Navbar";
import {changeCollapsedMenu} from "../../Redux/app-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import React from "react";


type MapStatePropsType = {
    isMenuOpen: boolean
}

type MapDispatchToProps = {
    changeCollapsedMenu: (isCollapsed: boolean) => void
}

type PropsType = AuthPropsType
type AuthPropsType = MapStatePropsType & MapDispatchToProps

class NavbarContainer extends React.Component<PropsType, any> {


    render() {
        return (
            <Navbar {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => (
    {
        isMenuOpen: state.appInitialReducer.isMenuOpen,
    }
)


export default connect(mapStateToProps, {changeCollapsedMenu})(NavbarContainer)