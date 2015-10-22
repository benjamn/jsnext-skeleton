export {version} from "../package.json";

export async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
  return ms;
}
