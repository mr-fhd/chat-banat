
var manual_or_random = "manual";
var randomsetting = "3 days";
function getCookie(Name) {
 var dt = new RegExp(Name + "=[^;]+", "i");
 if (document["cookie"]["match"](dt)) {
   return document["cookie"]["match"](dt)[0]["split"]("=")[1];
 }
 return null;
}
function setCookie(name, value, nextBackupDT) {
 var expected_date2 = new Date;
 var _0x2915xb = typeof nextBackupDT != "undefined" ? expected_date2["setDate"](expected_date2["getDate"]() + parseInt(nextBackupDT)) : expected_date2["setDate"](expected_date2["getDate"]() - 5);
 document["cookie"] = name + "=" + value + "; expires=" + expected_date2["toGMTString"]() + "; path=/";
}
function deleteCookie(name) {
 setCookie(name, "moot");
}
function setStylesheet(title, randomize) {
 var _l;
 var el;
 var PL$120 = [""];
 _l = 0;
 for (; el = document["getElementsByTagName"]("link")[_l]; _l++) {
   if (el["getAttribute"]("rel")["toLowerCase"]() == "alternate stylesheet" && el["getAttribute"]("title")) {
     el["disabled"] = true;
     PL$120["push"](el);
     if (el["getAttribute"]("title") == title) {
       el["disabled"] = false;
     }
   }
 }
 if (typeof randomize != "undefined") {
   var i = Math["floor"](Math["random"]() * PL$120["length"]);
   PL$120[i]["disabled"] = false;
 }
 return typeof randomize != "undefined" && PL$120[i] != "" ? PL$120[i]["getAttribute"]("title") : "";
}
function chooseStyle(styletitle, days) {
 if (document["getElementById"]) {
   setStylesheet(styletitle);
   setCookie("mysheet", styletitle, days);
 }
}
function indicateSelected(result) {
 if (selectedtitle != null && (result["type"] == undefined || result["type"] == "select-one")) {
   result = result["type"] == "select-one" ? result["options"] : result;
   var i = 0;
   for (; i < result["length"]; i++) {
     if (result[i]["value"] == selectedtitle) {
       if (result[i]["tagName"] == "OPTION") {
         result[i]["selected"] = true;
       } else {
         result[i]["checked"] = true;
       }
       break;
     }
   }
 }
}
if (manual_or_random == "manual") {
 var selectedtitle = getCookie("mysheet");
 if (document["getElementById"] && selectedtitle != null) {
   setStylesheet(selectedtitle);
 }
} else {
 if (manual_or_random == "random") {
   if (randomsetting == "eachtime") {
     setStylesheet("", "random");
   } else {
     if (randomsetting == "sessiononly") {
       if (getCookie("mysheet_s") == null) {
         document["cookie"] = "mysheet_s=" + setStylesheet("", "random") + "; path=/";
       } else {
         setStylesheet(getCookie("mysheet_s"));
       }
     } else {
       if (randomsetting["search"](/^[1-9]+ days/i) != -1) {
         if (getCookie("mysheet_r") == null || parseInt(getCookie("mysheet_r_days")) != parseInt(randomsetting)) {
           setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting));
           setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting));
         } else {
           setStylesheet(getCookie("mysheet_r"));
         }
       }
     }
   }
 }
}
;
