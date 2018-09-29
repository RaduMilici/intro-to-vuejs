import { load } from "./poly";
import MeshLoader from "./MeshLoader";

const loadModel = async id => {
  const meshData = await load(id);
  const loader = new MeshLoader(meshData);
  return await loader.load();
};

export default loadModel;
