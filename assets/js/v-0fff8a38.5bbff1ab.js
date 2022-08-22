"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81145],{62515:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-0fff8a38",path:"/devices/TS011F_plug_3.html",title:"TuYa TS011F_plug_3 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS011F_plug_3 control via MQTT",description:"Integrate your TuYa TS011F_plug_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Issues with device turning off",slug:"issues-with-device-turning-off",children:[]},{level:3,title:"Broken attribute reporting functionality",slug:"broken-attribute-reporting-functionality",children:[]},{level:3,title:"Reset energy",slug:"reset-energy",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Power_outage_memory (enum)",slug:"power-outage-memory-enum",children:[]},{level:3,title:"Indicator_mode (enum)",slug:"indicator-mode-enum",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS011F_plug_3.md",git:{updatedTime:1661187643e3}}},92627:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(66252);const a=(0,i.uE)('<h1 id="tuya-ts011f-plug-3" tabindex="-1"><a class="header-anchor" href="#tuya-ts011f-plug-3" aria-hidden="true">#</a> TuYa TS011F_plug_3</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS011F_plug_3</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Smart plug (with power monitoring by polling)</td></tr><tr><td>Exposes</td><td>switch (state), power, current, voltage, energy, power_outage_memory, indicator_mode, lock (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS011F_plug_3.jpg" alt="TuYa TS011F_plug_3"></td></tr><tr><td>White-label</td><td>VIKEFON TS011F, BlitzWolf BW-SHP15, Avatto MIUCOT10Z, Neo NAS-WR01B</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="issues-with-device-turning-off" tabindex="-1"><a class="header-anchor" href="#issues-with-device-turning-off" aria-hidden="true">#</a> Issues with device turning off</h3><p>It&#39;s been reported by several people that this plug randomly turns off. See https://github.com/Koenkk/zigbee2mqtt/issues/11648</p><h3 id="broken-attribute-reporting-functionality" tabindex="-1"><a class="header-anchor" href="#broken-attribute-reporting-functionality" aria-hidden="true">#</a> Broken attribute reporting functionality</h3><p>Starting with firmware version 1.0.5 (which comes pre-flashed on plugs produced since Q4 2021) core functionality on this plug is broken. TuYa has disabled the automatic reporting of power, voltage and current values meaning they need to be polled instead. The poll interval can be controlled through the <code>measurement_poll_interval</code> option.</p>',7),r=(0,i.Uk)("If your plug is affected, it will be detected as "),d=(0,i.Uk)("TS011F_plug_3"),n=(0,i.Uk)(" instead of "),u=(0,i._)("code",null,"TS011F_plug_1",-1),c=(0,i.Uk)("."),l=(0,i.uE)('<h3 id="reset-energy" tabindex="-1"><a class="header-anchor" href="#reset-energy" aria-hidden="true">#</a> Reset energy</h3><p>To reset &quot;Sum of consumed energy&quot;, use the Dev console and execute: Endpoint: 1 Cluster: 0x00 Command: 0 Payload: (don&#39;t change this)</p><p>Next time the plug gets polled, &quot;Sum of consumed energy&quot; will start from zero again.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair this device with a long press (5 seconds) on the on/off button. The button will flash blue to indicate it&#39;s in pairing mode. When the blue flashing stops it should be paired and the led will turn solid red. If the led is solid blue, the device is not paired or paring was not successful.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),s=(0,i.Uk)("This device supports OTA updates, for more information see "),h=(0,i.Uk)("OTA updates"),p=(0,i.Uk)("."),g=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),m=(0,i.Uk)("How to use device type specific configuration"),f=(0,i.uE)('<ul><li><p><code>measurement_poll_interval</code>: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of <code>-1</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum" aria-hidden="true">#</a> Power_outage_memory (enum)</h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum" aria-hidden="true">#</a> Indicator_mode (enum)</h3><p>Plug LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),b={},v=(0,o(83744).Z)(b,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[r,(0,i.Wm)(o,{to:"/devices/TS011F_plug_3.html"},{default:(0,i.w5)((()=>[d])),_:1}),n,u,c]),l,(0,i._)("p",null,[s,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[h])),_:1}),p]),g,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[m])),_:1})])]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);