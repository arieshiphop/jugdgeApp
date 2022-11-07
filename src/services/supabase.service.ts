import supabase from "@/helpers/supabase";
import { decode } from "base64-arraybuffer";

export async function uploadFile(file, bucket, fileName, fileNamePath) {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(`${fileName}.png`, decode(file), {
      contentType: "image/png",
    });
  if (error) {
    console.log(error);
  } else {
    console.log("File uploaded successfully");
    return await getFilePath("images", "avatars", fileNamePath);
  }
}
export async function getFilePath(bucket, folder, fileName) {
  const { data } = await supabase.storage
    .from(bucket)
    .getPublicUrl(`${folder}/avatar-${fileName}.png`);
  console.log("imagen subida");
  return data.publicUrl;
}
