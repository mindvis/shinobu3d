const success = (api) => {
  api.start(() => console.log("started"));
};

var iframe = document.getElementById("api-frame");
var version = "1.12.1";
var client = new Sketchfab(version, iframe);

var uid = "cf8536f8ac75430a9b37090699e215a3";

client.init(uid, {
  success: success,
  error: function onError() {
    console.log("Viewer error");
  },
  ui_stop: 0,
  preload: 1,
  camera: 0,
  transparent: 0,
  ui_infos: 0,
  ui_watermark: 0,
  ui_watermark_link: 0,
  ui_settings: 0,
  ui_vr: 0,
  ui_help: 0,
  ui_fullscreen: 0,
  ui_annotations: 0,
  ui_inspector: 0
});