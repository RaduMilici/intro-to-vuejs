import { OBJLoader, MTLLoader } from "three-full";
import { get } from "request";

class MeshLoader {
  constructor(meshData) {
    this.OBJLoader = new OBJLoader();
    this.MTLLoader = new MTLLoader();
    this.meshData = meshData;
  }
  getObj(url) {
    return new Promise(resolve => {
      get({ url }, (error, response, body) => {
        resolve(body);
      });
    });
  }

  findFormat(format) {
    const byType = f => f.formatType === format;
    return this.meshData.formats.find(byType);
  }

  findMtl(format) {
    const resource = format.resources.find(resource =>
      resource.url.endsWith(".mtl")
    );
    return resource ? resource.url : null;
  }

  async load() {
    const format = this.findFormat("OBJ");
    const objUrl = format.root.url;
    const matUrl = this.findMtl(format);

    const objData = await this.getObj(objUrl);
    const mtlData = await this.getObj(matUrl);

    const mtl = this.MTLLoader.parse(mtlData);
    this.OBJLoader.setMaterials(mtl);

    const mesh = this.OBJLoader.parse(objData);
    return mesh;
  }
}

export default MeshLoader;
