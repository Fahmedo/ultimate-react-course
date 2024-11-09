import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabin').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // create image
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  // create image path
  // check if there is image path for edited image else create
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1.create cabin
  let query = supabase.from('cabin');

  // A Create
  if (!id)
    query = query.insert([
      {
        ...newCabin,
        image: imagePath,
      },
    ]);

  // B Edit
  if (id)
    query = query
      .update({
        ...newCabin,
        image: imagePath,
      })
      .eq('id', id);

  const { data, error } = await query.select().single();
  if (error) {
    throw new Error('Cabin could not be created');
  }

  if (hasImagePath) return data;
  // 2. if cabine uploaded, upload image

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. Delete cabin if there was storage error

  if (storageError) {
    await supabase.from('cabin').delete().eq('id', data.id);
    throw new Error('Cabin was not uploaded and cabin deleted');
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabin').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }
  return data;
}
