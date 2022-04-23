"use strict";(self.webpackChunkragnarok=self.webpackChunkragnarok||[]).push([[678],{3329:function(e,t,n){t.Z=void 0;var a,r,o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(5697))&&a.__esModule?a:{default:a};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="close",x="closing",y="closed",b="open",v="opening",E="opened",k=(g(r={},w,w),g(r,y,w),g(r,v,w),g(r,x,b),g(r,b,b),g(r,E,b),r),N=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}(this,d(t).call(this,e)),g(f(n),"getClientHeight",(function(){return n.refWrapper.scrollHeight})),g(f(n),"getDefaultExpandStyle",(function(){switch(n.state.status){case v:case w:case y:return{height:0,opacity:0,overflow:"hidden"};case E:case x:return{height:n.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}})),g(f(n),"getExpandStyle",(function(){return u({},n.getDefaultExpandStyle(),{},n.props.styles[k[n.state.status]])})),g(f(n),"getTransition",(function(e){return"".concat(e," ").concat(n.props.duration,"ms ").concat(n.props.easing)})),g(f(n),"updateStatus",(function(e){return n.setState({status:e})})),g(f(n),"delay",(function(e,t){n.timeout=setTimeout(e,t)})),g(f(n),"clearDelay",(function(){n.timeout&&clearTimeout(n.timeout)})),g(f(n),"transit",(function(e,t,a){var r=n.props.duration;n.updateStatus(e),n.delay((function(){n.updateStatus(t),n.delay((function(){n.updateStatus(a)}),r)}),20)})),g(f(n),"toggle",(function(e){n.clearDelay(),e?n.transit(v,E,b):n.transit(x,y,w)})),g(f(n),"setRef",(function(e){n.refWrapper=e})),n.state={status:n.props.open?b:w},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return u({},this.getExpandStyle(),{transition:e})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,a=e.tag,r={className:t,style:this.getStyle(),ref:this.setRef};return i.default.createElement(a,r,n)}}])&&p(n.prototype,a),r&&p(n,r),t}(i.Component);N.propTypes={children:s.default.node.isRequired,open:s.default.bool,duration:s.default.number,easing:s.default.string,className:s.default.string,tag:s.default.string,transitions:s.default.arrayOf(s.default.string),styles:s.default.shape((o={},g(o,b,s.default.object),g(o,w,s.default.object),o))},N.defaultProps={open:!1,duration:400,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var _=N;t.Z=_},729:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(7294),r=n(6985),o=n(2349),i=n(3329),s=function(e){var t=e.children,n=e.summary,r=e.className,o=e.subClassname,s=e.open,l=e.link,c=e.lists,m=(0,a.useState)(s),u=m[0],p=m[1];return a.createElement("div",{className:r+" pl-4 md:px-4 items-center "},a.createElement("div",{role:"button",tabIndex:0,className:"flex justify-between items-center "+o,onClick:function(){s||p(!u)},onKeyDown:function(){s||p(!u)}},a.createElement("div",{className:"faq-subject text-white py-2 px-4 w-full cursor-pointer items-center justify-between flex"},a.createElement("p",{className:"sm:text-xl"},n),!s&&a.createElement("img",{src:"/icons/ic_next.png",alt:"expand",className:" transform "+(u?"rotate-90":"rotate-0")+" duration-500 h-4 flex-shrink-0"}))),a.createElement(i.Z,{open:u,className:"rounded-b-3xl border-b-4 border-l-4 border-r-4 border-app-purple font-gothic-italic font-bold"},a.createElement("p",{className:"px-4 break-words "+(""!==c?"pt-2":"py-2")},t,""!==l&&a.createElement("a",{href:l,target:"_blank",rel:"noreferrer",style:{color:"blue"}}," ",l)),""!==c&&a.createElement("ul",{className:"px-4 pb-2"},c.map((function(e,t){return a.createElement("li",{key:t},e)})))))};s.defaultProps={open:!1};var l=s,c=a.memo((function(e){var t=e.children,n=e.summary,r=e.className,o=e.subClassname,s=e.selected,l=e.setSelected,c=e.index;return a.createElement("div",{className:r+" items-center "},a.createElement("div",{role:"button",tabIndex:0,className:"faq-subject justify-between flex items-center border-2 border-blue-700 py-2 px-4 cursor-pointer "+o,onClick:function(){l(c)},onKeyDown:function(){l(c)}},a.createElement("p",{className:"text-white text-2xl lg:text-3xl"},n),c===s&&a.createElement("img",{src:"/icons/ic_selected.svg",alt:"selected",className:"h-6"})),a.createElement(i.Z,{open:c===s,className:""},t))})),m=function(e){var t=e.children,n=e.className;return a.createElement("h2",{className:n+" uppercase text-4xl lg:text-6xl pt-12 pb-8"},t)};m.defaultProps={className:"text-center"};var u=[{img:"/home_page/icon_rune.png",background:"purple",content:"WL RUNE TOKENS - AIRDROPPED FOR FREE!",width:"w-3/4"},{img:"/home_page/icon_250.png",background:"blue",content:"250,000,000 rrok will be awarded for season 1",width:"w-4/5"},{img:"/home_page/icon_sneak.png",background:"green",content:"sneak peeks,games and more in our discord",width:"w-3/4"}],p=[{step:"01",class:"2xl:container",content:"Choose a faction & Mint your warrior",desktop:"/home_page/play_desk_step1.png",mobile:"/home_page/play_mobile_step1.png"},{step:"02",class:"2xl:container",content:"round 1 matchmaking begins 24hrs post-sale",desktop:"/home_page/play_desk_step2.png",mobile:"/home_page/play_mobile_step2.png"},{step:"03",class:"",content:"view your 'fight card' featuring your opponent and countdown to battle",desktop:"/home_page/play_desk_step3.png",mobile:"/home_page/play_mobile_step3.png"},{step:"04",class:"2xl:container",content:"48hrs post-matchmaking, Round 1 modifiers are calculated and battle results determined - 100% provably random & on-chain.",desktop:"/home_page/play_desk_step4.png",mobile:"/home_page/play_mobile_step4.png"},{step:"05",class:"2xl:container",content:"RROK is issued (80% to winners, 20% to losers after Round 1) and defeated warriors gain entry to Valhalla",desktop:"/home_page/play_desk_step5.png",mobile:"/home_page/play_mobile_step5.png"},{step:"06",class:"2xl:container",content:"Matchmaking begins for the next round and players may opt to sacrifice their potential 'loser payout' by praying to their God, in exchange for a special blessing in their upcoming battle.",desktop:"/home_page/play_desk_step6.png",mobile:"/home_page/play_mobile_step6.png"}],d=[{subject:"Season 1 - Mint",faq:[{question:"When does mint start for Whitelist holders?",answer:"Presale will open May 4th at 15:00 GMT and run for 24 hours."},{question:"When does mint start for Public?",answer:"Public Sale will open May 5th at 15:00 GMT and run until sold out."},{question:"What happens if I hold a Free Mint token?",answer:"Sit back and relax! We will handle burning your token and airdropping you a random warrior from the faction it represents."},{question:"What happens to my Whitelist token if I choose not to mint?",answer:"All unused tokens will be burnt once the Presale period closes, to avoid secondary sales of a useless item."}]},{subject:"Season 1 - Details",faq:[{question:"Who is the main artist for Season One?",answer:"RIOTG3AR is the main artist, you can view his Twitter here:",link:"https://twitter.com/riotg3ar"},{question:"Who is the WL Token artist for Season One?",answer:"V.VIZ is the WL 'Rune' token artist, you can view his Twitter here:",link:"https://twitter.com/v_viz_"},{question:"What are the 4 rarity tiers and boost percentages?",answer:"Common: 0, Uncommon: +2.5%, Epic: +10% and Legendary: +25%."},{question:"Can I sell my warrior during the tournament or is it locked until the end?",answer:"You can sell your warrior at any time, just be sure to claim any RROK in your account before you do."},{question:"What happens to my warrior if he is defeated?",answer:"Your warrior is no longer eligible to continue in battle, however, you may use RROK to reincarnate for a discounted price of 50,000 RROK which grants you 1 free mint in the next season."}]},{subject:"RROK",faq:[{question:"What is RROK?",answer:"RROK is the main currency for Ragnarok. RROK is available on uniswap/sushiswap and original liquidity of $200,000 was provided by our private investors."},{question:"What can I use RROK on?",answer:"RROK can be used to mint new warriors at a price of 75,000 RROK or reincarnation if your warrior has been defeated for the next season at a cost of 50,000 RROK."},{question:"Where will the RROK be supplied from for future seasons?",answer:"100% of proceeds from seasons 2-8 NFTs will be placed back into the ecosystem based off the following breakdown:",lists:["50% - Prize Pool","40% - Staking Rewards","10% - Night of Champions Prize Pool"]}]},{subject:"Night of Champions",faq:[{question:"Who qualifies for the Night of Champions?",answer:"All warriors sharing a faction with the winner of Seasons 1-8 will automatically be entered in the Night of Champions tournament, with guaranteed prizes for every participant. The NoC will take place shortly after the conclusion of Season 8."},{question:"How much is the prize pool for the Night of Champions?",answer:"10% of all RROK collected from mint or reincarnation fees in Seasons 1-8 will make up the NoC prize pool."},{question:"Do I have to pay any fees or gas to enter if my Warrior is eligible?",answer:"No! There will be no out of pocket expense to have your warrior entered and you are guaranteed to leave with a prize!"}]}],f=[{img:"/home_page/team_keith.png",name:"KEITH BUSSEY",role:"MASTERBREWS-VARIUS",content:"An experienced techpreneur with over 20 years in the online industry, Keith’s strengths lie in his resourcefulness, \n              creativity and work ethic. As an aggressive CTO who delivers results, he has helped build, scale and guide companies in commerce (over $1B in sales), dating and mobile gaming - just to name a few.",twitter:"https://twitter.com/MasterBrewsNFT",linkedin:"https://www.linkedin.com/in/varius/"},{img:"/home_page/team_adam.png",name:"ADAM HUDANI",role:"TILTING-SHOCK",content:"Adam has held numerous senior level positions such as Chief Operating fficer, VP of Ops and Head of Operations for \n              companies across numerous verticals such as i-gaming, ecommerce and social gaming. Adam has helped numerous companies grow from start- up status to industry leaders enerating over $300M in revenue.",twitter:"https://twitter.com/TiltingS",linkedin:"https://www.linkedin.com/in/adam-hudani/"},{img:"/home_page/team_jason.png",name:"JASON SILVERT",role:"THEPENGUINVA",content:"Better known as ThePenguinVA, Jason specializes incustomerrelations management and acts as acommunity manager and \n              occasional client liaison for MasterBrews. Prior to MasterBrews, Jason spent a decade as tech support with Apple. Previously Jason spent 10 years as a manager with Blockbuster Video. Jason has over 20 years of customer satisfaction experience.",twitter:"https://twitter.com/ThePenguinVA",linkedin:"https://www.linkedin.com/in/jason-silvert-6b623679"},{img:"/home_page/team_medina.png",name:"j.Medina",role:"JPMM21",content:"Medina AKA jpmm21 is a young Cuban doctor who after fighting Covid-19 during 2021, was reborn as Web3 enthusiast. \n              Medina now acts as Community Manager for MasterBrews.",twitter:"https://twitter.com/jpmm_21",linkedin:"https://www.linkedin.com/in/juan-pablo-medina-mulet-90114b11a"},{img:"/home_page/team_alin.png",name:"alin popa",role:"DASKING",content:"Alin is a senior full-stack software engineer, teaching assistant, and graduate researcher. Passionate about computer science \n              and innovation, Alin has been consistently delivering great software solutions.Alin is currently pursuing a Ph.D. in Financial Machine Learning, and has multiple IEEE-Indexed research articles on cryptocurrency and neural networks.",twitter:"#",linkedin:"https://www.linkedin.com/in/alinn-popa/"},{img:"/home_page/team_riot.png",name:"riotg3ar",role:"S1 ARTIST",content:"Dennis Mabuka is a 3d artist from Nairobi, Kenya. His work has been featured as a finalist in the largest car rendering challenge in the industry. He loves to work with music, credited with projects for west african artist Shatta Wale. \n              His work loves to explore the mystical boundary between fantasy and sci-fi from the perspective of a mind developed in the east coast of Africa in the 20th & 21st century.",twitter:"https://twitter.com/riotg3ar",linkedin:"#"},{img:"/home_page/team_tim.png",name:"timothy jooste",role:"ADVISOR",content:"Tim has spent most of his successful career building a running large Sales organizations for mid size to Fortune 500 companies. \n              He has a personally developed 100s of leaders and helped recruit teams of 500+ sale people producing 100-200 million per year in tech sales. Tim specializes in cultivating an amazing work environment and culture as well as finding and developing leaders. Tim began his career as a door 2 door salesman and has risen to the top of each company he has worked for while also winning numerous national awards including the nationally recognized Gold Stevie Award forSales Director of the Year in the United States!",twitter:"https://twitter.com/TimothyJooste",linkedin:"https://www.linkedin.com/in/timothy-jooste-8594a491/"},{img:"/home_page/team_mascot.png",name:"Bullseye",role:"S1 MASCOT",content:"Lover of bones, drinker of mead, breaker of hearts. Unbeknown to many, it was Bullseye who first taught the All-Father his fabled Odinsleep. The only creature to have both melted Ymir's icy heart, and cooled Surtr's fiery rage, Bullseye counts Huginn and Muninn amongst his closest pals. Bullseye keeps the team in line and morale high!",twitter:"#",linkedin:"#"}],h=function(){return a.createElement("div",{className:"top-header h-screen relative"},a.createElement("div",{className:"hidden lg:block absolute top-28 2xl:top-32 left-1/2 transform -translate-x-1/2 w-2/3 container text-center"},a.createElement("img",{src:"/home_page/top_logo_1.png",alt:"top-logo",className:"w-2/3 mx-auto"}),a.createElement("p",{className:"uppercase text-white text-3xl 2xl:text-4xl home-title"},"Automated On-Chain Battle Tournament"),a.createElement("div",{className:"flex items-center justify-center rounded-3xl w-52 2xl:w-60 bg-blue-500 text-white uppercase py-2 px-3 mx-auto mt-4 2xl:mt-8 cursor-pointer"},a.createElement("img",{src:"/home_page/icon_arrow_bottom.png",alt:"icon arrow",className:"w-6 mr-3"}),a.createElement("div",{className:"text-xl 2xl:text-2xl"},a.createElement(o.rU,{to:"play",spy:!0,smooth:!0,offset:0,duration:500},"Discover More")))),a.createElement("div",{className:"hidden lg:block absolute bottom-6 2xl:bottom-12 w-full mt-12"},a.createElement("div",{className:"2xl:container lg:w-11/12 mx-auto"},a.createElement("div",{className:"grid grid-cols-3 gap-12 2xl:gap-20 2xl:-mx-12"},u.map((function(e,t){return a.createElement("div",{className:"grid-item relative bg-image bg-"+e.background+" px-4 pt-26 2xl:pt-40 pb-4 2xl:pb-6 text-white",key:t},a.createElement("div",{className:"team-item-img absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "+e.width},a.createElement("img",{src:e.img,className:"w-full",alt:"team img"})),a.createElement("p",{className:"text-2xl 2xl:text-3xl text-center"},e.content))}))))),a.createElement("img",{src:"/home_page/top_logo_vertical_1.png",alt:"top-logo",className:"lg:hidden absolute top-14 mt-9 tiny:mt-10 right-5 h-2/3 md:h-3/4"}),a.createElement("div",{className:"lg:hidden absolute w-full bottom-5 tiny:bottom-6"},a.createElement("div",{className:"md:w-2/3 mx-auto text-center"},a.createElement("p",{className:"uppercase text-white text-2xl tiny:text-3xl md:text-4xl home-title px-10"},"Automated On-Chain Battle Tournament"),a.createElement("div",{className:"flex items-center justify-center rounded-3xl w-48 sm:w-52 bg-blue-500 text-white uppercase py-1 tiny:py-2 px-2 tiny:px-3 mx-auto mt-3 tiny:mt-4 cursor-pointer"},a.createElement("img",{src:"/home_page/icon_arrow_bottom.png",alt:"icon arrow",className:"w-5 sm:w-6 mr-3"}),a.createElement("div",{className:"text-lg sm:text-xl"},a.createElement(o.rU,{to:"play",spy:!0,smooth:!0,offset:0,duration:500},"Discover More"))))))},g=function(){return a.createElement("div",{className:"lg:hidden homeItems-box pt-12 pb-20 px-6"},a.createElement("div",{className:"grid grid-cols-1 tiny:grid-cols-2 gap-10"},u.map((function(e,t){return a.createElement("div",{className:"grid-item relative bg-image bg-"+e.background+" px-4 pt-26 tiny:pt-20 sm:pt-26 pb-4 mt-20 border-"+e.background+" rounded-lg text-white",key:t},a.createElement("div",{className:"team-item-img absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "+e.width},a.createElement("img",{src:e.img,className:"w-full",alt:"team img"})),a.createElement("p",{className:"text-2xl text-center"},e.content))}))))},w=function(){return a.createElement("div",{className:"play play-box bg-black pt-4 pb-12"},a.createElement(m,{className:"text-white text-center"},"How To Play"),p.map((function(e,t){return a.createElement("div",{key:t,className:e.class+" mx-auto "+(2!==t?"px-6 md:px-10":"px-2 sm:px-0")+" "+(t>3?"sm:hidden":"")},a.createElement("div",{className:"flex text-white 2xl:container mx-auto "+(0===t?"mt-0 md:mt-16":"mt-16")+" pb-8 "+(2===t?"px-6 md:px-10":"")},a.createElement("div",{className:"flex flex-col items-center mr-6"},a.createElement("p",{className:"text-xl 2xl:text-2xl"},"STEP"),a.createElement("p",{className:"text-5xl 2xl:text-6xl"},e.step)),a.createElement("p",{className:"text-3xl 2xl:text-4xl flex flex-col justify-end"},e.content)),a.createElement("img",{src:e.desktop,alt:"play img",className:"hidden sm:block mx-auto"}),a.createElement("img",{src:e.mobile,alt:"play img",className:"sm:hidden mx-auto"}))})),a.createElement("div",{className:"hidden sm:grid grid-cols-2 gap-6 2xl:container mx-auto px-10"},p.map((function(e,t){return t>3&&a.createElement("div",{key:t,className:"grid-item"},a.createElement("div",{className:"flex text-white mt-20 pb-8"},a.createElement("div",{className:"flex flex-col mr-6"},a.createElement("p",{className:"text-xl"},"STEP"),a.createElement("p",{className:"text-5xl"},e.step)),a.createElement("p",{className:"text-3xl flex flex-col justify-end"},e.content)),a.createElement("img",{src:e.desktop,alt:"play img",className:"hidden lg:block mx-auto w-4/5"}),a.createElement("img",{src:e.mobile,alt:"play img",className:"lg:hidden mx-auto"}))}))))},x=function(){return a.createElement("div",{className:"teams"},a.createElement("div",{className:"container flex flex-col m-auto px-10 small:px-20 sm:px-10"},a.createElement(m,{className:"text-black text-center"},"MEET OUR TEAM"),a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 pb-5 pt-10 mt-10 m-auto z-0 "},f.map((function(e,t){return a.createElement("div",{className:"grid-item text-center team-panel relative pt-20 mb-24 xl:mb-36 text-white",key:t},a.createElement("div",{className:"team-item-img absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 p-2 w-1/2"},a.createElement("img",{src:e.img,className:"w-full",alt:"team img"})),a.createElement("div",{className:"pb-20 px-4 h-full bg-team-panel pt-6 xl:pt-10"},a.createElement("p",{className:"w-full text-2xl xl:text-3xl pt-3 small:pt-6 sm:pt-3 md:pt-6 lg:pt-2 xl:pt-3 2xl:pt-6"},e.name),a.createElement("p",{className:"text-black-light mb-3 xl:text-lg font-gothic-bold text-gray-300"},e.role),a.createElement("p",{className:"font-gothic-italic text-gray-200"},e.content),a.createElement("div",{className:"flex gap-5 justify-center items-center absolute bottom-6 left-1/2 transform -translate-x-1/2"},"#"!==e.twitter&&a.createElement("a",{href:e.twitter,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:"/icons/ic_twitter.png",alt:"icon twitter",className:"w-8"})),"#"!==e.linkedin&&a.createElement("a",{href:e.linkedin,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:"/icons/ic_linkedin.png",alt:"icon linkedin",className:"w-8"})))))}))),a.createElement("div",{className:"w-10 divider absolute"})))},y=function(){var e=(0,a.useState)(0),t=e[0],n=e[1];return a.createElement("div",{className:"faq pb-10"},a.createElement(m,{className:"text-white text-center"},"faq"),a.createElement("div",{className:"md:flex w-full md:w-10/12 lg:9/12 xl:w-8/12 mx-auto gap-4 md:flex-row flex-col container hidden"},a.createElement("div",{className:"w-4/12 gap-4 md:flex flex-col hidden"},d.map((function(e,r){return a.createElement("div",{key:r,role:"button",tabIndex:r,className:"faq-subject justify-between flex items-center border-2 border-blue-700 py-2 px-4 cursor-pointer",onClick:function(){n(r)},onKeyDown:function(){n(r)}},a.createElement("p",{className:"text-white text-2xl lg:text-3xl"},e.subject),r===t&&a.createElement("img",{src:"/icons/ic_selected.svg",alt:"selected",className:"h-6"}))}))),a.createElement("div",{className:"flex md:hidden"},a.createElement(l,{summary:d[t].faq[0].question,open:!0,className:"w-1/2",link:d[t].faq[0].link?d[t].faq[0].link:"",lists:""},d[t].faq[0].answer),a.createElement("div",{className:"w-1/2 gap-4 flex flex-col"},d.map((function(e,r){return a.createElement("div",{key:r,role:"button",tabIndex:r,className:"faq-subject justify-between flex items-center border-2 border-blue-700 py-2 px-4 cursor-pointer",onClick:function(){n(r)},onKeyDown:function(){n(r)}},a.createElement("p",{className:"text-white text-xl sm:text-2xl"},e.subject),r===t&&a.createElement("img",{src:"/icons/ic_selected.svg",alt:"selected",className:"h-6 lg:h-8"}))})))),a.createElement("div",{className:"w-8/12 gap-2 flex-col md:flex hidden"},d[t].faq.map((function(e,t){return a.createElement(l,{summary:e.question,key:t,open:0===t,link:e.link?e.link:"",lists:e.lists?e.lists:""},e.answer)}))),a.createElement("div",{className:"w-full gap-2 flex-col md:hidden flex"},d[t].faq.map((function(e,t){return t>0&&a.createElement(l,{summary:e.question,key:t,link:e.link?e.link:"",lists:e.lists?e.lists:""},e.answer)})))),a.createElement("div",{className:"flex w-full md:hidden flex-col gap-4 px-4"},d.map((function(e,r){return a.createElement(c,{summary:e.subject,key:r,selected:t,setSelected:n,index:r},e.faq.map((function(e,t){return a.createElement(l,{summary:e.question,key:t,link:e.link?e.link:"",lists:e.lists?e.lists:"",className:"mt-2"},e.answer)})))}))))},b=function(){return a.createElement("div",{className:"home-container"},a.createElement(h,null),a.createElement(g,null),a.createElement(w,null),a.createElement(x,null),a.createElement(y,null))},v=function(){return a.createElement(r.Z,{type:"home"},a.createElement(b,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-18b4c4fd91449caad351.js.map