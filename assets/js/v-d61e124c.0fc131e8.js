"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24901],{50815:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-d61e124c",path:"/devices/mKomfy_Sensor.html",title:"CTM Lyng mKomfy_Sensor control via MQTT",lang:"en-US",frontmatter:{title:"CTM Lyng mKomfy_Sensor control via MQTT",description:"Integrate your CTM Lyng mKomfy_Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Alarm_status (enum)",slug:"alarm-status-enum",children:[]},{level:3,title:"Active (binary)",slug:"active-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/mKomfy_Sensor.md",git:{updatedTime:1661187643e3}}},75483:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(66252);const i=(0,r.uE)('<h1 id="ctm-lyng-mkomfy-sensor" tabindex="-1"><a class="header-anchor" href="#ctm-lyng-mkomfy-sensor" aria-hidden="true">#</a> CTM Lyng mKomfy_Sensor</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>mKomfy_Sensor</td></tr><tr><td>Vendor</td><td>CTM Lyng</td></tr><tr><td>Description</td><td>mKomfy, stove guard</td></tr><tr><td>Exposes</td><td>battery, battery_low, temperature, alarm_status, active, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/mKomfy_Sensor.jpg" alt="CTM Lyng mKomfy_Sensor"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),o=(0,r.Uk)("How to use device type specific configuration"),d=(0,r.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="alarm-status-enum" tabindex="-1"><a class="header-anchor" href="#alarm-status-enum" aria-hidden="true">#</a> Alarm_status (enum)</h3><p>Alarm status.. Value can be found in the published state on the <code>alarm_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>ok</code>, <code>tamper</code>, <code>high_temperatur</code>, <code>timer</code>, <code>battery_alarm</code>, <code>error</code>, <code>unknown</code>.</p><h3 id="active-binary" tabindex="-1"><a class="header-anchor" href="#active-binary" aria-hidden="true">#</a> Active (binary)</h3><p>Stove guard active/inactive (Stove in use). Value can be found in the published state on the <code>active</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> active is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),n={},s=(0,a(83744).Z)(n,[["render",function(e,t){const a=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,r]of t)e[a]=r;return e}}}]);