"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[744],{3744:function(e,n,s){s.r(n),s.d(n,{default:function(){return q}});var o=s(5671),t=s(3144),r=s(136),l=s(8557),i=s(364),a=s(5710),u=s(2791),c=s(8250),d=s(1523),g=s(7788),h=s(7734),f=s(1358),p="User_userContainer__Q4qmA",w="User_inner__AByqz",C="User_info__Bhi7Z",P="User_link__JIJq9",m=s(184),_=g.Z.Text,x=g.Z.Title,U=function(e){return(0,m.jsxs)("div",{className:p,children:[(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)(h.C,{size:72,src:e.photos.small||"https://placehold.jp/150x150.png"}),(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)(d.OL,{to:"/profile/"+e.id,className:P,children:(0,m.jsx)(x,{level:4,style:{margin:"0"},children:e.name})}),(0,m.jsx)(_,{type:"secondary",style:{fontSize:"1rem"},children:e.status||"no status :("})]})]}),(0,m.jsx)(f.Z,{size:"large",onClick:e.followed?e.onUnFollowClickHandler:e.onFollowClickHandler,loading:e.isLoading,disabled:e.isLoading,shape:"round",children:e.followed?"Unfollow":"Follow"})]})},j="Users_container__HWUVK",F="Users_pagination__jdOgH",v=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:j,children:e.users.map((function(n){return(0,m.jsx)(U,{id:n.id,name:n.name,status:n.status,followed:n.followed,photos:n.photos,isLoading:-1!==e.followingInProgress.indexOf(n.id),onFollowClickHandler:function(){e.setFollow(n.id)},onUnFollowClickHandler:function(){e.setUnFollow(n.id)}},n.id)}))}),(0,m.jsx)("div",{className:F,children:(0,m.jsx)(c.Z,{size:"default",total:e.totalCount,showTotal:function(e){return"Total ".concat(e," items")},defaultPageSize:12,showTitle:!1,current:e.currentPage,onChange:function(n){return e.setCurrentPage(n)},showSizeChanger:!1})})]})},k=s(7781),y=s(4781),Z=function(e){return e.usersPage.users},z=function(e){return e.usersPage.isFetching},H=function(e){return e.usersPage.totalCount},I=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.followingInProgress},T=function(e){(0,r.Z)(s,e);var n=(0,l.Z)(s);function s(){var e;(0,o.Z)(this,s);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=n.call.apply(n,[this].concat(r))).onPageChanged=function(n){e.props.getUsers(n)},e}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage)}},{key:"componentWillUnmount",value:function(){this.props.setCurrentPage(1)}},{key:"render",value:function(){return this.props.isFetching?(0,m.jsx)(y.x,{}):(0,m.jsx)(v,{users:this.props.users,totalCount:this.props.totalCount,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,setFollow:this.props.setFollow,setUnFollow:this.props.setUnFollow,setCurrentPage:this.onPageChanged})}}]),s}(u.Component),q=(0,k.qC)((0,i.$j)((function(e){return{users:Z(e),isFetching:z(e),totalCount:H(e),currentPage:I(e),followingInProgress:N(e)}}),{setFollow:a.vl,setUnFollow:a.Ul,setCurrentPage:a.D4,getUsers:a.Rf}))(T)}}]);
//# sourceMappingURL=744.71fa1eae.chunk.js.map