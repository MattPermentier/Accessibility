(()=>{"use strict";const e=window.wp.element,t=window.wp.plugins,n=window.wp.editPost,l=window.wp.i18n,i=(window.wp.components,window.wp.data);window.wp["components/build/button"];let r=()=>{let t=[];for(let n=0;n<4;n++)t.push((0,e.createElement)("div",{style:{width:"50px",height:"50px",border:"1px solid black"}}));let n=[];for(let t=0;t<4;t++)n.push((0,e.createElement)("div",{style:{width:"50px",height:"50px",border:"1px solid black"}}));let l=[];for(let t=0;t<4;t++)l.push((0,e.createElement)("div",{style:{width:"50px",height:"50px",border:"1px solid black"}}));return(0,e.createElement)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center"}},(0,e.createElement)("button",{onClick:()=>{console.log("Check Contrast")}},"Check Contrast"),(0,e.createElement)("hr",null),(0,e.createElement)("h2",null,"Aanbevolen tekstkleuren"),(0,e.createElement)("ul",{style:{display:"flex",justifyContent:"center",gap:"5px"}},t),(0,e.createElement)("hr",null),(0,e.createElement)("h2",null,"Aanbevolen achtergrondkleuren"),(0,e.createElement)("ul",{style:{display:"flex",justifyContent:"center",gap:"5px"}},n),(0,e.createElement)("hr",null),(0,e.createElement)("h2",null,"Aanbevolen kleurencombinaties"),(0,e.createElement)("ul",{style:{display:"flex",justifyContent:"center",gap:"5px"}},l),(0,e.createElement)("hr",null),(0,e.createElement)("button",{onClick:()=>{a("missmatch"),a("get_suggestions").then((e=>e.json())).then((e=>console.log(e)))}},"Pas Contrast Aan"))};function a(e,t){let n=new FormData;return n.append("action",e),fetch(ajax_url,{method:"POST",body:n})}r=(0,i.withSelect)((e=>({text_metafield:e("core/editor").getEditedPostAttribute("meta")._myprefix_text_metafield})))(r),r=(0,i.withDispatch)((e=>({onMetaFieldChange:t=>{e("core/editor").editPost({meta:{_myprefix_text_metafield:t}})}})))(r),(0,t.registerPlugin)("myprefix-sidebar",{icon:"smiley",render:()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.PluginSidebarMoreMenuItem,{target:"myprefix-sidebar"},(0,l.__)("Meta Options","textdomain")),(0,e.createElement)(n.PluginSidebar,{name:"myprefix-sidebar",title:(0,l.__)("MissMatch","textdomain")},(0,e.createElement)(r,null)))})})();