import React from 'react';

const Summary = props => {


	return (
/*   <div id="summary">
     <div>
       <div style="margin-top:24px;margin-bottom:24px">
         <a class="_1biqilc" href="/">
           <div class="_4efw5a"><span><span class="_1hh2h7tb"><span style="color:#585a3a">{props.category}
           </span></span></span></div></a><div><div style="margin-bottom: 6px;"><div itemprop="name">
           <span dir="ltr"><span class="_12ei9u44"><h1 tabindex="-1" class="_1xu9tpch">{props.name}
           </h1></span></span></div></div><div style="margin-bottom: 16px;"><div class="_2930ex">\
           <div class="_10ejfg4u"><div><a href="#neighborhood" class="_1biqilc"><div class="_ncwphzu">{props.city}
           </div></a></div></div></div><div><div><div style="margin-bottom: -16px;">
           <div class="_2h22gn"><div class="_iq8x9is"><div style="margin-bottom: 16px;">
           <div class="_qtix31"><div class="_1thk0tsb"><div style="margin-right: 8px;">
           <span class="_12i0h32r"><span class="_8tbpu3" aria-hidden="true">󰄂</span>
           </span></div></div><div class="_1thk0tsb"><span class="_fgdupie">{props.guest_num}</span>
           </div></div></div><div style="margin-bottom: 16px;"><div class="_qtix31"><div class="_1thk0tsb">
           <div style="margin-right: 8px;"><span class="_12i0h32r"><span class="_8tbpu3" aria-hidden="true">󰄄
           </span></span></div></div><div class="_1thk0tsb"><span class="_fgdupie">{props.bedroom_num}</span>
           </div></div></div></div><div class="_iq8x9is"><div style="margin-bottom: 16px;">
           <div class="_qtix31"><div class="_1thk0tsb"><div style="margin-right: 8px;">
           <span class="_12i0h32r"><span class="_8tbpu3" aria-hidden="true">󰄃</span>
           </span></div></div><div class="_1thk0tsb"><span class="_fgdupie">{props.bed_num}</span>
           </div></div></div><div style="margin-bottom: 16px;"><div class="_qtix31">
           <div class="_1thk0tsb"><div style="margin-right: 8px;"><span class="_12i0h32r">
           <span class="_8tbpu3" aria-hidden="true">󰄁</span></span></div></div><div class="_1thk0tsb">
           <span class="_fgdupie">{props.bath_num}</span></div></div></div></div></div></div></div></div></div></div></div>*/
    <div>
      <span>{props.category}{props.city}{props.name}{props.guest_num}{props.bed_num}{props.bedroom_num}{props.bath_num}</span>
    </div>
    );
};


export default Summary;