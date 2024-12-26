import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function createEditCabin(newCabin, id) {
  const img = newCabin.image;
  const hasImagePath = img?.startsWith?.(supabaseUrl);
  const imgName = `${Math.random()}-${img.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? img
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imgName}`;

  let query = supabase.from("cabins");

  // A) Create new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit cabin

  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error(
      !id ? "Cabin could not be created" : "Cabin could not be edited"
    );
  }

  // Uploading image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imgName, img);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created!"
    );
  }
}
