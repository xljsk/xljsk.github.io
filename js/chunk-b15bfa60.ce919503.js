(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b15bfa60"],{"0895":function(t,e,s){},1943:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("div",{staticClass:"search-left"},[e("el-input",{staticStyle:{width:"100%",color:"#303133"},attrs:{placeholder:t.$t("community_search_popular")},on:{focus:t.focus},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("svg-icon",{attrs:{data_iconName:"search",className:"search-right",size:17}})],1)},a=[],o=s("2f62"),n={name:"WorkspaceJsonSearchHot",data(){return{value:""}},mounted(){},methods:{...Object(o["c"])(["UPDATE_MASK_SEARCH"]),focus(){this.UPDATE_MASK_SEARCH(!0)}}},l=n,c=(s("e633"),s("2877")),r=Object(c["a"])(l,i,a,!1,null,"44875ba0",null);e["a"]=r.exports},"339c":function(t,e,s){},6063:function(t,e,s){},"69a8":function(t,e,s){t.exports=s.p+"img/picture.ea369ff0.png"},"78e0":function(t,e,s){"use strict";s("339c")},8575:function(t,e,s){"use strict";s("c1d4")},bd46:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("div",{staticClass:"personal"},[e("div",{staticClass:"personal-left"},[e("div",{staticClass:"personal-avatar"},[t.item.author?e("Avatar",{attrs:{isShowNickname:!0,avatarSize:40,userId:t.item.author}},[e("div",{staticClass:"personal-style",attrs:{slot:"bottom"},slot:"bottom"},[t._v(t._s(t.$t("community_posted"))+" "+t._s(t._f("relativeTime")(t.item.created)))])]):t._e()],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.token,expression:"token"}]},[t.item.author==t.userInfo.customerId?e("DeletePost",{attrs:{deleteId:t.item.id},on:{confirm:function(e){return t.confirm(t.index)}}}):e("Report",{attrs:{item:t.item,"is-post":!0}})],1)]),e("div",{staticClass:"post-content"},[t.item.content?e("div",{staticClass:"post-text"},[e("EditParse",{attrs:{content:t.item.content,isHide:t.filterRoute}})],1):t._e(),t.item.href?e("div",{staticClass:"post-link",on:{click:function(e){return e.stopPropagation(),t.openUrlModus(t.item.href)}}},[e("img",{staticClass:"link-img",attrs:{src:t.handleLink(t.item.attachContent).imgUrl||t.base64Avatar}}),e("div",[t.handleLink(t.item.attachContent).title?e("div",{staticClass:"link-title"},[t._v(t._s(t.handleLink(t.item.attachContent).title))]):t._e(),t.handleLink(t.item.attachContent).description?e("div",{staticClass:"link-des"},[t._v(t._s(t.handleLink(t.item.attachContent).description))]):t._e(),t.handleLink(t.item.attachContent).description?t._e():e("div",{staticClass:"link-detail"},[t._v(t._s(t.item.href.trim()))])])]):t._e()]),t.item.urls?e("div",[e("Album",{attrs:{imgs:t.item.urls}})],1):t._e(),t.item.videoUrl?e("div",{staticClass:"post-video",on:{click:function(t){t.stopPropagation()}}},[e("video",{staticClass:"video",attrs:{controls:"controls",src:t.item.videoUrl,id:t.item.id},on:{play:function(e){return t.handlePlay(t.item.id)}}},[t._v(" "+t._s(t.$t("community_support_video"))+" ")])]):t._e(),e("div",{staticClass:"follow-like"},[e("div",{staticClass:"follow-like-left",on:{click:function(e){return e.stopPropagation(),t.postLikeOrDislike(t.item)},mouseover:t.mouseoverLeft,mouseleave:t.mouseleaveLeft}},[e("div",{staticClass:"follow-like-left-box",class:{selectleft:t.mouseoverLeftData}},[e("svg-icon",{class:{select:t.item.isLike},attrs:{data_iconName:"awesome",className:"follow-like-left-icon",size:16}})],1),e("span",{class:{selectleftText:t.mouseoverLeftData}},[t._v(t._s(t.item.up))])]),e("div",{staticClass:"follow-like-right",on:{mouseover:t.mouseoverRight,mouseleave:t.mouseleaveRight}},[e("div",{staticClass:"follow-like-right-box",class:{selectright:t.mouseoverRightData}},[e("svg-icon",{attrs:{data_iconName:"comment2",className:"follow-like-right-icon",size:16}})],1),e("span",{class:{selectrightText:t.mouseoverRightData}},[t._v(t._s(t.item.comments))])])])])},a=[],o=(s("14d9"),s("f4053")),n=s("2f62"),l=s("df3a"),c={name:"WorkspaceJsonPostList",components:{Album:o["a"],Avatar:l["a"]},props:{item:Object,index:Number},computed:{...Object(n["d"])(["token","userInfo"]),filterRoute(){return"community-post"!=this.$route.name}},data(){return{mouseoverLeftData:!1,mouseoverRightData:!1,prefixUrl:"https://bandex-dev.oss-cn-shenzhen.aliyuncs.com",flag:!1,imgs:["https://img0.baidu.com/it/u=2810806728,4166654119&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img0.baidu.com/it/u=2066710797,1295269268&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800","https://img0.baidu.com/it/u=950234826,2310429801&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=725"],videoElement:[],likeId:"",base64Avatar:""+s("69a8")}},mounted(){this.videoElement=document.getElementsByTagName("video")},methods:{mouseoverLeft(){this.mouseoverLeftData=!0},mouseleaveLeft(){this.mouseoverLeftData=!1},mouseoverRight(){this.mouseoverRightData=!0},mouseleaveRight(){this.mouseoverRightData=!1},openUrlModus(t){window.open(t)},confirm(t){this.$emit("deletePost",t)},postDetailPush(t){this.token?3!==t.trendsStatus&&(1===t.postLikesType?this.$router.push(`/community/community-post/${t.trendsId}/${t.author}`):this.$router.push(`/community/community-post/${t.id}/${t.author}`)):this.$router.push("/login")},handlePlay(t){let e=document.getElementById(t).id;const s=this.videoElement;if(s&&s.length>0)for(let i=0;i<s.length;i++){let t=s[i].id;t===e?this.videoElement[i].play():this.videoElement[i].pause()}},postLikeOrDislike(t){this.token?1===t.postLikesType?(this.likeId=t.trendsId,t.isLike?this.$throttle(this.cancelLike):this.$throttle(this.handleLike)):(this.likeId=t.id,t.isLike?this.$throttle(this.cancelLike):this.$throttle(this.handleLike)):this.$router.push("/login")},async cancelLike(){try{const t=await this.$api.community.cancelLike({trendsId:this.likeId,commentId:"",likeType:1,likeObj:1});t.success&&(this.$notify({message:this.$t("community_cancel_success"),type:"success"}),this.$emit("handle",0,this.likeId))}catch(t){this.$handleError.handleApiRequestException(t)}},async handleLike(){try{const t=await this.$api.community.communityLike({trendsId:this.likeId,commentId:"",likeType:1,likeObj:1});t.success&&(this.$notify({message:this.$t("community_liked_successfully"),type:"success"}),this.$emit("handle",1,this.likeId))}catch(t){this.$handleError.handleApiRequestException(t)}},onFollowClick(t){this.token?t.isFollow?this.$throttle(()=>{this.cancelFollow(t.author)}):this.$throttle(()=>{this.follow(t.author)}):this.$router.push("/login")},async cancelFollow(t){try{if(this.flag)return;const e=await this.$api.community.cancelFollow({followUserId:t});e.success&&(this.$notify({message:this.$t("home_page_cancle_follow_success"),type:"success"}),this.$emit("handle",3,t))}catch(e){this.$handleError.handleApiRequestException(e)}},async follow(t){try{const e=await this.$api.community.follow({followUserId:t});e.success&&(this.$notify({message:this.$t("home_page_follow_success"),type:"success"}),this.$emit("handle",2,t))}catch(e){this.$handleError.handleApiRequestException(e)}},handleLink(t){try{const e=JSON.parse(t),s=e[0];return s.urlWebCard?s.urlWebCard:{}}catch(e){return console.warn(e),{}}}}},r=c,h=(s("78e0"),s("2877")),u=Object(h["a"])(r,i,a,!1,null,"5db05206",null);e["a"]=u.exports},c1d4:function(t,e,s){},e335:function(t,e,s){t.exports=s.p+"img/list.e55dcec1.png"},e633:function(t,e,s){"use strict";s("6063")},e671:function(t,e,s){"use strict";s("14d9");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hot"},[e("div",{staticClass:"hot-title"},[t._v(t._s(t.$t("community_popular_posts")))]),e("div",{staticClass:"hot-box"},[t._l(t.showList,(function(s){return e("div",{key:s.id,staticClass:"hot-list",on:{click:function(e){return t.$router.push(`/community/community-post/${s.id}/${s.author}`)}}},[e("div",{staticClass:"hot-list-left"},[s.content||s.videoUrl||s.urls?e("div",{staticClass:"hot-list-content",class:{defalut:s.videoUrl||s.urls}},[e("EditParse",{attrs:{content:s.content,textStyle:"font-size:14px;line-height: 16px",boxClass:"textSlice"}})],1):t._e(),s.attachContent&&t.handleLink(s.attachContent).title?e("div",{staticClass:"hot-list-content"},[t._v(t._s(t.handleLink(s.attachContent).title))]):t._e(),s.attachContent&&""==t.handleLink(s.attachContent).title?e("div",{staticClass:"hot-list-content"},[t._v(t._s(s.href))]):t._e(),e("div",{staticClass:"hot-list-author"},[e("div",{staticStyle:{"font-weight":"700"}},[t._v(t._s(t.$t("community_author"))+"："+t._s(s.nickName))]),e("div",{staticClass:"hot-list-author-time"},[t._v(t._s(t.$dayjs(s.created).format("YYYY/MM/DD")))])])]),e("div",{staticClass:"hot-list-right"},[s.urls?e("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:s.urls[0],fit:"fit"}}):t._e(),s.attachContent&&t.handleLink(s.attachContent).imgUrl?e("img",{staticClass:"link-img",attrs:{src:t.handleLink(s.attachContent).imgUrl}}):t._e(),s.videoUrl?e("div",{staticClass:"post-video"},[e("video",{staticClass:"video",attrs:{src:s.videoUrl}},[t._v(" "+t._s(t.$t("community_support_video"))+" ")]),e("svg-icon",{class:{select:s.isLike},attrs:{data_iconName:"play",className:"video-icon",size:24}})],1):t._e()],1)])})),0==t.showList.length?e("el-empty",{attrs:{image:s("e335"),"image-size":133,description:t.$t("notice_no_data")}}):t._e()],2)])},a=[],o={name:"WorkspaceJsonHotPost",data(){return{prefixUrl:"https://bandex-dev.oss-cn-shenzhen.aliyuncs.com",page:1,size:5,totalRows:0,showList:[]}},mounted(){this.getTrendsListByHot()},methods:{async getTrendsListByHot(){try{const t=await this.$api.community.getTrendsListByHot({page:this.page,size:this.size});if(t.success&&t.obj.data){let e=t.obj.data;this.totalRows=t.obj.totalRows,e.length>0&&this.handleData(e),this.page*this.size<=this.totalRows&&(this.page=this.page+1)}}catch(t){this.$handleError.handleApiRequestException(t)}},async handleData(t){t.forEach(t=>{if(t.attachContent){let e=JSON.parse(t.attachContent),s=[];e&&(e.map(e=>{1===e.type&&(t.href=this.$utils.decodeURIComponentSafely(e.url)),2===e.type&&s.push(this.prefixUrl+"/"+e.url),3===e.type&&(t.videoUrl=e.url)}),s.length&&(t.urls=s))}}),t.length>0&&(this.showList=this.showList.concat(t))},handleLink(t){try{const e=JSON.parse(t),s=e[0];return s.urlWebCard?s.urlWebCard:{}}catch(e){return console.warn(e),{}}}}},n=o,l=(s("ffa3"),s("2877")),c=Object(l["a"])(n,i,a,!1,null,"6032f85c",null);e["a"]=c.exports},f4053:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"album-warp"},t._l(t.imgs,(function(s){return e("el-image",{key:s,class:"img-box "+t.className,attrs:{fit:"cover","preview-src-list":t.imgs,src:s},on:{click:function(t){t.stopPropagation()}}})})),1)},a=[],o={props:{imgs:{type:Array,default:()=>[]}},computed:{className(){let t="img-box-i";return 4===this.imgs.length||2===this.imgs.length?t="img-box-4":1===this.imgs.length&&(t="img-box-1"),t}},name:"Album"},n=o,l=(s("8575"),s("2877")),c=Object(l["a"])(n,i,a,!1,null,"4cc656a1",null);e["a"]=c.exports},ffa3:function(t,e,s){"use strict";s("0895")}}]);