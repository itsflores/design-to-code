// This shows the HTML page in "ui.html".
figma.showUI(__html__);
//element: HTMLElement;


figma.ui.onmessage = msg => {
  if(msg.type === 'create-all'){
    for(const node of figma.currentPage.children){
      if("x" in node){
        node.x += 50;
      }
    }
    getDownload();
  }
  if(msg.type === 'create-selected'){
    for (const node of figma.currentPage.selection) {
      if ("x" in node) {
        node.x += 5;
        console.log("Name: " + node.name);
        console.log("Type: " + node.type);
        console.log("x: " + node.x);
        console.log("y: " + node.y);
        console.log("width: " + node.width);
        console.log("height: " + node.height);
        console.log("Locked: " + node.locked);
        console.log("Transform: " + node.relativeTransform);
        if("opacity" in node) console.log("opacity: " + node.opacity);
      }
    }
    getDownload();
  }
  if(msg.type === 'cancel'){figma.closePlugin();}

  function getDownload(){
    
  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
