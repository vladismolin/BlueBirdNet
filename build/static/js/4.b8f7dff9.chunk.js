(this["webpackJsonptest-lesson-3a"]=this["webpackJsonptest-lesson-3a"]||[]).push([[4],{296:function(e,n,t){e.exports={photo:"users_photo__194L2",info:"users_info__2HJ7N",status:"users_status__2-fS8",main:"users_main__3QhW_",name:"users_name__2Xz29",country:"users_country__3-Df2"}},297:function(e,n,t){e.exports={selectedPage:"pagination_selectedPage__31Jhk",spanItem:"pagination_spanItem__1tysF",paginationNav:"pagination_paginationNav__1n22g",button:"pagination_button__3BOCQ"}},299:function(e,n,t){"use strict";t.r(n);var a=t(35),r=t(36),o=t(39),s=t(38),u=t(0),l=t.n(u),i=t(11),c=t(98),p=t(17),f=t(296),g=t.n(f),m=t(90),h=t(297),d=t.n(h),v=function(e){for(var n=e.totalItemsCount,t=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.porsionSize,s=void 0===o?15:o,i=Math.ceil(n/t),c=[],p=1;p<=i;p++)c.push(p);var f=Math.ceil(i/s),g=Object(u.useState)(1),h=Object(m.a)(g,2),v=h[0],P=h[1],_=(v-1)*s+1,w=v*s;return l.a.createElement("div",{className:d.a.paginationNav},v>1&&l.a.createElement("button",{className:d.a.button,onClick:function(){P(v-1)}},"Prev"),c.filter((function(e){return e>=_&&e<=w})).map((function(e){return l.a.createElement("span",{className:d.a.spanItem},l.a.createElement("span",{className:a===e&&d.a.selectedPage,onClick:function(n){r(e)}},e,"\xa0"))})),f>v&&l.a.createElement("button",{className:d.a.button,onClick:function(){P(v+1)}},"Next"))},P=function(e){return l.a.createElement("div",null,l.a.createElement(v,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),e.usersData.map((function(n){return l.a.createElement("div",{className:g.a.main,key:n.id},l.a.createElement("div",null,l.a.createElement("div",{className:g.a.info},l.a.createElement("div",null,l.a.createElement(p.b,{to:"/profile/".concat(n.id)},l.a.createElement("img",{className:g.a.photo,src:null!=n.photos.small?n.photos.small:"https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png"})),l.a.createElement("span",null,l.a.createElement("span",{className:g.a.name},n.name),n.status?l.a.createElement("span",{className:g.a.status},"Status: ",n.status):l.a.createElement("span",{className:g.a.status},"Status: ---"),l.a.createElement("span",{className:g.a.country}))),l.a.createElement("div",null,n.followed?l.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===n.id})),onClick:function(){e.unfollowThunk(n.id)}},"Unfollow"):l.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===n.id})),onClick:function(){e.followThunk(n.id)}},"Follow")))))})))},_=t(40),w=(t(97),t(8));function E(e,n){return e===n}function b(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var a=n.length,r=0;r<a;r++)if(!e(n[r],t[r]))return!1;return!0}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var y=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var o=0,s=a.pop(),u=k(a),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,t=null,a=null;return function(){return b(n,t,arguments)||(a=e.apply(null,arguments)),t=arguments,a}}));var C=y((function(e){return e.usersPage}),(function(e){return e.usersData})),N=function(e){return e.usersPage.pageSize},S=function(e){return e.usersPage.totalUsersCount},I=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},T=function(e){return e.usersPage.followingInProgress},j=function(e){Object(o.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.getUsersThunk(n,e.props.pageSize)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.isFetching?l.a.createElement(_.a,null):null,l.a.createElement(P,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersData:this.props.usersData,followThunk:this.props.followThunk,unfollowThunk:this.props.unfollowThunk,followingInProgress:this.props.followingInProgress}))}}]),t}(l.a.Component);n.default=Object(w.compose)(Object(i.b)((function(e){return{usersData:C(e),pageSize:N(e),totalUsersCount:S(e),currentPage:I(e),isFetching:z(e),followingInProgress:T(e)}}),{setCurrentPage:c.e,isfollowingInProgress:c.d,getUsersThunk:c.c,followThunk:c.b,unfollowThunk:c.f}))(j)}}]);
//# sourceMappingURL=4.b8f7dff9.chunk.js.map