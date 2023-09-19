const success = (api) => {
  api.start(() => {
    console.log("started");
    const loadingScreen = document.querySelector(".loading-screen");
    const iframe = document.getElementById("api-frame");

    loadingScreen.style.display = "none"; // Hide loading screen
    iframe.style.display = "block";

    api.addEventListener("viewerready", () => {
      api.getNodeMap(function (err, nodes) {
        if (!err) {
          window.console.log(nodes); // [ ... ]
        }
      });
      api.getMaterialList(function (err, materials) {
        if (!err) {
          window.console.log(materials);
        }
      });
      api.getMaterialList(function (err, materials) {
        // Turn off the diffuse on the first material
        var materialToUpdate = materials[0];
        materialToUpdate.channels.DiffuseColor.enable = false;
        window.console.log(materialToUpdate);

        // Apply the change
        api.setMaterial(materialToUpdate, function () {
          window.console.log("Material updated");
        });
      });
      api.addTexture(
        //"https://example.org/texture.png",
        function (err, textureUid) {
          if (!err) {
            window.console.log("New texture registered with UID", textureUid);
          }
        }
      );
      api.getMaterialList(function (err, materials) {
        if (!err) {
          window.console.log(materials);
        }
      });
      api.getMaterialList(function (err, materials) {
        // Turn off the diffuse on the first material
        var materialToUpdate = materials[0];
        materialToUpdate.channels.DiffuseColor.enable = false;
        window.console.log(materialToUpdate);

        // Apply the change
        api.setMaterial(materialToUpdate, function () {
          window.console.log("Material updated");
        });
      });
    });
  });
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
