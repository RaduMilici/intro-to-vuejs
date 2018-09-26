import { load } from "./poly";
import MeshLoader from "./MeshLoader";

const loadModel = async id => {
  const meshData = await load(id);
  const loader = new MeshLoader(meshData);
  const mesh = await loader.load();
  return mesh;
};

export default loadModel;
