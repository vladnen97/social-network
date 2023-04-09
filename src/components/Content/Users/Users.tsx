import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=6&page=${this.props.currentPage}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.onPageClick(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=6&page=${page}`)
            .then(res => {this.props.setUsers(res.data.items)})
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalCount / this.props.limit)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages[i-1] = i
        }

        return (
            <>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '778px'}}>
                    {
                        this.props.users.map(el => {

                            const onFollowClickHandler = () => {
                                this.props.onFollowClick(el.id)
                            }
                            const onUnFollowClickHandler = () => {
                                this.props.onUnFollowClick(el.id)
                            }

                            return <div key={el.id} style={{
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                padding: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <img style={{width: '80px', height: '80px', borderRadius: '50%'}}
                                     src={el.photos.small || 'https://placehold.jp/150x150.png'} alt=""/>
                                <div style={{textAlign: 'center'}}>
                                    <h2>{el.name}</h2>
                                    <div style={{fontSize: '17px', margin: '10px 5px'}}>
                                        <em>{el.status || 'status...'}</em>
                                    </div>
                                </div>
                                {el.followed
                                    ? <button onClick={onUnFollowClickHandler}>Unfollow</button>
                                    : <button onClick={onFollowClickHandler}>Follow</button>
                                }
                            </div>
                        })}
                </div>
                <div style={ {paddingTop: '40px', display: 'flex', justifyContent: 'center', gap: '14px', fontSize: '21px', alignItems: 'baseline'} }>
                    {
                        pages.map(el => <span key={el} style={this.props.currentPage === el ? {fontSize: '25px', fontWeight: 'bold', cursor: 'pointer'} : {cursor: 'pointer'}} onClick={() => this.onPageChanged(el)}>{el}</span>).slice(0,10)
                    }
                </div>
            </>
        )
    }
}

