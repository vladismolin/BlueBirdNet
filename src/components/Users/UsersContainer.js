import React from 'react';
import {connect} from 'react-redux';
import {
    followThunkCreator,
    getUsersThunkCreator,
    isFollowingInProgressAC,
    setCurrentPageAC,
    unfollowThunkCreator
} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../Redux/users-selectors';


class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>

                {this.props.isFetching ? < Preloader/> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersData={this.props.usersData}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk}
                    followingInProgress={this.props.followingInProgress}/>
            </>);
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        isfollowingInProgress: isFollowingInProgressAC,
        getUsersThunk: getUsersThunkCreator,
        followThunk: followThunkCreator,
        unfollowThunk: unfollowThunkCreator
    })
)
(UsersApiComponent);
