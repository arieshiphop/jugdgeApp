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
  }
  console.log("File uploaded successfully");
  return await getFilePath("images", `avatar-${fileNamePath}.png`, "avatars");
}
export async function uploadAudioFile(file, bucket, fileName, fileNamePath) {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(`${fileName}.mp3`, decode(file), {
      contentType: "audio/mp3",
    });
  if (error) {
    console.log(error);
  }
  return await getFilePath("audios", `audio-${fileNamePath}.mp3`);
}
export async function getFilePath(bucket, fileName, folder = "") {
  const publicUrl = folder != "" ? `${folder}/${fileName}` : fileName;
  const { data } = await supabase.storage.from(bucket).getPublicUrl(publicUrl);
  console.log("archivo subido a ", publicUrl, data.publicUrl);
  return data.publicUrl;
}
