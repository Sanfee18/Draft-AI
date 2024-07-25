import { ComfyDeployClient } from "comfydeploy";

const client = new ComfyDeployClient({
  apiBase: process.env.COMFY_API_URL,
  apiToken: process.env.COMFY_API_TOKEN,
});

export async function generate_img(imput_img, prompt) {
  return await client.run({
    deployment_id: process.env.COMFY_DEPLOYMENT_ID_IMG_2_IMG,
    inputs: {
      input_image: imput_img,
      positive_prompt: prompt,
    },
  });
}

export async function checkStatus(run_id) {
  return await client.getRun(run_id);
}

export async function getUploadUrl(type, file_size) {
  try {
    return await client.getUploadUrl(type, file_size);
  } catch (error) {
    console.log(`Error getting image: ${error}`);
  }
}
