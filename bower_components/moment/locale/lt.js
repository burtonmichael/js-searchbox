(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(require("../moment")):typeof define=="function"&&define.amd?define(["moment"],t):t(e.moment)})(this,function(e){"use strict";function r(e,t,n,r){return t?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"}function i(e,t,n,r){return t?o(n)[0]:r?o(n)[1]:o(n)[2]}function s(e){return e%10===0||e>10&&e<20}function o(e){return t[e].split("_")}function u(e,t,n,r){var u=e+" ";return e===1?u+i(e,t,n[0],r):t?u+(s(e)?o(n)[1]:o(n)[0]):r?u+o(n)[1]:u+(s(e)?o(n)[1]:o(n)[2])}function a(e,t){var r=t.indexOf("dddd HH:mm")===-1,i=n[e.day()];return r?i:i.substring(0,i.length-2)+"į"}var t={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},n="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),f=e.defineLocale("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:a,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:r,m:i,mm:u,h:i,hh:u,d:i,dd:u,M:i,MM:u,y:i,yy:u},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});return f});