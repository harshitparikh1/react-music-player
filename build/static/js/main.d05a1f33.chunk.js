(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),i=(n(14),n(2));var l=function(e){return r.a.createElement("div",{className:"c-player--details"},r.a.createElement("div",{className:"details-img"},r.a.createElement("img",{src:e.song.img_src,alt:""})),r.a.createElement("h3",{className:"details-title"},e.song.title),r.a.createElement("h4",{className:"details-artist"},e.song.artist))},o=n(5),u=n(4);var g=function(e){return r.a.createElement("div",{className:"c-player--controls"},r.a.createElement("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)}},r.a.createElement(o.a,{icon:u.a})),r.a.createElement("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)}},r.a.createElement(o.a,{icon:e.isPlaying?u.c:u.d})),r.a.createElement("button",{className:"skip-btn",onClick:function(){return e.SkipSong()}},r.a.createElement(o.a,{icon:u.b})))};var m=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(!1),s=Object(i.a)(n,2),c=s[0],o=s[1];return Object(a.useEffect)((function(){c?t.current.play():t.current.pause()})),r.a.createElement("div",{className:"c-player"},r.a.createElement("audio",{src:e.songs[e.currentSongIndex].src,ref:t}," "),r.a.createElement("h4",null," Playing Now "),r.a.createElement(l,{song:e.songs[e.currentSongIndex]}),r.a.createElement(g,{isPlaying:c,setIsPlaying:o,SkipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),r.a.createElement("p",null," ",r.a.createElement("strong",null," Next Up: ")," ",e.songs[e.nextSongIndex].title," by ",e.songs[e.nextSongIndex].artist," "))};var p=function(){var e=Object(a.useState)([{title:"Forget me too ft. Halsey",artist:"Machine Gun Kelly",img_src:"./images/song-1.jpg",src:"./music/on-n-on.mp3"},{title:"On & On",artist:"Cartoon",img_src:"./images/song-2.jpg",src:"./music/somebody-new.mp3"},{title:"The Nights",artist:"Avicii",img_src:"./images/song-3.jpg",src:"./music/Avicii-The-Nights.mp3"},{title:"On my way",artist:"Alan Walker",img_src:"./images/song-4.jpg",src:"./music/On-My-Way.mp3"}]),t=Object(i.a)(e,1)[0],n=Object(a.useState)(0),s=Object(i.a)(n,2),c=s[0],l=s[1],o=Object(a.useState)(c+1),u=Object(i.a)(o,2),g=u[0],p=u[1];return Object(a.useEffect)((function(){p((function(){return c+1>t.length-1?0:c+1}))}),[c,t]),r.a.createElement("div",{className:"App"},r.a.createElement(m,{currentSongIndex:c,setCurrentSongIndex:l,nextSongIndex:g,songs:t}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.d05a1f33.chunk.js.map