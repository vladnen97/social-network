"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[206],{9206:function(e,t,s){s.r(t),s.d(t,{default:function(){return ue}});var i=s(5671),o=s(3144),a=s(136),n=s(8557),r=s(2791),l=s(6407),d="Post_item__tkc3E",c="Post_divider__E0c3q",u="Post_content__hJScu",m="Post_active__btXe7",h=s(5719),p=s(1333),v=s(184);function f(e){var t=e.name,s=e.date,i=e.postContent,o=e.likes,a=e.comments;return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)(h.$,{size:64,url:"https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",name:t,status:s}),(0,v.jsx)(p.Z,{className:c}),(0,v.jsx)("div",{className:u,children:i}),(0,v.jsxs)("div",{className:m,children:["likes: ",(0,v.jsxs)("span",{children:[" ",o," "]})," comments: ",(0,v.jsxs)("span",{children:[" ",a," "]})]})]})}var x="Wall_wall__YDXev",j="SubmitPost_submitPost__kIvGi",b=s(177),g=s(7309),k=s(6139),_=s(704),Z=s(9906),y=s(4193),N=b.Z.TextArea,C=(0,Z.P)(N),w=(0,y.C1)(!1);var P=(0,_.Z)({form:"add-post"})((function(e){return(0,v.jsxs)("form",{className:j,onSubmit:e.handleSubmit,children:[(0,v.jsx)(k.Z,{component:C,name:"postText",placeholder:"What's new?",size:"large",autoSize:{minRows:2,maxRows:8},hasFeedback:!0,validate:[w]}),(0,v.jsx)(g.Z,{size:"large",htmlType:"submit",shape:"round",disabled:e.pristine,children:" Post "})]})})),S=(0,r.memo)((function(e){var t=e.posts,s=e.addPost,i=t.map((function(e){return(0,v.jsx)(f,{name:e.name,date:e.date,postContent:e.postContent,likes:e.likes,comments:e.comments},e.id)}));return(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)(P,{onSubmit:function(e){s(e.postText)}}),i]})})),z=s(364),M=(0,z.$j)((function(e){return{posts:e.profilePage.posts}}),{addPost:l.q2})(S),A=s(1413),F=s(9439),D="Header_header__steta",I="Header_cover__DuRDG",J="Header_inner__SXYVf",H="Header_avatar__2ipqr",E="Header_info__gWUm4",U="Header_ownerName__tqZle",T="Header_status__vSU9j",R="Header_statusText__n8kua",q="Header_fullInfo__WaQ2P",L=s(5594),$=s(7734);function G(e){var t=e.url,s=e.online;return(0,v.jsx)("div",{className:H,children:(0,v.jsx)(L.Z,{dot:!0,offset:[-35,160],color:s?"green":"grey",style:{width:"20px",height:"20px",border:"2px solid white"},children:(0,v.jsx)($.C,{size:180,src:t||"https://placehold.jp/180x180.png"})})})}function W(e){var t=e.name;return(0,v.jsx)("h2",{className:U,children:t||"Name Surname"})}var Y=b.Z.TextArea,V=function(e){(0,a.Z)(s,e);var t=(0,n.Z)(s);function s(){var e;(0,i.Z)(this,s);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.setState({status:e.props.status})},e.onChangeHandler=function(t){e.setState({status:t.currentTarget.value})},e.onEnterPressHandler=function(t){"Enter"===t.key&&(e.deactivateEditMode(),e.props.updateStatus(e.state.status.trim()))},e}return(0,o.Z)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return(0,v.jsx)("div",{className:T,children:this.state.editMode?(0,v.jsx)(Y,{size:"middle",autoSize:{minRows:1,maxRows:3},placeholder:"Tell us something...",maxLength:230,autoFocus:!0,value:this.state.status,onChange:this.onChangeHandler,onBlur:this.deactivateEditMode,onKeyDown:this.onEnterPressHandler}):(0,v.jsx)("span",{className:R,onDoubleClick:this.activateEditMode,children:this.props.status||"no status :("})})}}]),s}(r.Component),X=s(2988),K=s(4587),B=s(3441),O=b.Z.TextArea,Q=(0,Z.P)(b.Z),ee=(0,Z.P)(K.Z),te=(0,Z.P)(O),se=(0,y.C1)(!0),ie=(0,y.C1)(!1),oe=(0,_.Z)({form:"edit-profile"})((function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{style:{minHeight:"55px"},children:e.error&&(0,v.jsx)(B.Z,{message:e.error,type:"error",showIcon:!0,closable:!0})}),(0,v.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,v.jsx)(k.Z,{name:"fullName",label:"Name",component:Q,validate:[se],size:"middle"}),(0,v.jsx)(k.Z,{name:"aboutMe",label:"about Me",component:te,validate:[ie],rows:3,size:"middle"}),(0,v.jsx)(k.Z,{name:"lookingForAJob",label:"Looking for a job",component:ee,size:"middle",type:"checkbox"}),(0,v.jsx)(k.Z,{name:"lookingForAJobDescription",label:"My professional skills",component:te,validate:[ie],rows:3,size:"middle"}),(0,v.jsx)(k.Z,{name:"vk",label:"VK",component:Q,size:"middle"}),(0,v.jsx)(k.Z,{name:"facebook",label:"Facebook",component:Q,size:"middle"}),(0,v.jsx)(k.Z,{name:"github",label:"Github",component:Q,size:"middle"}),(0,v.jsx)(k.Z,{name:"twitter",label:"Twitter",component:Q,size:"middle"}),(0,v.jsx)(k.Z,{name:"instagram",label:"Instagram",component:Q,size:"middle"}),(0,v.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,v.jsx)(g.Z,{size:"middle",htmlType:"submit",shape:"round",type:"primary",disabled:e.pristine||e.submitting,children:"Save"})})]})]})}));var ae=s(7781),ne=s(9271),re=(0,ae.qC)((0,z.$j)((function(e){return{header:e.profilePage.header,status:e.profilePage.status}}),{updateStatus:l.Nf,uploadPhoto:l.mJ,updateProfileData:l.y}),ne.EN)((function(e){var t,s,i,o,a,n,l=e.header,d=e.status,c=e.updateStatus,u=e.uploadPhoto,m=e.match,h=e.updateProfileData,p=(0,r.useState)(!1),f=(0,F.Z)(p,2),x=f[0],j=f[1],b=(0,r.useState)(!1),k=(0,F.Z)(b,2),_=k[0],Z=k[1];return(0,v.jsxs)("div",{className:D,children:[(0,v.jsx)("div",{className:I}),(0,v.jsxs)("div",{className:J,children:[(0,v.jsx)(G,{online:!1,url:null===(t=l.photos)||void 0===t?void 0:t.large}),(0,v.jsxs)("div",{className:E,children:[(0,v.jsx)(W,{name:null===l||void 0===l?void 0:l.fullName}),(0,v.jsx)(V,{status:d,updateStatus:c}),(0,v.jsxs)("div",{className:q,children:[(0,v.jsx)(g.Z,{type:"primary",onClick:function(){j(!0)},shape:"round",size:"middle",children:"Learn more"}),(0,v.jsx)(X.Z,{title:"Additional info",visible:x,width:800,onCancel:function(){j(!1),Z(!1)},footer:m.params.userId?[(0,v.jsx)(g.Z,{onClick:function(){return j(!1)},shape:"round",children:"Cancel"},"back")]:[(0,v.jsx)(g.Z,{onClick:function(){j(!1),Z(!1)},shape:"round",children:"Cancel"},"back"),(0,v.jsx)(g.Z,{type:"primary",shape:"round",onClick:function(){Z(!0),Z(!_)},children:"Edit"},"edit")],children:_?(0,v.jsx)(oe,{onSubmit:function(e){var t={userId:l.userId,fullName:e.fullName,aboutMe:e.aboutMe,lookingForAJob:e.lookingForAJob||l.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,contacts:(0,A.Z)((0,A.Z)({},l.contacts),{},{vk:e.vk||l.contacts.vk,github:e.github||l.contacts.github,facebook:e.facebook||l.contacts.facebook,instagram:e.instagram||l.contacts.instagram,twitter:e.twitter||l.contacts.twitter})};h(t)},initialValues:{fullName:null===l||void 0===l?void 0:l.fullName,aboutMe:l.aboutMe,lookingForAJob:l.lookingForAJob,lookingForAJobDescription:l.lookingForAJobDescription,vk:l.contacts.vk,github:l.contacts.github,facebook:l.contacts.facebook,instagram:l.contacts.instagram,twitter:l.contacts.twitter}}):(0,v.jsxs)("div",{style:{fontSize:"21px",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,v.jsxs)("div",{children:["id: ",(null===l||void 0===l?void 0:l.userId)||"---"]}),(0,v.jsxs)("div",{children:["name: ",(null===l||void 0===l?void 0:l.fullName)||"---"]}),(0,v.jsxs)("div",{children:["about: ",(0,v.jsx)("i",{children:null===l||void 0===l?void 0:l.aboutMe})||"---"]}),(0,v.jsxs)("div",{children:["looking for a job: ",null!==l&&void 0!==l&&l.lookingForAJob?"Yes":"No"]}),(0,v.jsxs)("div",{children:["My professional skills: ",(0,v.jsx)("i",{children:null===l||void 0===l?void 0:l.lookingForAJobDescription})||"---"]}),(0,v.jsxs)("ul",{children:[(0,v.jsxs)("li",{children:["vk: ",(null===l||void 0===l||null===(s=l.contacts)||void 0===s?void 0:s.vk)||"---"]}),(0,v.jsxs)("li",{children:["facebook: ",(null===l||void 0===l||null===(i=l.contacts)||void 0===i?void 0:i.facebook)||"---"]}),(0,v.jsxs)("li",{children:["github: ",(null===l||void 0===l||null===(o=l.contacts)||void 0===o?void 0:o.github)||"---"]}),(0,v.jsxs)("li",{children:["twitter: ",(null===l||void 0===l||null===(a=l.contacts)||void 0===a?void 0:a.twitter)||"---"]}),(0,v.jsxs)("li",{children:["instagram: ",(null===l||void 0===l||null===(n=l.contacts)||void 0===n?void 0:n.instagram)||"---"]})]})]})})]})]}),!m.params.userId&&(0,v.jsxs)("label",{children:["Upload profile photo ",(0,v.jsx)("br",{}),(0,v.jsx)("input",{type:"file",onChange:function(e){var t;u(null===(t=e.target.files)||void 0===t?void 0:t[0])}})]})]})]})}));function le(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(re,{}),(0,v.jsx)(M,{})]})}var de=s(4781),ce=function(e){(0,a.Z)(s,e);var t=(0,n.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){var e=Number(this.props.match.params.userId);e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.isLoading?(0,v.jsx)(de.x,{}):(0,v.jsx)(le,{})}}]),s}(r.Component),ue=(0,ae.qC)((0,z.$j)((function(e){return{isLoading:e.profilePage.isLoading,authUserId:e.auth.id}}),{getProfile:l.Ai,getStatus:l.lR}),ne.EN)(ce)},5719:function(e,t,s){s.d(t,{$:function(){return d}});s(2791);var i=s(7734),o="CardUser_cardUser__OnM35",a="CardUser_info__Gza+s",n="CardUser_name__RIwy2",r="CardUser_status__YjUi6",l=s(184);function d(e){var t=e.size,s=e.url,d=e.name,c=e.status;return(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)(i.C,{size:t,src:s}),(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("div",{className:n,children:d}),(0,l.jsx)("div",{className:r,children:c})]})]})}}}]);
//# sourceMappingURL=206.8ba3defb.chunk.js.map