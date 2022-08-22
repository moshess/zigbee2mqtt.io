"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86329],{91857:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-56a6a501",path:"/devices/AV2010_29A.html",title:"SMaBiT (Bitron Video) AV2010/29A control via MQTT",lang:"en-US",frontmatter:{title:"SMaBiT (Bitron Video) AV2010/29A control via MQTT",description:"Integrate your SMaBiT (Bitron Video) AV2010/29A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-02-17T19:02:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Warning (composite)",slug:"warning-composite",children:[]},{level:3,title:"Squawk (composite)",slug:"squawk-composite",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AV2010_29A.md",git:{updatedTime:1661187643e3}}},83778:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="smabit-bitron-video-av2010-29a" tabindex="-1"><a class="header-anchor" href="#smabit-bitron-video-av2010-29a" aria-hidden="true">#</a> SMaBiT (Bitron Video) AV2010/29A</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AV2010/29A</td></tr><tr><td>Vendor</td><td>SMaBiT (Bitron Video)</td></tr><tr><td>Description</td><td>Outdoor siren</td></tr><tr><td>Exposes</td><td>warning, squawk, battery_low, tamper, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AV2010-29A.jpg" alt="SMaBiT (Bitron Video) AV2010/29A"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the function button for 10 seconds until the LEDs on the left light up briefly. During the search, the LED will light red once every 10 seconds. If the LED flashes 2 times, the device has successfully logged on to your Smart Home system.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect). Allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning. Allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle.</li><li><code>duration</code> (numeric): Duration in seconds of the alarm.</li></ul><h3 id="squawk-composite" tabindex="-1"><a class="header-anchor" href="#squawk-composite" aria-hidden="true">#</a> Squawk (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;squawk&quot;: {&quot;state&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe&quot;: VALUE}}</code></p><ul><li><code>state</code> (enum): Set Squawk state. Allowed values: <code>system_is_armed</code>, <code>system_is_disarmed</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) for Squawk. Allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);