(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdd5daee"],{"339c":function(t,e,s){},"375a":function(t,e,s){},"53eb4":function(t,e,s){"use strict";s("375a")},"69a8":function(t,e,s){t.exports=s.p+"img/picture.ea369ff0.png"},"78e0":function(t,e,s){"use strict";s("339c")},8575:function(t,e,s){"use strict";s("c1d4")},"9b94":function(t,e,s){},bd46:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("div",{staticClass:"personal"},[e("div",{staticClass:"personal-left"},[e("div",{staticClass:"personal-avatar"},[t.item.author?e("Avatar",{attrs:{isShowNickname:!0,avatarSize:40,userId:t.item.author}},[e("div",{staticClass:"personal-style",attrs:{slot:"bottom"},slot:"bottom"},[t._v(t._s(t.$t("community_posted"))+" "+t._s(t._f("relativeTime")(t.item.created)))])]):t._e()],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.token,expression:"token"}]},[t.item.author==t.userInfo.customerId?e("DeletePost",{attrs:{deleteId:t.item.id},on:{confirm:function(e){return t.confirm(t.index)}}}):e("Report",{attrs:{item:t.item,"is-post":!0}})],1)]),e("div",{staticClass:"post-content"},[t.item.content?e("div",{staticClass:"post-text"},[e("EditParse",{attrs:{content:t.item.content,isHide:t.filterRoute}})],1):t._e(),t.item.href?e("div",{staticClass:"post-link",on:{click:function(e){return e.stopPropagation(),t.openUrlModus(t.item.href)}}},[e("img",{staticClass:"link-img",attrs:{src:t.handleLink(t.item.attachContent).imgUrl||t.base64Avatar}}),e("div",[t.handleLink(t.item.attachContent).title?e("div",{staticClass:"link-title"},[t._v(t._s(t.handleLink(t.item.attachContent).title))]):t._e(),t.handleLink(t.item.attachContent).description?e("div",{staticClass:"link-des"},[t._v(t._s(t.handleLink(t.item.attachContent).description))]):t._e(),t.handleLink(t.item.attachContent).description?t._e():e("div",{staticClass:"link-detail"},[t._v(t._s(t.item.href.trim()))])])]):t._e()]),t.item.urls?e("div",[e("Album",{attrs:{imgs:t.item.urls}})],1):t._e(),t.item.videoUrl?e("div",{staticClass:"post-video",on:{click:function(t){t.stopPropagation()}}},[e("video",{staticClass:"video",attrs:{controls:"controls",src:t.item.videoUrl,id:t.item.id},on:{play:function(e){return t.handlePlay(t.item.id)}}},[t._v(" "+t._s(t.$t("community_support_video"))+" ")])]):t._e(),e("div",{staticClass:"follow-like"},[e("div",{staticClass:"follow-like-left",on:{click:function(e){return e.stopPropagation(),t.postLikeOrDislike(t.item)},mouseover:t.mouseoverLeft,mouseleave:t.mouseleaveLeft}},[e("div",{staticClass:"follow-like-left-box",class:{selectleft:t.mouseoverLeftData}},[e("svg-icon",{class:{select:t.item.isLike},attrs:{data_iconName:"awesome",className:"follow-like-left-icon",size:16}})],1),e("span",{class:{selectleftText:t.mouseoverLeftData}},[t._v(t._s(t.item.up))])]),e("div",{staticClass:"follow-like-right",on:{mouseover:t.mouseoverRight,mouseleave:t.mouseleaveRight}},[e("div",{staticClass:"follow-like-right-box",class:{selectright:t.mouseoverRightData}},[e("svg-icon",{attrs:{data_iconName:"comment2",className:"follow-like-right-icon",size:16}})],1),e("span",{class:{selectrightText:t.mouseoverRightData}},[t._v(t._s(t.item.comments))])])])])},o=[],a=(s("14d9"),s("f4053")),n=s("2f62"),l=s("df3a"),r={name:"WorkspaceJsonPostList",components:{Album:a["a"],Avatar:l["a"]},props:{item:Object,index:Number},computed:{...Object(n["d"])(["token","userInfo"]),filterRoute(){return"community-post"!=this.$route.name}},data(){return{mouseoverLeftData:!1,mouseoverRightData:!1,prefixUrl:"https://bandex-dev.oss-cn-shenzhen.aliyuncs.com",flag:!1,imgs:["https://img0.baidu.com/it/u=2810806728,4166654119&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img0.baidu.com/it/u=2066710797,1295269268&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800","https://img0.baidu.com/it/u=950234826,2310429801&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=725"],videoElement:[],likeId:"",base64Avatar:""+s("69a8")}},mounted(){this.videoElement=document.getElementsByTagName("video")},methods:{mouseoverLeft(){this.mouseoverLeftData=!0},mouseleaveLeft(){this.mouseoverLeftData=!1},mouseoverRight(){this.mouseoverRightData=!0},mouseleaveRight(){this.mouseoverRightData=!1},openUrlModus(t){window.open(t)},confirm(t){this.$emit("deletePost",t)},postDetailPush(t){this.token?3!==t.trendsStatus&&(1===t.postLikesType?this.$router.push(`/community/community-post/${t.trendsId}/${t.author}`):this.$router.push(`/community/community-post/${t.id}/${t.author}`)):this.$router.push("/login")},handlePlay(t){let e=document.getElementById(t).id;const s=this.videoElement;if(s&&s.length>0)for(let i=0;i<s.length;i++){let t=s[i].id;t===e?this.videoElement[i].play():this.videoElement[i].pause()}},postLikeOrDislike(t){this.token?1===t.postLikesType?(this.likeId=t.trendsId,t.isLike?this.$throttle(this.cancelLike):this.$throttle(this.handleLike)):(this.likeId=t.id,t.isLike?this.$throttle(this.cancelLike):this.$throttle(this.handleLike)):this.$router.push("/login")},async cancelLike(){try{const t=await this.$api.community.cancelLike({trendsId:this.likeId,commentId:"",likeType:1,likeObj:1});t.success&&(this.$notify({message:this.$t("community_cancel_success"),type:"success"}),this.$emit("handle",0,this.likeId))}catch(t){this.$handleError.handleApiRequestException(t)}},async handleLike(){try{const t=await this.$api.community.communityLike({trendsId:this.likeId,commentId:"",likeType:1,likeObj:1});t.success&&(this.$notify({message:this.$t("community_liked_successfully"),type:"success"}),this.$emit("handle",1,this.likeId))}catch(t){this.$handleError.handleApiRequestException(t)}},onFollowClick(t){this.token?t.isFollow?this.$throttle(()=>{this.cancelFollow(t.author)}):this.$throttle(()=>{this.follow(t.author)}):this.$router.push("/login")},async cancelFollow(t){try{if(this.flag)return;const e=await this.$api.community.cancelFollow({followUserId:t});e.success&&(this.$notify({message:this.$t("home_page_cancle_follow_success"),type:"success"}),this.$emit("handle",3,t))}catch(e){this.$handleError.handleApiRequestException(e)}},async follow(t){try{const e=await this.$api.community.follow({followUserId:t});e.success&&(this.$notify({message:this.$t("home_page_follow_success"),type:"success"}),this.$emit("handle",2,t))}catch(e){this.$handleError.handleApiRequestException(e)}},handleLink(t){try{const e=JSON.parse(t),s=e[0];return s.urlWebCard?s.urlWebCard:{}}catch(e){return console.warn(e),{}}}}},c=r,h=(s("78e0"),s("2877")),d=Object(h["a"])(c,i,o,!1,null,"5db05206",null);e["a"]=d.exports},c1d4:function(t,e,s){},dbb7:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{ref:"sdfasd",staticClass:"search-all-warp"},[e("div",{staticClass:"header-search"},[e("el-input",{ref:"editTask",attrs:{placeholder:t.$t("trade_Enter_search_keywords"),clearable:""},on:{input:t.input},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),"0"===t.isType?e("div",{staticClass:"tabs-box"},[e("div",{class:"tabs-item "+(1===t.tabsType?"tabs-active":""),on:{click:function(e){return t.jump(1,"trade")}}},[t._v(t._s(t.$t("trade_Traders")))]),e("div",{class:"tabs-item "+(2===t.tabsType?"tabs-active":""),on:{click:function(e){return t.jump(2,"quotation")}}},[t._v(t._s(t.$t("header_tab3")))]),e("div",{class:"tabs-item "+(3===t.tabsType?"tabs-active":""),on:{click:function(e){return t.jump(3,"Posts")}}},[t._v(t._s(t.$t("home_page_tab2")))])]):t._e()],1),e("div",{staticClass:"content-warp"},["1"==t.isType||"0"===t.isType?e("div",{ref:"trade",staticClass:"trade-content"},[e("div",{staticClass:"content-header"},[t._v(" "+t._s(t.$t("trade_Traders"))+" ")]),e("div",{staticClass:"tables-box"},[t._l(t.tableData,(function(t){return e("TradeItem",{key:t.id+t.nickName,staticClass:"item-box",attrs:{data:t}})})),0===t.tableData.length?e("el-empty",{staticStyle:{width:"100%"},attrs:{description:t.$t("trade_Currently_no_data"),image:s("f405")}}):t._e()],2)]):t._e(),"2"==t.isType||"0"===t.isType?e("div",{ref:"quotation",staticClass:"trade-content"},[e("div",{staticClass:"content-header"},[t._v(" "+t._s(t.$t("header_tab3"))+" ")]),e("div",{staticClass:"tables-box qiptatopm-warp"},[e("Market",{ref:"Market",attrs:{outsideSearch:t.content,isShowSearch:!1,isShowChart:!1}})],1)]):t._e(),"3"==t.isType||"0"===t.isType?e("div",{ref:"Posts",staticClass:"trade-content"},[e("div",{staticClass:"content-header"},[t._v(" "+t._s(t.$t("home_page_tab2"))+" ")]),e("div",{staticClass:"tables-box"},[e("PostList",{ref:"PostsList",attrs:{content:t.content}})],1)]):t._e()])])},o=[],a=s("0a1e"),n=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%"}},[t._l(t.showList,(function(s,i){return e("div",{key:s.id,on:{click:function(e){return t.$router.push(`/community/community-post/${s.id}/${s.author}`)}}},[e("Post",{attrs:{item:s,index:i},on:{handle:t.handle}})],1)})),0==t.showList.length?e("el-empty",{attrs:{image:s("e335"),"image-size":133,description:t.$t("notice_no_data")}}):e("div",{staticClass:"load-more"},[t._v(t._s(t.totalRows===t.showList.length?t.$t("notice_copy_over"):t.$t("notice_copy_load_more"))+" ")])],2)}),l=[],r=s("bd46"),c=s("2f62"),h={name:"WorkspaceJsonPostList",components:{Post:r["a"]},data(){return{content:"",prefixUrl:"https://bandex-dev.oss-cn-shenzhen.aliyuncs.com",page:1,size:10,totalRows:0,showList:[],isLoadingNextPage:!1,hasMore:!1,change:0,community:1}},computed:{...Object(c["d"])(["token","userInfo"])},watch:{community(t){this.hasMore=!1,1===t?this.getTrendsList(!0):2===t?this.getTrendsListByHot(!0):3===t&&this.getMyFollowTrends(!0),window.scrollTo(0,0)}},mounted(){},destroyed(){},methods:{scrollBottom(){let t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.scrollHeight||document.body.scrollHeight;e-t<=2700&&this.isLoadingNextPage&&(1===this.community?this.getTrendsList(!1):2===this.community?this.getTrendsListByHot(!1):3===this.community&&this.getMyFollowTrends(!1),this.isLoadingNextPage=!1)},handle(t,e){if(0===t)for(let s of this.showList)s.id==e&&(s.isLike=!1,s.up=s.up-1);if(1===t)for(let s of this.showList)s.id==e&&(s.isLike=!0,s.up=s.up+1);if(2===t)for(let s of this.showList)s.author==e&&(s.isFollow=!0);if(3===t)for(let s of this.showList)s.author==e&&(s.isFollow=!1)},async getTrendsList(t,e=""){if(t&&(this.page=1,this.hasMore=!1),!this.hasMore)try{const s=await this.$api.community.getTrendsList({page:this.page,size:this.size,queryText:e});if(s.success&&s.obj.data){let e=s.obj.data;if(this.totalRows=s.obj.totalRows,1===this.page&&0===e.length)return this.showList=e;e.length>0&&this.handleData(e,t),this.page*this.size<=this.totalRows&&(this.page=this.page+1),e.length<this.size&&(this.hasMore=!0)}}catch(s){this.$handleError.handleApiRequestException(s)}},async getTrendsListByHot(t){if(t&&(this.page=1),!this.hasMore)try{const e=await this.$api.community.getTrendsListByHot({page:this.page,size:this.size});if(e.success&&e.obj.data){let s=e.obj.data;if(this.totalRows=e.obj.totalRows,1===this.page&&0===s.length)return this.showList=s;s.length>0&&this.handleData(s,t),this.page*this.size<=this.totalRows&&(this.page=this.page+1),s.length<this.size&&(this.hasMore=!0)}}catch(e){this.$handleError.handleApiRequestException(e)}},async getMyFollowTrends(t){if(this.token){if(t&&(this.page=1),!this.hasMore)try{const e=await this.$api.community.getMyFollowTrends({page:this.page,size:this.size,userId:this.userInfo.customerId});if(e.success&&e.obj.data){let s=e.obj.data;if(this.totalRows=e.obj.totalRows,1===this.page&&0===s.length)return this.showList=s;s.length>0&&this.handleData(s,t),this.page*this.size<=this.totalRows&&(this.page=this.page+1),s.length<this.size&&(this.hasMore=!0)}}catch(e){this.$handleError.handleApiRequestException(e)}}else this.showList=[]},async handleData(t,e){if(t.forEach(t=>{if(t.attachContent){let e=JSON.parse(t.attachContent),s=[];e&&(e.map(e=>{1===e.type&&(t.href=e.url),2===e.type&&s.push(this.prefixUrl+e.url),3===e.type&&(t.videoUrl=e.url)}),s.length&&(t.urls=s))}}),t.length>0){const s=await this.checkIsLikeTrends(t);for(let e of t)for(let t in s)e.id==t&&(e.isLike=s[t]);const i=await this.checkIsFollow(t);for(let e of t)for(let t in i)e.author==t&&(e.isFollow=i[t]);this.showList=e?t:this.showList.concat(t),this.isLoadingNextPage=!0}},async checkIsLikeTrends(t){try{if(!this.token)return;const e=[];if(t&&t.length>0)for(let i of t)e.push(i.id);const s=await this.$api.community.checkIsLikeTrends({trendsIds:String(e)});return s.obj}catch(e){this.$handleError.handleApiRequestException(e)}},async checkIsFollow(t){try{if(!this.token)return;const e=[];if(t&&t.length>0)for(let i of t)e.push(i.author);const s=await this.$api.community.checkIsFollow({userIds:String(e)});return s.obj}catch(e){this.$handleError.handleApiRequestException(e)}}}},d=h,u=(s("53eb4"),s("2877")),m=Object(u["a"])(d,n,l,!1,null,"c011b8fa",null),p=m.exports,f=s("788b"),g={name:"search-all",components:{TradeItem:a["a"],Market:f["default"],PostList:p},data(){return{content:this.$route.query.content,tabsType:1,tableData:[],isType:this.$route.query.isType,anchorNavStyle:{},anchor:"",isScroll:!0}},watch:{content(t){console.log(t)}},mounted(){this.getList(),this.$refs.PostsList.getTrendsList(!0,this.content),window.addEventListener("scroll",this.bindHandleScroll)},destroyed(){window.removeEventListener("scroll",this.bindHandleScroll)},methods:{input(t){this.getList(),this.$refs.PostsList.getTrendsList(!0,t)},bindHandleScroll(){if(this.isScroll){let t=document.documentElement.scrollTop;t<this.$refs.quotation.offsetTop-200?this.tabsType=1:t<this.$refs.Posts.offsetTop-200?this.tabsType=2:this.tabsType=3}},jump(t,e){this.tabsType=t,this.$nextTick(()=>{var t;let s=null===(t=this.$refs[e])||void 0===t?void 0:t.offsetTop;this.isScroll=!1,setTimeout(()=>{this.isScroll=!0},500),window.scrollTo({top:s-144,left:0})})},async getList(){const t=await this.$api.copyTrade.fctTeamList({nickName:this.content,offset:1,limit:12});t.success&&(t.obj.records.map(t=>{t.leaderLabels=t.leaderLabel.split(",")}),this.tableData=t.obj.records)}}},v=g,y=(s("f6af"),Object(u["a"])(v,i,o,!1,null,"636392ca",null));e["default"]=y.exports},f4053:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"album-warp"},t._l(t.imgs,(function(s){return e("el-image",{key:s,class:"img-box "+t.className,attrs:{fit:"cover","preview-src-list":t.imgs,src:s},on:{click:function(t){t.stopPropagation()}}})})),1)},o=[],a={props:{imgs:{type:Array,default:()=>[]}},computed:{className(){let t="img-box-i";return 4===this.imgs.length||2===this.imgs.length?t="img-box-4":1===this.imgs.length&&(t="img-box-1"),t}},name:"Album"},n=a,l=(s("8575"),s("2877")),r=Object(l["a"])(n,i,o,!1,null,"4cc656a1",null);e["a"]=r.exports},f6af:function(t,e,s){"use strict";s("9b94")}}]);